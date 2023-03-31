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
students.join();
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

document.getElementById("demo6").innerHTML ="Advanced Aufgaben " + "</br></br>" + "Mein Team:   " + teams;

//1.2a
document.getElementById("demo7").innerHTML = "Ergebnis Aufgabe a:   " + teams[1][4][0];

//1.2b 
teams[2].findIndex((elem) => elem === 'Giulia');	
teams[2].indexOf('Giulia');

document.getElementById("demo8").innerHTML = `Ergebnis Aufgabe b: ${teams[2][1]}`;

//1.2c 
teams.map((list) => list.reverse()).flat(2);
document.getElementById("demo9").innerHTML = "Ergebnis Aufgabe c: " + teams;







