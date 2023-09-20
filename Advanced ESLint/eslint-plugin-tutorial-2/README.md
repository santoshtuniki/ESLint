# eslint-plugin-tutorial-2

shareable plugin added with config

## Installation

You'll first need to install [ESLint](https://eslint.org/):

```sh
npm i eslint --save-dev
```

Next, install `eslint-plugin-tutorial-2`:

```sh
npm install eslint-plugin-tutorial-2 --save-dev
```

## Usage

Add `tutorial-2` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "tutorial-2"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "tutorial-2/rule-name": 2
    }
}
```

## Rules

<!-- begin auto-generated rules list -->
TODO: Run eslint-doc-generator to generate the rules list.
<!-- end auto-generated rules list -->


