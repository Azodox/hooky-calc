/**
 * This is the huge system to calculate when the user clicks on the
 * calculate button. This will retrive each field and put it into a variable.
 * And then search in the menu (save as JSON in a variable) to get the price and perhaps multiple it.
 * Besides, it will search for the simplified version of the item's name (again in a JSON variable).
 * Finally, the total and the summary will be displayed.
 */

var calculate = document.getElementById('calculate-button')
var drinksContainer = Array.from(document.getElementById('drinks').children)
var tenten = document.getElementById('10-10')
var company = document.getElementById('company')
var result = document.getElementById('total')
var sum = document.getElementById('sum')
var tip = document.getElementById('tip-amount')

var data = '{"drinks":[{"sushis_crabe":{"normal":85,"delivery":95},"sushis_saumon":{"normal":85,"delivery":95},"sushis_crevette":{"normal":85,"delivery":95},"cesar":{"normal":70,"delivery":80,"publicService":20},"jardin":{"normal":86,"delivery":96},"turbot":{"normal":86,"delivery":96},"saumon":{"normal":81,"delivery":91},"morue":{"normal":82,"delivery":92},"mojito":{"normal":185,"delivery":195},"whisky":{"normal":265,"delivery":275},"vodka":{"normal":265,"delivery":275},"martini":{"normal":180,"delivery":190},"muffins":{"normal":60,"delivery":65},"hazelnut_iced_coffee":{"normal":90,"delivery":100},"mochis":{"normal":60,"delivery":65},"ramen":{"normal":80,"delivery":100},"10-10":{"normal":1000}}]}'
var prices = JSON.parse(data)

var simplifiedData = '{"sushis_crabe":"sushicrabe","sushis_saumon":"sushisaumon","sushis_crevette":"sushicrevette","cesar":"saladecesar","jardin":"saladejardin","turbot":"filetturbot","saumon":"filetsaumon","iced_coffee":"cg","morue":"filetmorue","mojito":"cocktailmojito","vodka":"vodka","whisky":"whisky","martini":"martini","hazelnut_iced_coffee":"cgn","mochis":"mo","ramen":"ra","10-10":"tenten"}'
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
                            
                            if(d.disabled){
                                return
                            }

                            if(delivery){
                                total += d.value * price['delivery']
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

    if(company.checked){
        total *= 0.9
    }
    if(tip.value != 0){
        total += tip.valueAsNumber
    }

    result.innerText = parseInt(total)
    sum.innerText = 
    (delivery ? "[VIP] " : "")
    + (company.checked ? "[Réduction 10%] ": "")
    + summary
    + (tip.value == 0 ? "" : "(" + tip.value + "$ pb)")
})