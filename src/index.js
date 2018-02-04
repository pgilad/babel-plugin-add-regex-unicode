const regex = require('@babel/helper-regex');

module.exports = function(api, options = {}) {
    return {
        visitor: {
            RegExpLiteral(path) {
                const node = path.node;
                if (regex.is(node, "u")) {
                    // don't transform regex that already include /u
                    return;
                }
                node.flags += "u"
            },
        },
    };
}
