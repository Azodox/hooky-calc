/**
 * When on check an option checkbox, it will change the color of it.
 * For example, if you check delivery checkbox, the label of it will become pink.
 * And if you uncheck it, it will comeback to white.
 */

var delivery = document.getElementById("delivery")
var company = document.getElementById("company")
var partnership = document.getElementById("partnership")
var publicService = document.getElementById("public-service")
var drinksContainer = Array.from(document.getElementById('drinks').children)

function onCheck(element){
    if(element.id == "partnership"){
        if(partnership.checked){
            company.disabled = true
            delivery.disabled = true
            publicService.disabled = true
        }else{
            company.disabled = false
            delivery.disabled = false
            publicService.disabled = false
        }
    }else if(element.id == "company"){
        partnership.checked = false
        publicService.checked = false
    }else if(element.id == "public-service"){
        if(publicService.checked){
            company.disabled = true
            delivery.disabled = true
            partnership.disabled = true
            drinksContainer.forEach(function(drinks) {
                if(drinks.children){
                    Array.from(drinks.children).forEach(function(drink) {
                        if(drink.children){
                            Array.from(drink.children).forEach(function(d){
                                if(d.tagName == 'INPUT'){
                                    if(d.parentElement.id != "coffee-container" && d.parentElement.id != "croissant-container" && d.parentElement.id != "iced-coffee-container" && d.parentElement.id != "chocolatine-container"){
                                        d.disabled = true
                                    }    
                                }
                            })
                        }
                    })
                }
            })
        }else {
            company.disabled = false
            delivery.disabled = false
            partnership.disabled = false
            drinksContainer.forEach(function(drinks) {
                if(drinks.children){
                    Array.from(drinks.children).forEach(function(drink) {
                        if(drink.children){
                            Array.from(drink.children).forEach(function(d){
                                if(d.tagName == 'INPUT'){
                                    d.disabled = false    
                                }
                            })
                        }
                    })
                }
            })
        }
    }
    
    if(element.checked){
        document.getElementById("label-" + element.id).style.color = "#F3C4FB";
    }else{
        document.getElementById("label-" + element.id).style.color = "white";
    }
}
