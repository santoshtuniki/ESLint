module.exports = {
    env: {
        "browser": true,
        "es2021": true
    },
    parserOptions: {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    rules: {
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

/* 
    Run 'npm link'
        --  A command in the Node Package Manager (npm) that allows you to create a symbolic link 
            between a globally installed npm package and a local development project. 
    
    Run 'npm unlink <package-name>'
        --  A command in the Node Package Manager (npm) that allows you to remove the symbolic link
*/