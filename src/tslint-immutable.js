const path = require('path');

const immutability = {
  'readonly-keyword': [true, 'ignore-local'],
  'readonly-array': [true, 'ignore-local'],
  // Since there can be not only functional programming, it is not necessary
  'no-let': false,
  // also forbids changing "this", which is inappropriate
  'no-object-mutation': false,
  'no-method-signature': true,
  'no-delete': true,
};

// Functional style restrictions are not used by this config
const functionalStyle = {
  'no-this': false,
  'no-class': false,
  'no-mixed-interface': false,
  'no-expression-statement': false,
  'no-if-statement': false,
  'no-loop-statement': false,
};

module.exports = {
  rulesDirectory: path.resolve(process.cwd(), './node_modules/tslint-immutable/rules'),
  rules: {
    ...immutability,
    ...functionalStyle,
  }
};
