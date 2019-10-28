module.exports = {
	extends: ['airbnb'],
	plugins: ['jest'],
	rules: {
		// allows to use long functions inside tests:
		'max-lines-per-function': 'off',
	},
};
