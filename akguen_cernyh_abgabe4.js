//Beginn Basics
// 4.1 a)
document.write("<h1> Abgabe 4: DOM und Event-Listener von Celine Akgün und Anastasia Cernyh</h1>");
	

// 4.1 b)	
document.getElementById("subHeadline");

document.getElementById("subHeadline").style.fontSize = "18px";


// 4.1 c)
document.getElementById("block").firstChild.src == "file://" + pfad + "block.jpg";


// 4.1 d)
document.getElementsByTagName("p")[1].innerHTML="Ändere den Text in das Geschriebene.";


// 4.1 e)
var Anzahl = document.getElementsByClassName("list")[0].childElementCount;

console.log(Anzahl); 



// 4.2 a)
var search = document.getElementById('search');
var container = document.getElementById('loadingContainer');

search.addEventListener("keyup" , function () {

  
  if (search.value.length > 5) {

    container.classList.add("loading");
  }


});


//Beginn Advanced
// 4.2 b)
var email = document.getElementById('email');
var pw = document.getElementById('password');
var cb = document.getElementById('checkbox');
var btn = document.getElementById('btn');
var alertEmptyFields = document.getElementById('alertEmptyFields');


btn.addEventListener("click" , function () {

  
  if (email.value != "" && pw.value != "" && cb.checked == true ) {
    alertEmptyFields.style.display = "none";
    email.value = "";
    pw.value = "";
    cb.checked = false;
    
  } else {
    alertEmptyFields.style.display = "block";
  }

});