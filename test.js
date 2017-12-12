const TextLintTester = require('textlint-tester')
const rule = require('./index')

const tester = new TextLintTester()

tester.run('symbols', rule, {
  valid: [
    '3 × 2 = 6',
    '3 − 2 = 1',
    '3 ≥ 2',
    '1 ≤ 2',
    '99999 ≫ 1',
    '1 ≪ 99999',
    '10 ± 1',
    '10 ∓ 1',
    'a ↔ b',
    'a ⇔ b',
    'a ← b',
    'a → b',
    'a ⇐ b',
    'a ⇒ b',
    '© 2015 Foo',
    'Foo ®',
    'Foo™',
    'Foo bar baz…',
    'Foo — bar',
    '2009–2015'
  ],
  invalid: [
    {
      text: '3 x 2 = 6',
      output: '3 × 2 = 6',
      errors: [
        {
          message: 'Use real symbols: “3 x 2” → “3 × 2”'
        }
      ]
    },
    {
      text: '3 - 2 = 1',
      output: '3 − 2 = 1',
      errors: [
        {
          message: 'Use real symbols: “3 - 2” → “3 − 2”'
        }
      ]
    },
    {
      text: '3 >= 2',
      output: '3 ≥ 2',
      errors: [
        {
          message: 'Use real symbols: “3 >= 2” → “3 ≥ 2”'
        }
      ]
    },
    {
      text: '1 =< 2',
      output: '1 ≤ 2',
      errors: [
        {
          message: 'Use real symbols: “1 =< 2” → “1 ≤ 2”'
        }
      ]
    },
    {
      text: '99999 >> 1',
      output: '99999 ≫ 1',
      errors: [
        {
          message: 'Use real symbols: “9 >> 1” → “9 ≫ 1”'
        }
      ]
    },
    {
      text: '1 << 99999',
      output: '1 ≪ 99999',
      errors: [
        {
          message: 'Use real symbols: “1 << 9” → “1 ≪ 9”'
        }
      ]
    },
    {
      text: '10 +- 1',
      output: '10 ± 1',
      errors: [
        {
          message: 'Use real symbols: “+-” → “±”'
        }
      ]
    },
    {
      text: '10 -+ 1',
      output: '10 ∓ 1',
      errors: [
        {
          message: 'Use real symbols: “-+” → “∓”'
        }
      ]
    },
    {
      text: 'a <-> b',
      output: 'a ↔ b',
      errors: [
        {
          message: 'Use real symbols: “<->” → “↔”'
        }
      ]
    },
    {
      text: 'a <=> b',
      output: 'a ⇔ b',
      errors: [
        {
          message: 'Use real symbols: “<=>” → “⇔”'
        }
      ]
    },
    {
      text: 'a <- b',
      output: 'a ← b',
      errors: [
        {
          message: 'Use real symbols: “<-” → “←”'
        }
      ]
    },
    {
      text: 'a -> b',
      output: 'a → b',
      errors: [
        {
          message: 'Use real symbols: “->” → “→”'
        }
      ]
    },
    {
      text: 'a <= b',
      output: 'a ⇐ b',
      errors: [
        {
          message: 'Use real symbols: “<=” → “⇐”'
        }
      ]
    },
    {
      text: 'a => b',
      output: 'a ⇒ b',
      errors: [
        {
          message: 'Use real symbols: “=>” → “⇒”'
        }
      ]
    },
    {
      text: '(c) 2015 Foo',
      output: '© 2015 Foo',
      errors: [
        {
          message: 'Use real symbols: “(c)” → “©”'
        }
      ]
    },
    {
      text: 'Foo (R)',
      output: 'Foo ®',
      errors: [
        {
          message: 'Use real symbols: “(R)” → “®”'
        }
      ]
    },
    {
      text: 'Foo(tm)',
      output: 'Foo™',
      errors: [
        {
          message: 'Use real symbols: “(tm)” → “™”'
        }
      ]
    },
    {
      text: 'Foo bar baz...',
      output: 'Foo bar baz…',
      errors: [
        {
          message: 'Use real symbols: “...” → “…”'
        }
      ]
    },
    {
      text: 'Foo -- bar',
      output: 'Foo — bar',
      errors: [
        {
          message: 'Use real symbols: “--” → “—”'
        }
      ]
    },
    {
      text: '2009-2015',
      output: '2009–2015',
      errors: [
        {
          message: 'Use real symbols: “9-2” → “9–2”'
        }
      ]
    }
  ]
})
