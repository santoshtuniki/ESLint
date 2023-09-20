# eslint-plugin-tutorial

shareable custom rules plugin

## Installation

You'll first need to install [ESLint](https://eslint.org/):

```sh
npm i eslint --save-dev
```

Next, install `eslint-plugin-tutorial`:

```sh
npm install eslint-plugin-tutorial --save-dev
```

## Usage

Add `tutorial` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "tutorial"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "tutorial/rule-name": 2
    }
}
```

## Rules

<!-- begin auto-generated rules list -->
TODO: Run eslint-doc-generator to generate the rules list.
<!-- end auto-generated rules list -->


