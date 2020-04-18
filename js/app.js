//Loads the page without recipes
window.onload = () => {
    document.getElementById(`sprouted`).style.display = `none`;
    document.getElementById(`rice`).style.display = `none`;
};
//Getting serving size
function getInputValue(){
    let size = parseInt(document.getElementById(`quanity`).value);
    return size;
}
//Funcitons to retrieve amounts for white rice
function cupsOfWhiteRice(){
    let riceAmount = parseInt(document.getElementById(`rice-1`).innerHTML);
    return riceAmount;
}
function cupsOfOil(){
    let oilAmount = parseInt(document.getElementById(`oil-1`).innerHTML);
    return oilAmount;
}
//test
console.log(cupsOfWhiteRice());
console.log(cupsOfOil());
//Once button gets clicked it stores value in getInputValue()
document.getElementById(`enter`).onclick = function(){
    console.log(getInputValue());
};
//Displays recipe based on button
document.getElementById(`white-rice`).onclick = function (){
    if(document.getElementById(`rice`).style.display === `none`){
        document.getElementById(`rice`).style.display = `block`;
        document.getElementById(`white-rice`).innerHTML = `Close`;
    }
    else if(document.getElementById(`rice`).style.display === `block`){
        document.getElementById(`rice`).style.display = `none`;
        document.getElementById(`white-rice`).innerHTML = `White Rice`;
    }
};
document.getElementById(`california-rice`).onclick = function (){
    if(document.getElementById(`sprouted`).style.display === `none`){
        document.getElementById(`sprouted`).style.display = `block`;
        document.getElementById(`california-rice`).innerHTML = `Close`;
    }
    else if(document.getElementById(`sprouted`).style.display === `block`){
        document.getElementById(`sprouted`).style.display = `none`;
        document.getElementById(`california-rice`).innerHTML = `California Rice`;
    }
};
