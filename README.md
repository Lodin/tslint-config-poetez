# tslint-config-poetez

> A [TSLint config](https://palantir.github.io/tslint/usage/tslint-json/)
for [Poetez Project](https://github.com/poetez)

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
* `completed-docs` is disabled
* `missing-jsdoc` is disabled
* `no-default-export` is disabled
* `no-import-side-effect`: disabled
* `no-parameter-properties` is disabled
* `no-relative-imports` is disabled
* `no-unused-expression`: `allow-fast-null-checks` is allowed
* `prefer-array-literal` is disabled
* `typedef` applies only for: 
  * `call-signature`
  * `parameter`
  * `member-variable-declaration`
* `quotemark` uses single quotes