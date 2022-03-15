/**
 * write a function that takes a string as an input containing only the characters
 * { [ ( ) ] } and returns a booleen. Returns true if for every open character
 * in the string there is a corresponding closing character in the same order 
 * and of the same type. example 1. { } example 2. ({[]})
 */
var inputString = "{[}}";
var length = inputString.length;
var halfLength = length/2;
var closeCharStart = Math.min((inputString.indexOf(")") > 0) ? inputString.indexOf(")") : length,
						(inputString.indexOf("}") > 0) ? inputString.indexOf("}") : length,
						(inputString.indexOf("]") > 0) ? inputString.indexOf("]") : length);
					
console.log("HalfLength ===" + halfLength);
console.log("closeCharStart ===" + closeCharStart);

if (halfLength > 0 && (halfLength % 2) == 0) {
	for (var i = halfLength, j = halfLength - 1; i <= length, j >= 0; i++, j--) {
		console.log(inputString.charAt(i) + "=====" + inputString.charAt(j));
		switch (inputString.charAt(i)) {
			case (")"): {
				if (inputString.charAt(j) === "(") console.log("Inside case )");
				continue;
			}
			case ("}"): {
				if (inputString.charAt(j) === "{") console.log("Inside case }");
				continue;
			}
			case ("]"): {
				if (inputString.charAt(j) === "[") console.log("Inside case ]");
				continue;
			}
			default: {
				console.log("Characters did not match");
				return false;
			}
		}
	}
}
else {
	console.log("Not a valid Input");
}

