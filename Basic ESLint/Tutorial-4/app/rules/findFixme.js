module.exports = {
	create(context) {
		function findComments(comment) {
			const value = comment.value.toLowerCase().trim();
			
			if (value.indexOf('fixme') !== -1) {
				// each 'comment' is a node
				context.report(comment, 'FIXME is not allowed in comments');
			}
			if (value.indexOf('todo') !== -1) {
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