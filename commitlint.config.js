module.exports = {
    extends: ['@commitlint/config-conventional'],
    rules: {
        // The messages should be informative
        'subject-min-length': [2, 'always', 10],
    }
}
