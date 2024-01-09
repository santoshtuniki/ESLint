# ESLint React

In .eslintrc.json 'additionally' add the below:
{
    "env": {
        "jest": true
    },
    "settings": {
        "react": {
            "version": "detect"
        }
    },
    "rules": {
        "react/react-in-jsx-scope": "off",
    }
}
