module.exports = {
    env: {
        "browser": true,
        "es2021": true
    },
    parserOptions: {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    plugins: [
        "promise"
    ],
    rules: {
        "promise/catch-or-return": "error",
        "consistent-return": "error",
        "no-unused-vars": "off",
        "no-console": "off",
        "no-restricted-imports": ["error", "underscore"],
        "eqeqeq": "error",
        "indent": ["error", 4],
        "linebreak-style": ["error", "unix"],
        "quotes": ["error", "single"],
        "semi": ["error", "always"]
    }
}