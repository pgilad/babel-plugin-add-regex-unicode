const assertTransform = require("assert-transform");
const path = require("path");
const assert = require("assert");

const getBabelOps = (pluginOps) => {
    return {
        "plugins": [
            [path.resolve(__dirname, "../src/index.js"), pluginOps]
        ]
    };
};

describe("babel-plugin-add-regex-unicode", () => {
    describe("transformation tests", () => {
        describe("Member Expressions", () => {
            it("should transform with basic transformations", () => {
                const babelOpts = getBabelOps();

                return assertTransform(
                    path.join(__dirname, "./transformations/actual.js"),
                    path.join(__dirname, "./transformations/expected.js"), babelOpts);
            });
        });
    });
});
