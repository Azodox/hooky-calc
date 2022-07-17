/**
 * When on check an option checkbox, it will change the color of it.
 * For example, if you check delivery checkbox, the label of it will become pink.
 * And if you uncheck it, it will comeback to white.
 */

var delivery = document.getElementById("delivery")
var company = document.getElementById("company")
var partnership = document.getElementById("partnership")
var publicService = document.getElementById("public-service")
var tenten = document.getElementById("10-10")
var drinksContainer = Array.from(document.getElementById('drinks').children)
var menuContainer = Array.from(document.getElementById('menu-container').children)

function onCheck(element){
    switch(element.id){
        case "partnership":
            if(partnership.checked){
                company.disabled = true
                delivery.disabled = true
                publicService.disabled = true
                tenten.disabled = true
            }else{
                company.disabled = false
                delivery.disabled = false
                publicService.disabled = false
                tenten.disabled = false
            }
            break;

        case "company":
            partnership.checked = false
            publicService.checked = false
            break;
        
        case "public-service":
            if(publicService.checked){
                company.disabled = true
                delivery.disabled = true
                partnership.disabled = true
                tenten.disabled = true

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
                tenten.disabled = false

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
        
        case "10-10":
            menuContainer.forEach(function(menus) {
                Array.from(menus.children).forEach(function(menu) {
                    if(menu.tagName == 'INPUT'){
                        menu.disabled = element.checked
                    }
                    company.disabled = element.checked
                    delivery.disabled = element.checked
                    publicService.disabled = element.checked
                    partnership.disabled = element.checked
                })
            })
            break;
        
        default: break;
    }
    
    if(element.checked){
        document.getElementById("label-" + element.id).style.color = "#F3C4FB";
    }else{
        document.getElementById("label-" + element.id).style.color = "white";
    }
}
