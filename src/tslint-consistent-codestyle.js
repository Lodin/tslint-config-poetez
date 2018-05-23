const path = require('path');

const rules = {
  // declaring it with JSDoc is too verbose
  'const-parameters': false,
  // may interfere with the developer experience
  'early-exit': false,
  // handled by "curly" rule of tslint core
  'ext-curly': false,
  'naming-convention': [
    true,
    {type: 'default', format: 'camelCase', leadingUnderscore: 'forbid', trailingUnderscore: 'forbid'},
    {type: 'variable', modifiers: ['global', 'const'], format: ['camelCase', 'UPPER_CASE']},
    {type: 'variable', modifiers: ['local'], leadingUnderscore: 'allow'},
    // allows using PascalCase for decorators
    {type: 'functionVariable', modifiers: ['const'], format: ['camelCase', 'PascalCase']},
    {type: 'parameter', modifiers: 'unused', leadingUnderscore: 'require'},
    {type: 'member', modifiers: 'private', leadingUnderscore: 'allow'},
    {type: 'member', modifiers: 'protected', leadingUnderscore: 'allow'},
    {type: 'type', format: 'PascalCase'},
    {type: 'genericTypeParameter', regex: '^(?:[A-Z]|T[a-zA-Z]+)$'},
    {type: 'enumMember', format: 'PascalCase'}
  ],
  // handled by "no-angle-bracket-type-assertion" rule of tslint core
  'no-as-type-assertion': false,
  'no-accessor-recursion': true,
  'no-collapsible-if': true,
  // replaced with "no-unnecessary-else" rule
  'no-else-after-return': false,
  // conflicts with "return-undefined" rule of tslint core
  'no-return-undefined': false,
  // "this" refers to a class constructor, so it is actual to call other static functions
  'no-static-this': false,
  'no-unnecessary-else': true,
  // can conflict with "typedef" rule of tslint core
  'no-unnecessary-type-annotation': false,
  // handle by "no-unused-variable" of tslint core
  'no-unused': false,
  'no-var-before-return': [
    true,
    'allow-destructuring',
  ],
  // alphabetic style is preferred
  'object-shorthand-properties-first': false,
  // constructor arguments order should be decided by developer
  'parameter-properties': false,
  'prefer-const-enum': true,
  'prefer-while': true,
};

module.exports = {
  rulesDirectory: path.resolve(process.cwd(), './node_modules/tslint-consistent-codestyle/rules'),
  rules,
};