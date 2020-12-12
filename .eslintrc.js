module.exports = {
   extends: ['airbnb-base', 'prettier'],
   env: {
      es2021: true,
      browser: true,
      node: true,
   },
   ignorePatterns: ['node_modules'],
   parserOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
      ecmaFeatures: {
         impliedStrict: true,
      },
   },
   rules: {
      'no-console': 0,
      'no-unused-vars': 1,
      'spaced-comment': 0,
      'no-plusplus': 0,
      'func-names': 0,
      quotes: [
         2,
         'single',
         {
            avoidEscape: true,
            allowTemplateLiterals: true,
         },
      ],
      'import/no-extraneous-dependencies': 0,
      'prettier/prettier': [
         'error',
         {
            trailingComma: 'all',
            singleQuote: true,
            printWidth: 100,
            endOfLine: 'auto',
         },
      ],
   },
   plugins: ['prettier'],
};
