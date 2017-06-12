module.exports = {
  "insecure-random": true,
  "no-banned-terms": true,
  "no-cookies": true,
  "no-delete-expression": true,
  "no-disable-auto-sanitization": true,
  "no-document-domain": true,
  "no-document-write": true,
  "no-exec-script": true,
  "no-function-constructor-with-string-args": true,
  "no-http-string": [true, "http://www.example.com/?.*", "http://www.examples.com/?.*"],
  "no-inner-html": true,
  "no-octal-literal": true,
  "no-reserved-keywords": true,
  "no-string-based-set-immediate": true,
  "no-string-based-set-interval": true,
  "no-string-based-set-timeout": true,
  "non-literal-require": true,
  "possible-timing-attack": true,
  "react-anchor-blank-noopener": true,
  "react-iframe-missing-sandbox": true,
  "react-no-dangerous-html": true,

  /*
   * Common Bugs and Correctness. The following rules should be turned on because they find
   * common bug patterns in the code or enforce type safety.
   */
  "await-promise": true,
  "jquery-deferred-must-complete": true,
  "match-default-export-name": true,
  "mocha-avoid-only": true,
  "mocha-no-side-effect-code": true,
  "no-backbone-get-set-outside-model": true,
  "no-constant-condition": true,
  "no-control-regex": true,
  "no-duplicate-case": true,
  "no-duplicate-variable": true,
  "no-floating-promises": true,
  "no-for-in-array": true,
  "no-import-side-effect": true,
  "no-increment-decrement": true,
  "no-invalid-regexp": true,
  "no-invalid-template-strings": true,
  "no-jquery-raw-elements": true,
  "no-non-null-assertion": true,
  "no-regex-spaces": true,
  "no-sparse-arrays": true,
  "no-stateless-class": true,
  "no-unnecessary-bind": true,
  "no-unnecessary-callback-wrapper": true,
  "no-unnecessary-override": true,
  "no-unsafe-any": true,
  "no-with-statement": true,
  "promise-function-async": true,
  "promise-must-complete": true,
  "react-this-binding-issue": true,
  "react-unused-props-and-state": true,
  "restrict-plus-operands": true, // the plus operand should really only be used for strings and numbers
  "strict-boolean-expressions": true,
  "switch-default": true,
  "use-named-parameter": true,
  "valid-typeof": true,

  /*
   * Code Clarity. The following rules should be turned on because they make the code
   * generally more clear to the reader.
   */
  "chai-prefer-contains-to-index-of": true,
  "chai-vague-errors": true,
  "completed-docs": [true, "classes"],
  "export-name": true,
  "function-name": true,
  "import-name": true,
  "max-file-line-count": true,
  "max-func-body-length": [true, 100, {"ignore-parameters-to-function-regex": "describe"}],
  "missing-jsdoc": true,
  "mocha-unneeded-done": true,
  "no-default-export": true,
  "no-for-in": true,
  "no-function-expression": true,
  "no-inferrable-types": false, // turn no-inferrable-types off in order to make the code consistent in its use of type decorations
  "no-multiline-string": true, // multiline-strings often introduce unnecessary whitespace into the string literals
  "no-null-keyword": false, // turn no-null-keyword off and use undefined to mean not initialized and null to mean without a value
  "no-relative-imports": true,
  "no-require-imports": true,
  "no-suspicious-comment": true,
  "no-typeof-undefined": true,
  "no-unnecessary-field-initialization": true,
  "no-unnecessary-local-variable": true,
  "no-unnecessary-qualifier": true,
  "no-unsupported-browser-code": true,
  "no-useless-files": true,
  "no-var-self": true,
  "no-void-expression": true,
  "prefer-array-literal": true,
  "prefer-method-signature": true,
  "prefer-template": true,
  "return-undefined": false, // this actually affect the readability of the code
  "underscore-consistent-invocation": true,

  /*
   * Accessibility. The following rules should be turned on to guarantee the best user
   * experience for keyboard and screen reader users.
   */
  "react-a11y-anchors": true,
  "react-a11y-aria-unsupported-elements": true,
  "react-a11y-event-has-role": true,
  "react-a11y-image-button-has-alt": true,
  "react-a11y-img-has-alt": true,
  "react-a11y-lang": true,
  "react-a11y-meta": true,
  "react-a11y-props": true,
  "react-a11y-proptypes": true,
  "react-a11y-role": true,
  "react-a11y-role-has-required-aria-props": true,
  "react-a11y-role-supports-aria-props": true,
  "react-a11y-tabindex-no-positive": true,
  "react-a11y-titles": true,

  /*
   * Whitespace related rules. The only recommended whitespace strategy is to pick a single format and
   * be consistent.
   */
  "linebreak-style": true,
  "newline-before-return": true,
  "no-empty-line-after-opening-brace": false,
  "no-single-line-block-comment": true,
  "no-unnecessary-semicolons": true,
  "react-tsx-curly-spacing": true,

  /*
   * Controversial/Configurable rules.
   */
  "ban": false,                // only enable this if you have some code pattern that you want to ban
  "file-header": false,  // enable this rule only if you are legally required to add a file header
  "import-blacklist": false,  // enable and configure this as you desire
  "no-inferred-empty-object-type": false,  // if the compiler is satisfied then this is probably not an issue
  "no-magic-numbers": false,  // by default it will find too many false positives
  "no-mergeable-namespace": false,  // your project may require mergeable namespaces
  "no-unexternalized-strings": false, // the VS Code team has a specific localization process that this rule enforces
  "prefer-type-cast": true,   // pick either type-cast format and use it consistently

  /*
   * Deprecated rules.  The following rules are deprecated for various reasons.
   */
  "missing-optional-annotation": false,  // now supported by TypeScript compiler
  "no-duplicate-parameter-names": false, // now supported by TypeScript compiler
  "no-empty-interfaces": false, // use tslint no-empty-interface rule instead
  "no-missing-visibility-modifiers": false, // use tslint member-access rule instead
  "no-multiple-var-decl": false,         // use tslint one-variable-per-declaration rule instead,
};