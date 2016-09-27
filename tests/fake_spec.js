let assert = require('chai').assert;

describe("A fake module", () => {
	it("should understand that true is true", () => {
		assert.isTrue(true);
	});
	
	it("should do basic math", () => {
		assert.equal(1+1,3);
	});
})