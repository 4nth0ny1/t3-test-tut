# Jest Setup with T3 for testing tRPC routes

https://www.youtube.com/watch?v=YRGo1H-qNQs

## Vitest setup with React Testing Lib

https://eternaldev.com/blog/testing-a-react-application-with-vitest

### npm install

npm i -D jest @types/jest ts-jest jest-mock-extended dotenv ts-node

### create jest.config.ts

```
export default {
  clearMocks: true,
  coverageProvider: "v8",
  preset: "ts-jest/presets/js-with-ts",
  setupFiles: ["dotenv/config"],
  transform: {
    "^.+\\.mjs$": "ts-jest",
  },
  moduleNameMapper: {
    "~/(.*)": ["<rootDir>/src/$1"]
  }
};
```
