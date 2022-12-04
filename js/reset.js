/**
 * This file is the system that handle what happened when you
 * click on the reset button.
 * As it says, the reset button will reset each field, each modifiable value on the site.
 */

/**
 * First of all, we retrieve every modifiable field and put them into a variable.
 */
var resetButton = document.getElementById('reset-button')
var drinksContainer = Array.from(document.getElementById('drinks').children)
var company = document.getElementById('company')
var companyLabel = document.getElementById('label-company')
var result = document.getElementById('total')
var sum = document.getElementById('sum')
var tip = document.getElementById('tip-amount')
var delivery = document.getElementById("delivery")
var deliveryLabel = document.getElementById("label-delivery")
var tenten = document.getElementById("10-10")

/*
 * Then we add a click event listener.
 * And if the user clicks on the button each field (variables above)
 * will be reset by default.
 */
resetButton.addEventListener('click', function(e){
    drinksContainer.forEach(function(drinks) {
        if(drinks.children){
            Array.from(drinks.children).forEach(function(drink) {
                if(drink.children){
                    Array.from(drink.children).forEach(function(d){
                        if(d.tagName == 'INPUT'){
                            d.value = 0
                            d.disabled = false
                        }
                    })
                }
            })
        }
        tenten.value = 0
        tenten.disabled = false
        company.checked = false
        sum.innerText = ""
        tip.value = 0
        result.innerText = 0
        delivery.checked = false
        deliveryLabel.style.color = "white"
        companyLabel.style.color = "white"
        delivery.disabled = false
        company.disabled = false
        tenten.disabled = false
    })
})