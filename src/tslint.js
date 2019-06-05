const typescriptSpecific = {
  'adjacent-overload-signatures': true,
  // ts-ignore is an important part of working with Typescript
  'ban-ts-ignore': false,
  'ban-types': [
    true,
    [
      ['Boolean', 'Use `boolean` instead'],
      ['Number', 'Use `number` instead'],
      ['Object', 'Use `{}` instead'],
      ['String', 'Use `string` instead'],
      ['Symbol', 'Use `symbol` instead'],
    ]
  ],
  'member-access': [
    true,
    'check-accessor',
    'check-constructor',
    'check-parameter-property',
  ],
  'member-ordering': [
    true,
    {
      order: [
        'public-static-field',
        'protected-static-field',
        'private-static-field',
        'public-static-method',
        'protected-static-method',
        'private-static-method',
        'public-instance-field',
        'protected-instance-field',
        'private-instance-field',
        'public-constructor',
        'protected-constructor',
        'private-constructor',
        'public-instance-method',
        'protected-instance-method',
        'private-instance-method',
      ],
    }
  ],
  'no-any': false,
  'no-empty-interface': true,
  'no-import-side-effect': [
    true,
    'ignore-module',
  ],
  'no-inferrable-types': [
    true,
    'ignore-params',
    'ignore-properties',
  ],
  'no-internal-module': true,
  // not well-designed rule which irritates developer
  'no-magic-numbers': false,
  'no-namespace': [
    true,
    'allow-declarations',
  ],
  // non-null-assertions are quite useful in React for default props, etc.
  'no-non-null-assertion': false,
  'no-parameter-reassignment': true,
  'no-reference': true,
  'no-unnecessary-type-assertion': true,
  'no-var-requires': true,
  // TODO: check this rule's first argument "allow-declarations"
  'only-arrow-functions': [
    true,
    'allow-named-functions',
  ],
  'prefer-for-of': true,
  'promise-function-async': true,
  'typedef': [
    true,
    'call-signature',
    'parameter',
    'property-declaration',
    'member-variable-declaration',
  ],
  'typedef-whitespace': [
    true,
    {
      'call-signature': 'nospace',
      'index-signature': 'nospace',
      'parameter': 'nospace',
      'property-declaration': 'nospace',
      'variable-declaration': 'nospace'
    },
    {
      'call-signature': 'onespace',
      'index-signature': 'onespace',
      'parameter': 'onespace',
      'property-declaration': 'onespace',
      'variable-declaration': 'onespace'
    }
  ],
  'unified-signatures': true,
};

const functionality = {
  'await-promise': true,
  'ban-comma-operator': true,
  'ban': false,
  'curly': true,
  // forin is fastest approach to loop through the object's keys
  'forin': false,
  'function-constructor': true,
  'import-blacklist': [
    true,
    'lodash',
  ],
  'label-position': true,
  // handled by "no-banned-terms" rule of tslint-microsoft-contrib
  'no-arg': false,
  'no-bitwise': true,
  'no-conditional-assignment': true,
  'no-console': true,
  'no-construct': true,
  'no-debugger': true,
  'no-duplicate-super': true,
  'no-duplicate-switch-case': true,
  // "var" keyword is banned anyway
  'no-duplicate-variable': false,
  'no-dynamic-delete': true,
  'no-empty': [
    true,
    'allow-empty-catch',
    'allow-empty-functions',
  ],
  // handled by "no-banned-terms" rule of tslint-microsoft-contrib
  'no-eval': false,
  // often shows false positives
  'no-floating-promises': false,
  'no-for-in-array': true,
  'no-implicit-dependencies': [true, "dev", "optional"],
  'no-inferred-empty-object-type': true,
  'no-invalid-template-strings': true,
  'no-invalid-this': true,
  'no-misused-new': true,
  // null is often used by third-part libraries
  'no-null-keyword': false,
  'no-object-literal-type-assertion': [true, {"allow-arguments": true}],
  'no-return-await': true,
  'no-shadowed-variable': true,
  'no-sparse-arrays': true,
  'no-string-literal': true,
  'no-string-throw': true,
  // submodule are widely used by third-part libraries
  'no-submodule-imports': false,
  // requires disabling "--noFallthroughCasesInSwitch" flag in tsc
  'no-switch-case-fall-through': true,
  'no-this-assignment': [
    true,
    {
      'allow-destructuring': true,
    }
  ],
  'no-unbound-method': [
    true,
    'ignore-static',
  ],
  'no-unnecessary-class': true,
  // this rule hard to be applied due to typescript features
  'no-unsafe-any': false,
  'no-unsafe-finally': true,
  'no-unused-expression': [
    true,
    'allow-fast-null-checks',
  ],
  // deprecated
  'no-unused-variable': false,
  // legacy rule
  'no-use-before-declare': false,
  'no-var-keyword': true,
  'no-void-expression': [
    true,
    'ignore-arrow-function-shorthand',
  ],
  'prefer-conditional-expression': [true, 'check-else-if'],
  'prefer-object-spread': true,
  'radix': true,
  'restrict-plus-operands': true,
  // quite hard to find a reason for using this rule
  'strict-boolean-expressions': false,
  // requires enabling "--strictNullChecks" flag in tsc
  'strict-type-predicates': true,
  'switch-default': true,
  'triple-equals': true,
  // deprecated by tslint
  'typeof-compare': false,
  'unnecessary-constructor': true,
  'use-default-type-parameter': true,
  'use-isnan': true,
};

const maintainability = {
  'cyclomatic-complexity': true,
  'deprecation': true,
  'eofline': true,
  'indent': [
    true,
    'spaces',
    2,
  ],
  'linebreak-style': [
    true,
    'LF',
  ],
  'max-classes-per-file': [
    true,
    1,
  ],
  // it's too complex to predict file size with docs and code
  'max-file-line-count': false,
  'max-line-length': [
    true,
    140,
  ],
  // default exports are usable for single class declarations, etc.
  'no-default-export': false,
  // same reason as "no-default-export" rule
  'no-default-import': false,
  'no-duplicate-imports': true,
  'no-mergeable-namespace': true,
  'no-require-imports': true,
  'object-literal-sort-keys': [
    true,
    'ignore-case',
    'match-declaration-order',
  ],
  'prefer-const': true,
  'prefer-readonly': true,
  'trailing-comma': [
    true,
    {
      multiline: {
        objects: 'always',
        arrays: 'always',
        functions: 'always',
        typeLiterals: 'always'
      },
      singleline: {
        objects: 'never',
        arrays: 'never',
        functions: 'never',
        typeLiterals: 'never'
      },
      esSpecCompliant: true,
    },
  ],
};

const style = {
  // may interfere with the developer experience
  'align': false,
  'array-type': [
    true,
    'array-simple',
  ],
  // handled by "ter-arrow-parens" rule of tslint-eslint-rules
  'arrow-parens': false,
  'arrow-return-shorthand': [
    true,
    'multiline',
  ],
  'binary-expression-operand-order': true,
  'callable-types': true,
  'class-name': true,
  'comment-format': [
    true,
    'check-space',
  ],
  'comment-type': [
    true,
    'singleline',
    'multiline',
    'doc',
  ],
  'completed-docs': false,
  'encoding': true,
  'file-header': false,
  'file-name-casing': [true, {'.tsx': 'pascal-case', '.*': 'camel-case'}],
  'import-spacing': true,
  'increment-decrement': true,
  // it's better to create a proper name for interface than use I-notation
  'interface-name': [
    true,
    'never-prefix',
  ],
  'interface-over-type-literal': true,
  'jsdoc-format': [
    true,
    'check-multiline-start',
  ],
  // default export is designed to be renamed
  'match-default-export-name': false,
  'newline-before-return': true,
  // may interfere with the developer experience
  'newline-per-chained-call': false,
  'new-parens': true,
  'no-angle-bracket-type-assertion': true,
  'no-boolean-literal-compare': true,
  'no-consecutive-blank-lines': true,
  'no-irregular-whitespace': true,
  // parameter properties are very useful
  'no-parameter-properties': false,
  'no-redundant-jsdoc': true,
  'no-reference-import': true,
  'no-tautology-expression': true,
  'no-trailing-whitespace': true,
  'no-unnecessary-initializer': true,
  'no-unnecessary-qualifier': true,
  'number-literal-format': true,
  'object-literal-key-quotes': [
    true,
    'consistent-as-needed',
  ],
  'object-literal-shorthand': true,
  'one-line': [
    true,
    'check-catch',
    'check-finally',
    'check-else',
    'check-open-brace',
    'check-whitespace',
  ],
  'one-variable-per-declaration': [
    true,
    'ignore-for-loop',
  ],
  'ordered-imports': true,
  'prefer-function-over-method': [
    true,
    'allow-public',
    'allow-protected',
  ],
  // it's better to do vice versa
  'prefer-method-signature': false,
  // produces more code than a simple "if"
  'prefer-switch': false,
  'prefer-template': true,
  'prefer-while': true,
  'quotemark': [
    true,
    'single',
    'jsx-double',
    'avoid-escape',
    'avoid-template',
  ],
  'return-undefined': true,
  'semicolon': [
    true,
    'always',
    'ignore-bound-class-methods',
  ],
  'space-before-function-paren': [
    true,
    {
      anonymous: 'never',
      asyncArrow: 'always',
      named: 'never',
    },
  ],
  'space-within-parens': [
    true,
    0,
  ],
  'static-this': true,
  'switch-final-break': [
    true,
    'always',
  ],
  // type-literal delimiter should be comma, not semicolon
  'type-literal-delimiter': false,
  'unnecessary-bind': true,
  'unnecessary-else': [true, {'allow-else-if': true}],
  // handled by tslint-consistent-codestyle
  'variable-name': false,
  'whitespace': [
    true,
    'check-branch',
    'check-decl',
    'check-operator',
    'check-separator',
    'check-rest-spread',
    'check-type',
    'check-typecast',
    'check-type-operator',
    'check-preblock',
  ],
};

module.exports = {
  rules: {
    ...typescriptSpecific,
    ...functionality,
    ...maintainability,
    ...style,
  }
};
