module.exports = {
	extends: ['airbnb'],
	env: {
		node: true,
	},
	rules: {
		"no-tabs": ["error", { "allowIndentationTabs": true }],
		"indent": ["error", "tab", { "SwitchCase": 1 }]
	}
};
