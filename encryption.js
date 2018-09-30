//encryption
function Encryption() {
	var text = document.getElementById("enc").value;
	document.getElementById("encout").innerHTML =
		"result: " + CaesarsCipher(text);
}
function CaesarsCipher(str) {
	var arr = [
		"A",
		"B",
		"C",
		"D",
		"E",
		"F",
		"G",
		"H",
		"I",
		"J",
		"K",
		"L",
		"M",
		"N",
		"O",
		"P",
		"Q",
		"R",
		"S",
		"T",
		"U",
		"V",
		"W",
		"X",
		"Y",
		"Z"
	];
	//strings to an array
	str = str.split("");
	//cipher
	for (var i = 0; i < str.length; i++) {
		//If text is not string, return itself
		if (typeof str[i] !== "string") {
			str[i] = str[i];
		} else if (str[i] === str[i].toLowerCase()) {
			str[i] = str[i].toUpperCase();
			for (var j = 0; j < arr.length; j++) {
				//search for alphabet matching str
				if (str[i] === arr[j]) {
					//If matched at less than 13th alphabet, + 13
					if (j <= 12) {
						str[i] = arr[j + 13];
						j = arr.length;
					}
					//otherwise  13
					else {
						str[i] = arr[j - 13];
						j = arr.length;
					}
				}
			}
			str[i] = str[i].toLowerCase();
		} else {
			for (var j = 0; j < arr.length; j++) {
				//search for alphabet matching str
				if (str[i] === arr[j]) {
					//If matched at less than 13th alphabet, + 13
					if (j <= 12) {
						str[i] = arr[j + 13];
						j = arr.length;
					}
					//otherwise  13
					else {
						str[i] = arr[j - 13];
						j = arr.length;
					}
				}
			}
		}
	}
	str = str.join("");
	return str;
}
