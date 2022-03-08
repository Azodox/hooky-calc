var company = document.getElementById("company")
var partnership = document.getElementById("partnership")

function onCheck(element){
    if(element.id == "partnership"){
        company.checked = false
    }else if(element.id == "company"){
        partnership.checked = false;
    }
}