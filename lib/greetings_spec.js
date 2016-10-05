let chai = require('chai');
let assert = require('chai').assert;

let greetings = require('./greetings');

describe("Greetings Library", () => {
	it("Should handle 'andrew'", () => {
		assert.equal(
			greetings.returnGreeting({ "name" : "andrew", "pre" : "", "post" : "" }),
			"Oh, hey andrew"			
		);
	});
	it("Should handle 'vscode'", () => {
		assert.equal(
			greetings.returnGreeting({ "name" : "vscode", "pre" : "", "post" : "" }),
			greetings.staticGreetings.SAILOR
		);
	});
});