const symbols = require('./symbols')

const allSymbolsRegExp = new RegExp(`(${Object.keys(symbols).join('|')})`, 'gi')

function reporter (context) {
  const {Syntax, RuleError, report, fixer, getSource} = context

  return {
    [Syntax.Str] (node) {
      return new Promise(resolve => {
        const text = getSource(node)
        let match

        while (match = allSymbolsRegExp.exec(text)) { // eslint-disable-line no-cond-assign
          const matched = match[0]
          let replacement

          for (const symbolKey in symbols) {
            const symbolRegExp = new RegExp(symbolKey, 'gi')

            if (symbolRegExp.test(matched)) {
              replacement = matched.replace(symbolRegExp, symbols[symbolKey])
              break
            }
          }

          if (replacement === matched) {
            continue
          }

          const index = match.index

          const range = [
            index,
            index + matched.length
          ]

          const fix = fixer.replaceTextRange(range, replacement)
          const message = `Use real symbols: “${matched}” → “${replacement}”`

          report(node, new RuleError(message, {index, fix}))
        }

        resolve()
      })
    }
  }
}

module.exports = {
  linter: reporter,
  fixer: reporter
}
