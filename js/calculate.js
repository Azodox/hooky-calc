/**
 * This is the huge system to calculate when the user clicks on the
 * calculate button. This will retrive each field and put it into a variable.
 * And then search in the menu (save as JSON in a variable) to get the price and perhaps multiple it.
 * Besides, it will search for the simplified version of the item's name (again in a JSON variable).
 * Finally, the total and the summary will be displayed.
 */

var calculate = document.getElementById('calculate-button')
var drinksContainer = Array.from(document.getElementById('drinks').children)
var partnership = document.getElementById('partnership')
var company = document.getElementById('company')
var result = document.getElementById('total')
var sum = document.getElementById('sum')
var tip = document.getElementById('tip-amount')
var publicService = document.getElementById("public-service")

var data = '{"drinks":[{"iced_coffee":{"normal":70,"delivery":80},"vanilla_iced_coffee":{"normal":85,"delivery":95},"caramel_iced_coffee":{"normal":85,"delivery":95},"coffee":{"normal":60,"delivery":70,"publicService":20},"decaffeinated_coffee":{"normal":60,"delivery":70},"cappuccino_coffee":{"normal":70,"delivery":80},"latte_coffee":{"normal":65,"delivery":75},"americano":{"normal":65,"delivery":75},"moka":{"normal":70,"delivery":80},"hot_chocolate":{"normal":75,"delivery":85},"chocolatine":{"normal":65,"delivery":75},"croissant":{"normal":55,"delivery":65,"publicService":15},"muffins":{"normal":60,"delivery":70}, "gfingsoif":{"normal":160,"delivery":180},"chocochoco":{"normal":140,"delivery":160},"lebonmatin":{"normal":115,"delivery":135},"macncheese":{"normal":100,"delivery":110},"boosterpack":{"normal":60,"delivery":70},"boosterbox":{"normal":240,"delivery":280},"chips":{"normal":20,"delivery":30},"icetea":{"normal":20,"delivery":30}}]}'
var prices = JSON.parse(data)

var simplifiedData = '{"coffee":"c","decaffeinated_coffee":"cd","cappuccino_coffee":"ca","latte_coffee":"cl","americano":"a","moka":"m","hot_chocolate":"cc","iced_coffee":"cg","vanilla_iced_coffee":"cgv","caramel_iced_coffee":"cgc","chocolatine":"ch","croissant":"cr","muffins":"mf","gfingsoif":" G fin G soif","chocochoco":" Chocochoco","lebonmatin":" Le bon matin","macncheese":"mac","boosterpack":"bp","boosterbox":"bb","chips":"cs","icetea":"tg"}'
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
                            if(delivery){
                                total += d.value * price['delivery']
                            } else if(publicService){
                                total += d.value * price['publicService']
                            } else {
                                total += d.value * price['normal']
                            }
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
    if(tip.value != 0){
        total += tip.valueAsNumber
    }

    result.innerText = parseInt(total)
    sum.innerText = (publicService.checked ? "[Service Public] ": "") + (delivery.checked ? "[Livraison] " : "") + (partnership.checked || company.checked ? "[Réduction 10%] ": "") + summary + (tip.value == 0 ? "" : "(" + tip.value + "$ pb)")
})