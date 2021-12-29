const COMMON_ESLINT_CONFIG = {
  'env': {
    'browser': true,
    'es2021': true,
    'node': true
  },
  'plugins': ['simple-import-sort'],
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true
    },
    // Notice：'latest' will be noeffect
    'ecmaVersion': '12',
    'sourceType': 'module'
  },
  /**
   * Eslint Rules：https://eslint.org/docs/rules/
   * 'off' or 0 - turn the rule off
   * 'warn' or 1 - turn the rule on as a warning (doesn't affect exit code)
   * 'error' or 2 - turn the rule on as an error (exit code will be 1)
   */
  'rules': {
    'array-bracket-newline': 2,
    'no-trailing-spaces': 2,
    'no-dupe-args': 2,
    'array-bracket-spacing': 2,
    'no-dupe-class-members': 2,
    'no-undef': 2,
    'array-element-newline': 2,
    'arrow-parens': 2,
    'no-undefined': 2,
    'arrow-spacing': 2,
    'block-scoped-var': 2,
    'no-unmodified-loop-condition': 2,
    'no-unneeded-ternary': 2,
    'no-empty': 2,
    'block-spacing': 2,
    'brace-style': 2,
    'camelcase': 2,
    'no-unsafe-finally': 2,
    'capitalized-comments': 2,
    'no-unsafe-negation': 2,
    'no-unsafe-optional-chaining': 2,
    'class-methods-use-this': 2,
    'comma-dangle': 2,
    'no-ex-assign': 2,
    'no-unused-expressions': 2,
    'no-unused-labels': 2,
    'no-extra-bind': 2,
    'comma-spacing': 2,
    'comma-style': 2,
    'no-extra-boolean-cast': 2,
    'no-unused-vars': 2,
    'no-unused-private-class-members': 0,
    'no-extra-parens': 2,
    'computed-property-spacing': 2,
    'no-useless-catch': 2,
    'no-useless-computed-key': 2,
    'no-useless-concat': 2,
    'curly': 2,
    'default-case': 1,
    'default-case-last': 2,
    'default-param-last': 1,
    'dot-location': 2,
    'dot-notation': 2,
    'func-call-spacing': 2,
    'func-names': 2,
    'func-style': [
      'off',
      'declaration',
      { 'allowArrowFunctions': true }
    ],
    'function-paren-newline': 2,
    'implicit-arrow-linebreak': 2,
    'indent': [
      'error',
      2
    ],
    'init-declarations': 2,
    'jsx-quotes': 2,
    'key-spacing': 2,
    'keyword-spacing': 2,
    'line-comment-position': 2,
    'linebreak-style': [
      'error',
      'unix'
    ],
    'lines-around-comment': 2,
    'lines-between-class-members': 2,
    'max-depth': 2,
    'max-len': [
      'error',
      { 'code': 200 }
    ],
    'max-lines': 2,
    'max-lines-per-function': [
      'error',
      { 'max': 120,
        'skipBlankLines': true,
        'skipComments': true }
    ],
    'max-nested-callbacks': 2,
    'max-params': 2,
    'max-statements': 2,
    'multiline-comment-style': 2,
    'max-statements-per-line': 2,
    'multiline-ternary': 2,
    'new-cap': 2,
    'new-parens': 2,
    'newline-per-chained-call': 2,
    'no-await-in-loop': 2,
    'no-async-promise-executor': 2,
    'no-const-assign': 2,
    'no-func-assign': 2,
    'no-useless-constructor': 2,
    'no-var': 2,
    'no-whitespace-before-property': 2,
    'object-curly-newline': 2,
    'object-curly-spacing': [
      'error',
      'always'
    ],
    'object-property-newline': ['error', { 'allowAllPropertiesOnSameLine': true }],
    'one-var-declaration-per-line': 2,
    'operator-linebreak': 2,
    'prefer-const': 2,
    'prefer-destructuring': 2,
    'prefer-promise-reject-errors': 2,
    'prefer-template': 2,
    'quotes': [
      'error',
      'single'
    ],
    'require-jsdoc': 1,
    'sort-vars': 0,
    'sort-keys': 0,
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'semi-style': 2,
    'semi': [
      'error',
      'always'
    ],
    'space-before-blocks': 2,
    'space-before-function-paren': 2,
    'space-in-parens': 2,
    'space-infix-ops': 2,
    'space-unary-ops': 2,
    'spaced-comment': 2,
    'strict': 2,
    'symbol-description': 2,
    'template-tag-spacing': 2,
    'template-curly-spacing': 2,
    'valid-jsdoc': 1
  }
}


module.exports = {
  configs: {
    'next-recommended': {
      env: COMMON_ESLINT_CONFIG.env,
      extends: [
        'eslint:recommended',
        'next',
        'next/core-web-vitals'
      ],
      parserOptions: COMMON_ESLINT_CONFIG.parserOptions,
      plugins: COMMON_ESLINT_CONFIG.plugins,
      rules: COMMON_ESLINT_CONFIG.rules,
    },
    'vue-recommended': {
      env: COMMON_ESLINT_CONFIG.env,
      extends: ['eslint:recommended', 'plugin:vue/recommended', /* 'plugin:vue/vue3-recommended' */],
      parserOptions: COMMON_ESLINT_CONFIG.parserOptions,
      plugins: COMMON_ESLINT_CONFIG.plugins,
      rules: COMMON_ESLINT_CONFIG.rules,
    },
    'recommended': {
      env: COMMON_ESLINT_CONFIG.env,
      extends: ['eslint:recommended'],
      parserOptions: COMMON_ESLINT_CONFIG.parserOptions,
      plugins: [],
      rules: COMMON_ESLINT_CONFIG.rules,
    }
  },
};
