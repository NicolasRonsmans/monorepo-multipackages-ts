module.exports = {
  moduleDirectories: ['node_modules', 'src'],
  preset: 'ts-jest',
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
};
