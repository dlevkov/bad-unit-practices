module.exports = {
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
  globalSetup: 'jest-preset-angular/global-setup',
  // transform: {
  //     '^.+\\.(ts|js|html)$': 'jest-preset-angular',
  // },
  // transformIgnorePatterns: ['node_modules/(?!@angular|@ngrx|.*.mjs$)'],
  // moduleFileExtensions: ['ts', 'html', 'js', 'json'],
  // moduleDirectories: ['node_modules', 'src'],
  // modulePaths: ['<rootDir>'],
  moduleNameMapper: {
      '^@app/(.*)$': ['<rootDir>/src/app/$1'],
  },
};
