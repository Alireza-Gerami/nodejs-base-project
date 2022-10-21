module.exports = {
    env: {
        commonjs: true,
        es6: true,
        node: true,
    },
    extends: ['airbnb-base'],
    parserOptions: {
        ecmaVersion: 'latest',
    },
    rules: {
        indent: ['error', 4],
        'no-restricted-syntax': 0,
        'consistent-return': 0,
        'no-return-await': 0,
        'no-await-in-loop': 0,
        'no-underscore-dangle': 0,
        'no-throw-literal': 0,
        'require-await': 1,
        'arrow-parens': 1,
        'no-var': 1,
    },
};
