const path = require('path');

module.exports = {
  rulesDirectory: [path.resolve(process.cwd(), 'node_modules/vrsource-tslint-rules/rules')],
  rules: {
    'conditional-expression-parens': false,
    'ext-variable-name': false,
    'literal-spacing': [
      true,
      {
        'array': ['never'],
        'object': ['never'],
        'import': ['never']
      }
    ],
    'multiline-arrow': false,
    'no-duplicate-imports': true,
    'no-jasmine-focus': true,
    'no-param-reassign': true,
    "prefer-case-blocks": false,
    "prefer-literal": [
      true,
      "object",
      "function"
    ]
  }
};