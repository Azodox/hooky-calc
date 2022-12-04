/**
 * This file is the system that handle what happened when you
 * click on the reset button.
 * As it says, the reset button will reset each field, each modifiable value on the site.
 */

/**
 * First of all, we retrive every modifiable field and put them into a variable.
 */
const resetButton = document.getElementById('reset-button')
const drinksContainer = Array.from(document.getElementById('drinks').children)
const company = document.getElementById('company')
const companyLabel = document.getElementById('label-company')
const result = document.getElementById('total')
const sum = document.getElementById('sum')
const tip = document.getElementById('tip-amount')
const delivery = document.getElementById("delivery")
const deliveryLabel = document.getElementById("label-delivery")
const tenten = document.getElementById("10-10")
const tentenLabel = document.getElementById("label-10-10")

/**
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
        company.checked = false
        sum.innerText = ""
        tip.value = 0
        result.innerText = 0
        delivery.checked = false
        deliveryLabel.style.color = "white"
        companyLabel.style.color = "white"
        delivery.disabled = false
        company.disabled = false
        tenten.checked = false
        tentenLabel.style.color = "white"
        tenten.disabled = false
    })
})