module.exports={
    preset: "ts-jest",
    transform: {
        "^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/node_modules/babel-jest",
        '.+\\.(css|styl|less|sass|scss)$': 'jest-css-modules-transform'
    },
    testEnvironment: 'jsdom'
}