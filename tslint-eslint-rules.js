const path = require('path');

module.exports = {
  rulesDirectory: [path.resolve(process.cwd(), 'node_modules/tslint-eslint-rules/dist/rules')],
  rules: {
    // Possible Errors
    'no-constant-condition': true,
    'no-control-regex': true,
    'no-duplicate-case': true,
    'no-empty-character-class': true,
    'no-ex-assign': true,
    'no-extra-boolean-cast': true,
    'no-extra-semi': true,
    'no-inner-declarations': [true, 'functions'],
    'no-invalid-regexp': true,
    'ter-no-irregular-whitespace': true,
    'no-regex-spaces': true,
    'ter-no-sparse-arrays': true,
    'valid-typeof': true,

    // Best Practices
    'no-multi-spaces': true,

    // Node.js and CommonJS
    'handle-callback-err': true,

    // Stylistic Issues
    'array-bracket-spacing': [true, 'never'],
    'block-spacing': [true, 'always'],
    'brace-style': [true, '1tbs'],
    'ter-indent': [true, 2, {SwitchCase: 1}],
    'ter-max-len': false, // tslint "max-line-length"
    'object-curly-spacing': [true, 'never'],
    'sort-imports': false, // tslint 'ordered-imports'
    'space-in-parens': [true, 'never'],

    // ECMAScript 6
    'ter-arrow-body-style': [true, 'as-needed'],
    'ter-arrow-parens': [true, 'as-needed', { 'requireForBlockBody': true }],
    'ter-arrow-spacing': true,
    'ter-prefer-arrow-callback': false,
  },
};