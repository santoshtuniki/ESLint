module.exports = {
    // meta: {}
    create(context) {
        return {
            CallExpression(node) {
                if (node.callee.name === getPaymets) {

                }
            }
        }
    }
}