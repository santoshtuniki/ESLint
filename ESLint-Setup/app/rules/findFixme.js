module.exports = {
	create(context) {
		function findComments(comment) {
			const value = comment.value.toLowerCase().trim();

			if (context.options.indexOf(value) >= 0) {
				context.report(comment, `${comment.value.trim()} is not allowed in comments`);
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