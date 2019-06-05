const path = require('path');

const rules = {
  'insecure-random': true,
  'no-banned-terms': true,
  'no-document-domain': true,
  'no-document-write': true,
  'no-exec-script': true,
  'no-function-constructor-with-string-args': true,
  // preferred over tslint "increment-decrement" rule because it allows
  // increment-decrement for loops
  'no-increment-decrement': [true, "allow-for-loop"],
  'no-inner-html': true,
  // forbids multiline even for template literal
  'no-multiline-string': false,
  'no-octal-literal': true,
  // relative imports are defined in spec
  'no-relative-imports': false,
  // handled by "variable-name" rule of tslint core
  'no-reserved-keywords': false,
  // time to time they are very necessary
  'no-single-line-block-comment': false,
  'no-string-based-set-immediate': true,
  'no-string-based-set-interval': true,
  'no-string-based-set-timeout': true,
  // handled by "comment-format" rule of tslint core
  'no-suspicious-comment': false,
  'no-typeof-undefined': true,
  // may interfere with the developer experience
  'no-unnecessary-bind': false,
  // handled by "no-unnecessary-initializer" rule of tslint core
  'no-unnecessary-field-initialization': false,
  // handled by "no-var-before-return: rule of tslint-consistent-codestyle
  'no-unnecessary-local-variable': false,
  'no-unnecessary-override': true,
  // handled by "no-extra-semi" rule of tslint-eslint-rules
  'no-unnecessary-semicolons': false,
  'no-with-statement': true,
  'non-literal-require': true,
  // disallows creating arrays with predefined length, which can affect performance
  'prefer-array-literal': false,
  'react-a11y-anchors': true,
  'react-a11y-aria-unsupported-elements': true,
  'react-a11y-event-has-role': true,
  'react-a11y-image-button-has-alt': true,
  'react-a11y-img-has-alt': true,
  'react-a11y-lang': true,
  'react-a11y-meta': true,
  'react-a11y-props': true,
  'react-a11y-proptypes': true,
  'react-a11y-role': true,
  'react-a11y-role-has-required-aria-props': true,
  'react-a11y-role-supports-aria-props': true,
  'react-a11y-tabindex-no-positive': true,
  'react-a11y-titles': true,
  'react-anchor-blank-noopener': true,
  'react-iframe-missing-sandbox': true,
  'react-no-dangerous-html': true,
};

module.exports = {
  rulesDirectory: path.resolve(process.cwd(), './node_modules/tslint-microsoft-contrib'),
  rules,
};
