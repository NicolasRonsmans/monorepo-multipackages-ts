module.exports = {
  'packages/header/{*.{js,json,md},src/**/*.{ts,tsx}}': ['prettier --write', 'yarn workspace @mmts/header lint'],
  'packages/utils/{*.{js,json,md},src/**/*.{ts,tsx}}': ['prettier --write', 'yarn workspace @mmts/utils lint'],
};
