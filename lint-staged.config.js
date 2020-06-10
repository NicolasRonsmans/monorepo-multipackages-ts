module.exports = {
  'packages/header/**/*.{md,css,js,json}': ['prettier --write'],
  'packages/header/**/*.{ts,tsx}': ['prettier --write', 'yarn workspace @mmts/header lint'],
  'packages/utils/**/*.{md,css,js,json}': ['prettier --write'],
  'packages/utils/**/*.ts': ['prettier --write', 'yarn workspace @mmts/utils lint'],
};
