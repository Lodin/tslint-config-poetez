const configuration = [
  require('./tslint'),
  require('./tslint-consistent-codestyle'),
  require('./tslint-eslint-rules'),
  require('./tslint-immutable'),
  require('./tslint-microsoft-contrib'),
  require('./tslint-misc-rules'),
  require('./tslint-react'),
];

module.exports = {
  rulesDirectory: configuration.filter(c => !!c.rulesDirectory).map(c => c.rulesDirectory),
  rules: Object.assign.apply(null, configuration.map(c => c.rules).reverse()),
};