var calculate = document.getElementById('calculate-button')
var drinksContainer = Array.from(document.getElementById('drinks').children)
var partnership = document.getElementById('partnership')
var company = document.getElementById('company')
var result = document.getElementById('total')
var sum = document.getElementById('sum')

var data = '{"drinks":[{"iced_coffee":{"normal":50,"delivery":60},"vanilla_iced_coffee":{"normal":65,"delivery":75},"caramel_iced_coffee":{"normal":65,"delivery":75},"coffee":{"normal":40,"delivery":50},"decaffeinated_coffee":{"normal":40,"delivery":50},"cappuccino_coffee":{"normal":50,"delivery":60},"latte_coffee":{"normal":45,"delivery":55},"americano":{"normal":45,"delivery":55},"moka":{"normal":50,"delivery":60},"hot_chocolate":{"normal":55,"delivery":65},"chocolatine":{"normal":45,"delivery":55},"croissant":{"normal":35,"delivery":45},"muffins":{"normal":40,"delivery":50}}]}'
var prices = JSON.parse(data)

var simplifiedData = '{"coffee":"c","decaffeinated_coffee":"cd","cappuccino_coffee":"ca","latte_coffee":"cl","americano":"a","moka":"m","hot_chocolate":"cc","iced_coffee":"cg","vanilla_iced_coffee":"cgv","caramel_iced_coffee":"cgc","chocolatine":"ch","croissant":"cr","muffins":"mf"}'
var simplified = JSON.parse(simplifiedData)

calculate.addEventListener('click', function(e) {
    var delivery = document.getElementById("delivery").checked
    var total = 0;
    var summary = "";
    drinksContainer.forEach(function(drinks) {
        if(drinks.children){
            Array.from(drinks.children).forEach(function(drink) {
                if(drink.children){
                    Array.from(drink.children).forEach(function(d){
                        if(d.tagName == 'INPUT'){
                            var price = prices['drinks'][0][d.parentElement.id.replace("-container", "").replaceAll("-", "_")]
                            total += d.value * price[delivery ? 'delivery' : 'normal']
                            if(d.value != 0) summary += d.value + simplified[d.parentElement.id.replace("-container", "").replaceAll("-", "_")] + " "
                        }
                    })
                }
            })
        }
    })
    if(partnership.checked || company.checked){
        total *= 0.9
    }
    result.innerText = total
    sum.innerText = summary
})