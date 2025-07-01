export const preset = 'ts-jest';
export const testEnvironment = 'node';
export const testMatch = ['**/tests/**/*.test.ts'];
export const moduleFileExtensions = ['ts', 'js', 'json'];
export const moduleNameMapper = {
  '^@/(.*)$': '<rootDir>/src/$1',
  '^@utils/(.*)$': '<rootDir>/src/shared/utils/$1',
  '^@config/(.*)$': '<rootDir>/src/shared/config/$1',
}