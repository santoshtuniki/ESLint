// https://astexplorer.net/ --> To understand CallExpression

module.exports = {
	meta: {
		fixable: 'code'
	},
	create(context) {
		return {
			CallExpression(node) {
				if (node.callee.name === 'getPayments') {
					context.report({
						node,
						message: 'getPayments is deprecated. use getLatestPayments instead',
						fix(fixer) {
							return fixer.replaceText(node.callee, 'getLatestPayments')
						}
					});
				}
			}
		};
	}
};