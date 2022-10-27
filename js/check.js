/**
 * When on check an option checkbox, it will change the color of it.
 * For example, if you check delivery checkbox, the label of it will become pink.
 * And if you uncheck it, it will comeback to white.
 */

function onCheck(element){
    if(element.checked){
        document.getElementById("label-" + element.id).style.color = "#F3C4FB";
    }else{
        document.getElementById("label-" + element.id).style.color = "white";
    }
}
