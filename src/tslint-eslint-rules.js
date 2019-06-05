const path = require('path');

const possibleErrors = {
  'no-constant-condition': [
    true,
    {checkLoops: false}
  ],
  'no-control-regex': true,
  // handled by "no-duplicate-switch-case" rule of tslint core
  'no-duplicate-case': false,
  'no-empty-character-class': true,
  'no-ex-assign': true,
  'no-extra-boolean-cast': true,
  'no-extra-semi': true,
  'no-inner-declarations': [
    true,
    'functions',
  ],
  'no-invalid-regexp': true,
  // handled by "no-irregular-whitespace" rule of tslint core
  'ter-no-irregular-whitespace': false,
  'no-regex-spaces': true,
  // handled by "no-sparse-arrays" rule of tslint core
  'ter-no-sparse-arrays': false,
  'no-unexpected-multiline': true,
  // enforcing JSDoc is not a purpose of this config
  'valid-jsdoc': false,
  // handled by "typeof-compare" rule of tslint core
  'valid-typeof': false,
};

const bestPractices = {
  // handled by "whitespace" rule of tslint core
  'no-multi-spaces': false,
  'ter-no-proto': true,
  'ter-no-script-url': true,
  'ter-no-self-compare': true,
};

const nodejs = {
  'handle-callback-err': true,
};

const stylisticIssues = {
  'array-bracket-spacing': [
    true,
    'never',
  ],
  'block-spacing': [
    true,
    'always',
  ],
  'brace-style': [
    true,
    '1tbs'
  ],
  'ter-computed-property-spacing': [
    true,
    'never',
  ],
  // handled by "space-before-function-paren" rule of tslint core
  'ter-func-call-spacing': false,
  // handled by "indent" rule of tslint core
  'ter-indent': false,
  // handled by "max-line-length" rule of tslint core
  'ter-max-len': false,
  // may interfere with the developer experience
  'ter-newline-after-var': false,
  // handled by "indent" rule of tslint core
  'ter-no-mixed-spaces-and-tabs': false,
  'object-curly-spacing': [
    true,
    'never',
  ],
  // shows false positives
  'ter-padded-blocks': false,
  // handled by "import-ordering" rule of tslint core
  'sort-imports': false,
  // handled by "space-within-parens" rule of tslint core
  'space-in-parens': false,
  'ter-no-tabs': true,
};

const es6 = {
  // handled by "arrow-return-shorthand" rule of tslint core
  'ter-arrow-body-style': false,
  'ter-arrow-parens': [
    true,
    'as-needed',
    {'requireForBlockBody': true},
  ],
  'ter-arrow-spacing': true,
  'ter-prefer-arrow-callback': true,
};

module.exports = {
  rulesDirectory: path.resolve(process.cwd(), './node_modules/tslint-eslint-rules/dist/rules'),
  rules: {
    ...possibleErrors,
    ...bestPractices,
    ...nodejs,
    ...stylisticIssues,
    ...es6,
  }
};
