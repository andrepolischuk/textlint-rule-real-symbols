# textlint-rule-real-symbols [![Build Status][travis-image]][travis-url]

> Use real symbols, not alphabetic substitutes

[Textlint](https://github.com/textlint/textlint) rule to check and fix real symbols.

## Install

```sh
npm install --save textlint-rule-real-symbols
```

## Usage

```sh
textlint --fix --rule real-symbols README.md
```

Or enable the rule in your `.textlintrc`:

```js
{
  "rules": {
    "real-symbols": true
  }
}
```

Read more about [configuring textlint](https://github.com/textlint/textlint/blob/master/docs/configuring.md).

## Examples

* `3 x 2 = 6` → `3 × 2 = 6`
* `3 - 2 = 1` → `3 − 2 = 1`
* `3 >= 2` → `3 ≥ 2`
* `1 =< 2` → `1 ≤ 2`
* `99999 >> 1` → `99999 ≫ 1`
* `1 << 99999` → `1 ≪ 99999`
* `10 +- 1` → `10 ± 1`
* `10 -+ 1` → `10 ∓ 1`
* `a <-> b` → `a ↔ b`
* `a <=> b` → `a ⇔ b`
* `a <- b` → `a ← b`
* `a -> b` → `a → b`
* `a <= b` → `a ⇐ b`
* `a => b` → `a ⇒ b`
* `(c) 2015 Foo` → `© 2015 Foo`
* `Foo (r)` → `Foo ®`
* `Foo(tm)` → `Foo™`
* `Foo bar baz...` → `Foo bar baz…`
* `Foo -- bar` → `Foo — bar`
* `2009-2015` → `2009–2015`

## License

MIT

[travis-url]: https://travis-ci.org/andrepolischuk/textlint-rule-real-symbols
[travis-image]: https://travis-ci.org/andrepolischuk/textlint-rule-real-symbols.svg?branch=master
