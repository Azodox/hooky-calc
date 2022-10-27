/**
 * When on check an option checkbox, it will change the color of it.
 * For example, if you check delivery checkbox, the label of it will become pink.
 * And if you uncheck it, it will comeback to white.
 */

var delivery = document.getElementById("delivery")
var company = document.getElementById("company")
var publicService = document.getElementById("public-service")
var drinksContainer = Array.from(document.getElementById('drinks').children)

var hazelnutCoffee = document.getElementById("hazelnut-iced-coffee-count")
var mochis = document.getElementById("mochis-count")
var ramen = document.getElementById("ramen-count")

function onCheck(element){
    switch(element.id){
        case "company":
            publicService.checked = false
            break;
        
        case "public-service":
            if(publicService.checked){
                company.checked = false
                delivery.checked = false
                company.disabled = true
                delivery.disabled = true

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
            break;
        
        default: break;
    }
    
    if(element.checked){
        document.getElementById("label-" + element.id).style.color = "#F3C4FB";
    }else{
        document.getElementById("label-" + element.id).style.color = "white";
    }
}
