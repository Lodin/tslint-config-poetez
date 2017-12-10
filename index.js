const ter = require('./tslint-eslint-rules');
const tmc = require('./tslint-microsoft-contrib-recommended');
const vtr = require('./vrsource-tslint-rules');

module.exports = {
  extends: ['tslint:recommended', 'tslint-eslint-rules'],
  rulesDirectory: [
    ...ter.rulesDirectory,
    ...tmc.rulesDirectory,
    ...vtr.rulesDirectory
  ],
  rules: Object.assign({}, ter.rules, tmc.rules, vtr.rules, {
    'arrow-parens': false,
    'completed-docs': false,
    'missing-jsdoc': false,
    'import-name': false,
    'interface-name': false,
    'match-default-export-name': false,
    'max-line-length': [true, 140],
    'mocha-no-side-effect-code': [true, {'ignore': '^xit.*'}],
    'no-backbone-get-set-outside-model': false,
    'no-default-export': false,
    'no-import-side-effect': false,
    'no-non-null-assertion': false,
    'no-parameter-properties': false,
    'no-relative-imports': false,
    'no-reserved-keywords': false,
    'no-unused-expression': [true, 'allow-fast-null-checks'],
    'ordered-imports': true,
    'prefer-array-literal': false,
    'prefer-method-signature': false,
    'prefer-type-cast': false,
    'quotemark': [
      true,
      'single',
      'jsx-double',
      'avoid-template',
      'avoid-escape'
    ],
    'react-tsx-curly-spacing': [true, 'never', {allowMultiline: true}],
    'strict-boolean-expressions': false,
    'typedef': [
      true,
      'call-signature',
      'parameter'
    ],
    'variable-name': [
      true,
      'ban-keywords',
      'check-format',
      'allow-pascal-case',
      'allow-leading-underscore'
    ],
    'export-name': false,
    'no-unsafe-any': false,
  }),
};