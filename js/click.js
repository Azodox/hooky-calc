/**
 * In here, we have the system to be able to see the recipe of an item.
 * Basically, it will add either the class show or hidden according to the current present class.
 * So if you click on an item with the show class, it will remove it and add replace it by hidden.
 */

var objectNames = document.getElementsByClassName('object-name')
Array.from(objectNames).forEach(function(objectName) {
    objectName.addEventListener('click', function(e) {
        var recipe = document.getElementById(objectName.parentElement.id.replace("container", "recipe"))
        if(recipe.classList.contains("show")){
            recipe.classList.replace("show", "hidden")
        }else if(recipe.classList.contains("hidden")){
            recipe.classList.replace("hidden", "show")
        }
    })
})