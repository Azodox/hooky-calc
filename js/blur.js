/**
 * Here you basically have a simple function that will prevent
 * the user from putting a number less than 0 or nothing in the
 * amount of item.
 */

function onBlur(element){
    if(element.value == "" || element.value < 0){
        element.value = 0
    }
}