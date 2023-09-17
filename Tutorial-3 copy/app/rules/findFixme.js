module.exports = {
	create(context) {
		function findComments(comment) {
			if (comment.value.toLowerCase().indexOf('fixme') !== -1) {
				// each 'comment' is a node
				context.report(comment, 'FIXME is not allowed in comments');
			}
			if (comment.value.toLowerCase().indexOf('todo') !== -1) {
				// each 'comment' is a node
				context.report(comment, 'TODO is not allowed in comments');
			}
		}

		return {
			Program(node) {
				let sourceCode = context.sourceCode;

				// Returns an array of all comments in the source 
				let comments = sourceCode.getAllComments();

				for (let comment of comments) {
					findComments(comment)
				}
			}
		}
	}
}