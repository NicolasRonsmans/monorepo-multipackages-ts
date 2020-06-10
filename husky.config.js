module.exports = {
  hooks: {
    'pre-commit': 'yarn && lint-staged',
    'pre-push': 'yarn && yarn test',
  },
};
