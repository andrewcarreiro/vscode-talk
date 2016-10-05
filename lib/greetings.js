/** data structure to standardize static greetings */
var STATIC_GREETINGS = {
	SAILOR : "Well hello there sailor!",
	EMPTY : "Hello stranger!"
}

/**
 * Returns a greeting dependent on the user
 * 
 * @param {{"name" : string, "pre" : string, "post" : string}} greeting_format_obj
 */
function returnGreeting ( greeting_format_obj ){
	let name = greeting_format_obj.name;
	let middle = "";
	switch ( name ){
		case "andrew":
			middle = `Oh, hey ${name}`;
			break;
		case "vscode": 
			middle = STATIC_GREETINGS.SAILOR;
			break;
		case "":
			middle = STATIC_GREETINGS.EMPTY;
			break;
		default:
			middle = `Hello, ${name}!`
	}
	
	return `${greeting_format_obj.pre}${middle}${greeting_format_obj.post}`;
}

//unrelated name
var name;


module.exports = {
	returnGreeting : returnGreeting,
	staticGreetings : STATIC_GREETINGS
}