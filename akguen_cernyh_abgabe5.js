//Übung 5: jQuery


//Beginn Basics

//5.1a)
$(document).ready(function(){
	$("#container01").click(function(){
	alert($("div").outerWidth());
});
});


//5.1b)
$(document).ready(function(){
	$("#remember").click();
});


//5.1c)
$(document).ready(function(){
    $("#titel").on({
        mouseenter: function(){
            $(this).css("color", "#800080");
        }
    });    
});
	

//5.1d)
$(document).ready(function(){
	$("#image").show();
});


//5.1e)
$(document).ready(function(){
$("#container02").remove();
});