//Beginn Kontrollstrukturen

//3.1 a)
var word1 = 'informationsmanagement';
var word2 = 'multimediasysteme';
var text;

if ( word1.length > word2.length ) {
	text = 'Das erste Wort ist länger.';
}
console.log(text);


if ( word1.length > word2.length ) {
	text = 'Das erste Wort ist länger.';
} else {
	text = 'Das zweite Wort ist länger.';
}
console.log(text);


if ( word1.length > word2.length ) {
	text = 'Das erste Wort ist länger.';
} else if ( word1.length = word2.length ) {
	text = 'Die Wörter sind gleich lang.';
} else {
	text = 'Das zweite Wort ist länger.';
}
console.log(text);


//3.1 b)
var i = 0;
var list = [];

while (i <= 5) {
	list+= "Der Wert lautet " + (i * 10) +". ";
	i++;
}
console.log(list);


//3.1 c)
var i = 0;
var numList = [3, 4, 9];

 for (; i <= 10; i++) {
	 if(numList.includes(i)){
        console.log(i);
    }
}



//Funktionen (und Kontrollstrukturen)

//3.2 a)
function numberIsOdd(num) {
	return (num % 2) != 0;
}
console.log(numberIsOdd(5));

//ein zweiter Versuch mit einer geraden Zahl
function numberIsOdd(num) {
	return (num % 2) != 0;
}
console.log(numberIsOdd(4));


//3.2 b)
function cantineActionDay(day) {
	day= day.toString().toLowerCase();
	var text = ""
		switch(day) {
			case "monday":
				text="taco monday"
				break;
			case "wednesday":
				text="pizza wednesday"
				break;
			case "friday":
				text="pasta friday"
				break;
			default:
				text="no action"
		}
		
		return text;
}

console.log(cantineActionDay("FRIDAY")) 










