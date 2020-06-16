module.exports = {
  'apps/cra/{*.{js,json,md},src/**/*.{ts,tsx}}': ['prettier --write', 'yarn workspace @mmts/cra lint'],
  'apps/storybook/{*.{js,json,md},src/**/*.{ts,tsx}}': ['prettier --write', 'yarn workspace @mmts/storybook lint'],
  'packages/header/{*.{js,json,md},src/**/*.{ts,tsx}}': ['prettier --write', 'yarn workspace @mmts/header lint'],
  'packages/utils/{*.{js,json,md},src/**/*.{ts,tsx}}': ['prettier --write', 'yarn workspace @mmts/utils lint'],
};
