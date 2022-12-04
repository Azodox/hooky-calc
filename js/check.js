/**
 * When on check an option checkbox, it will change the color of it.
 * For example, if you check delivery checkbox, the label of it will become pink.
 * And if you uncheck it, it will comeback to white.
 */

const delivery = document.getElementById("delivery")
const company = document.getElementById("company")

function onCheck(element){
    if(element.id === "10-10"){
        company.disabled = element.checked
        delivery.disabled = element.checked
    }

    if(element.checked){
        document.getElementById("label-" + element.id).style.color = "#F3C4FB";
    }else{
        document.getElementById("label-" + element.id).style.color = "white";
    }
}
