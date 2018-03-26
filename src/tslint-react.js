const path = require('path');

const rules = {
  'jsx-alignment': true,
  // specific for every project
  'jsx-ban-elements': false,
  // specific for every project
  'jsx-ban-props': false,
  'jsx-boolean-value': [
    true,
    'never',
  ],
  'jsx-curly-spacing': [
    true,
    'never',
  ],
  'jsx-equals-spacing': [
    true,
    'never',
  ],
  // produces false positive in accordance with documentation
  'jsx-key': false,
  'jsx-no-bind': true,
  'jsx-no-lambda': true,
  // may interfere with the developer experience
  'jsx-no-multiline-js': false,
  'jsx-no-string-ref': true,
  // may interfere with the developer experience
  'jsx-use-translation-function': false,
  'jsx-self-close': true,
  // produces false positives
  'jsx-wrap-multiline': false,
};

module.exports = {
  rulesDirectory: path.resolve(process.cwd(), './node_modules/tslint-react/rules'),
  rules,
};
