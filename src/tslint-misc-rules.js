const path = require('path');

const rules = {
  // handled by "ordered-imports" rule of tslint core
  'sort-imports': false,
  'prefer-es6-imports': true,
  'class-method-newlines': true,
  // handled by "jsx-equals-spacing" of tslint-react
  'jsx-attribute-spacing': false,
  // handled by "jsx-curly-spacing" of tslint-react
  'jsx-expression-spacing': false,
  // this config consider vice versa behavior
  'jsx-no-closing-bracket-newline': false,
  'jsx-no-braces-for-string-attributes': true,
  // may interfere with the developer experience
  'react-lifecycle-order': false,
  'prefer-or-operator-over-ternary': true,
  // handled by "no-unnecessary-initializer" rule of tslint core
  'no-property-initializers': false,
  // handled by "naming-convention" rule of tslint-cosistent-codestyle
  'camel-case-local-functions': false,
  // may interfere with the developer experience
  'declare-class-methods-after-use': false,
  // handled by "arrow-return-shorthand" rule of tslint core
  'no-braces-for-single-line-arrow-functions': false,
  // handled by "ter-arrow-parens" rule of tslint-eslint-rules
  'no-unnecessary-parens-for-arrow-function-arguments': false,
};

module.exports = {
  rulesDirectory: path.resolve(process.cwd(), './node_modules/tslint-misc-rules/rules'),
  rules,
};
