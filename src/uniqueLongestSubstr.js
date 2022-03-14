//Start of the file
//Input String
var s = "wegolook";
var len = s.length;
var result = lengthOfLongestSubstr(s);
console.log("Length of longest substring == " + result);

//Returns length of longest substring without repeating characters
function lengthOfLongestSubstr(str) {
	if (str.length != 0) {
		for (var i = 0, j = 1, count = 1; i < len && j < len; i++, j++) {
			if (i == 0 && j == 1 && str[i] === str[j])
				return count;
			else if (i != 0 && j != 1 && str[i] === str[j])
				return count - 1;
			else
				count = count + 1;
		}
		return count;
	}
	else
		return 0;
}
//End of the file