var importantIconClass = "fa-solid fa-exclamation";
var nonImportantIconClass = "fa-solid fa-circle-exclamation";
var isImportant=false;


function toggleImportant(){
    console.log("Icon clicked");

        if(!isImportant){
    $("#iImportant").removeClass(importantIconClass);
    $("#iImportant").addClass(nonImportantIconClass);
    isImportant = true;
}
else{
    $("#iImportant").removeClass(nonImportantIconClass);
    $("#iImportant").addClass(importantIconClass);
    isImportant = false;
  }
}

function init(){
    console.log("task manager page");

    $("#iImportant").click(toggleImportant);
}
$(document).ready(function(){
$("#formButton").click(function(){
$(".sec-form").toggle();
});
});




window.onload = init;
