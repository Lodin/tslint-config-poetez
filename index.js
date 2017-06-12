const tmc = require('./tslint-microsoft-contrib-recommended');
const vtr = require('./vrsource-tslint-rules');

module.exports = {
  extend: ['tslint:recommended', "tslint-eslint-rules"],
  rulesDirectory: [
    ...tmc.rulesDirectory,
    ...vtr.rulesDirectory
  ],
  rules: Object.assign({}, tmc.rules, vtr.rules, {
    "completed-docs": false,
    "missing-jsdoc": false,
    "import-name": false,
    "interface-name": false,
    "mocha-no-side-effect-code": [true, {"ignore": "^xit.*"}],
    "no-backbone-get-set-outside-model": false,
    "no-default-export": false,
    "no-import-side-effect": false,
    "no-parameter-properties": false,
    "no-relative-imports": false,
    "no-unused-expression": [true, "allow-fast-null-checks"],
    "prefer-array-literal": false,
    "react-tsx-curly-spacing": [true, "never"],
    "strict-boolean-expressions": false,
    "typedef": [
      true,
      "call-signature",
      "parameter"
    ],
    "quotemark": [
      true,
      "single",
      "avoid-escape"
    ]
  }),
};