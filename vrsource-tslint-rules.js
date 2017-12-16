const path = require('path');

module.exports = {
  rulesDirectory: [path.resolve(
    path.dirname(require.resolve('vrsource-tslint-rules')),
    'rules',
  )],
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
    'prefer-case-blocks': false,
    'prefer-literal': [
      true,
      'object',
      'function'
    ]
  }
};