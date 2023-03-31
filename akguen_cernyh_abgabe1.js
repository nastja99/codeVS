//Beginn Basics
var students = ['Anna', 'Matt', 'Giovanni', 'Julie', 'Vlad', 'Yoona'];
var newStudents = ['Leonard', 'Mai', 'Rana', 'Melis'];

document.getElementById("demo0").innerHTML = "Basic Aufgabe <br></br> Students:   " + students;


//1.1a
students.shift();
document.getElementById("demo1").innerHTML = "Egebnis Aufgabe a:	" + students;

//1.1b
students[3] = "Alex";
document.getElementById("demo2").innerHTML = "Ergebnis Aufgabe b:   " + students;

//1.1c
students.splice(1, 3);
document.getElementById("demo3").innerHTML = "Ergebnis Aufgabe c:   " + students;

//1.1d
document.getElementById("demo4").innerHTML = "Ergebnis Aufgabe d:   " + students.toString();

//1.1e
myStudents = students.concat(newStudents);
document.getElementById("demo5").innerHTML = "Ergebnis Aufgabe e:   " + myStudents;



//Beginn Advanced
var teams = [
 ['Ruby', 'Angel'],
 ['Mia', 'Yui', 'Merve', 'Agathe', ['Min']],
 ['Nattapong', 'Giulia', 'Alva']
];

document.getElementById("demo6").innerHTML ="Advanced Aufgaben " + "</br></br>" + "Meine Teams:   " + teams;

//1.2a
document.getElementById("demo7").innerHTML = "Ergebnis Aufgabe a:   " + teams[1][4];


//1.2b Es hat nichts von den folgenden Skripten geklappt.

let index = teams.indexOf("Giulia");
document.getElementById("demo8").innerHTML = "Ergebnis Aufgabe b: " + teams;


teams.findIndex(checkName);

function checkName(name) {
  return name = 'Giulia';
}
document.getElementById("demo8").innerHTML = "Ergebnis Aufgabe b: " + teams;


function findeIndex(tab1, tab2){
    if(tab1.indexOf('Giulia') != -1)
    {
    console.log(tab1,tab2);
}}
teams.filter(num =>num.find(findeIndex));
document.getElementById("demo8").innerHTML = "Ergebnis Aufgabe b: ";



//1.2c Wir könnten uns vorstellen, dass man den untergeordntenen Arrays Namen zuordnet und dann mit concat verbinden muss.. aber die Vorgehensweise ist etwas problematisch. Eventuell auch noch toString benutzen, aber eigentlich werden die schon alle zusammen angezeigt.

teams.reverse();
document.getElementById("demo9").innerHTML = "Ergebnis Aufgabe c: " + teams;







