# tslint-config-poetez

> A [TSLint config](https://palantir.github.io/tslint/usage/tslint-json/)
for [Poetez Project](https://github.com/poetez)

**Note**: This is an alpha release. Use it at your own risk.

## Usage

In `tslint.json`:
```json
{
  "extends": "tslint-config-poetez"
}
```

### Rules
Used all recommended rules from:
* [tslint](https://palantir.github.io/tslint/)
* [tslint-eslint-rules](https://github.com/buzinas/tslint-eslint-rules)
* [tslint-microsoft-contrib](https://github.com/Microsoft/tslint-microsoft-contrib)
* [vrsource-tslint-rules](https://github.com/vrsource/vrsource-tslint-rules)

With some additional changes: 
* `arrow-parens` is disabled,
* `completed-docs` is disabled,
* `missing-jsdoc` is disabled,
* `import-name` is disabled,
* `interface-name` is disabled,
* `match-default-export-name` is disabled,
* `max-line-length` is set to 140 symbols,
* `mocha-no-side-effect-code` is set to ignore `xit` tests,
* `no-backbone-get-set-outside-model` is disabled,
* `no-default-export` is disabled,
* `no-import-side-effect` is disabled,
* `no-parameter-properties` is disabled,
* `no-relative-imports` is disabled,
* `no-reserved-keywords` is disabled,
* `no-unused-expression` is set with `allow-fast-null-checks`,
* `ordered-imports` is enabled,
* `prefer-array-literal` is disabled,
* `prefer-type-cast` is disabled,
* `quotemark` is set to be single in JS and double in JSX,
* `react-tsx-curly-spacing` is enabled to avoid spaces inside JSX curly spacing except multi-line code,
* `strict-boolean-expressions` is disabled,
* `typedef` applies only for: 
  * `call-signature`
  * `parameter`
* `variable-name` allows to use leading underscore.
* `export-name` is disabled,
* `no-unsafe-any` is disabled