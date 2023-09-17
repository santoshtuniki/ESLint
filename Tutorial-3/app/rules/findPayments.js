// https://astexplorer.net/ --> To understand CallExpression

module.exports = {
	// meta: {}
	create(context) {
		return {
			CallExpression(node) {
				if (node.callee.name === 'getPayments') {
					context.report({
						node,
						message: 'getPayments is deprecated. use getLatestPayments instead',
					});
				}
			}
		};
	}
};