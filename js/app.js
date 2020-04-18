//Loads the page without recipes
window.onload = () => {
    document.getElementById(`sprouted`).style.display = `none`;
    document.getElementById(`recipe-1`).style.display = `none`;
};
//Getting serving size
function getInputValue(){
    let size = parseFloat(document.getElementById(`quanity`).value);
    return size;
}
//Functions to retrieve amounts for white rice
function cupsOfWater(){
    let waterAmount = parseFloat(document.getElementById(`water-1`).innerHTML);
    return waterAmount;
}
function cupsOfOil(){
    let oilAmount = parseFloat(document.getElementById(`oil-1`).innerHTML);
    return oilAmount;
}
function cupsOfRice(){
    let riceAmount = parseFloat(document.getElementById(`rice`).innerHTML);
    return riceAmount;
}
//Functions retrieving amounts for sprouted rice{
function cupsOfWaterSprouted(){
    let riceAmount = parseFloat(document.getElementById(`water-2`).innerHTML);
    return riceAmount;
}
function cupsOfOilSprouted(){
    let oilAmount = parseFloat(document.getElementById(`oil-2`).innerHTML);
    return oilAmount;
}
function cupsOfSproutedRice(){
    let amount = document.getElementById(`fraction`).innerHTML;
    amount = 1.25;
    return amount;
}
//Rewriting Recipe
function rewriteRecipe(){
    console.log(typeof cupsOfSproutedRice() + ` ` + cupsOfSproutedRice());
    let origWater= cupsOfWater(),
        servingSize= getInputValue(),
        newWater = origWater*servingSize;
    document.getElementById(`water-1`).innerHTML = newWater;
    let origOil = cupsOfOil(),
        newOil = origOil * servingSize;
    document.getElementById(`oil-1`).innerHTML = newOil;
    let sproutedWater = cupsOfWaterSprouted(),
        newSprouted = sproutedWater*servingSize;
    document.getElementById(`water-2`).innerHTML = newSprouted;
    let sproutedOil = cupsOfOilSprouted(),
        newSproutedOil = sproutedOil * servingSize;
    document.getElementById(`oil-2`).innerHTML = newSproutedOil;
    let whiteRice = cupsOfRice(),
        newRice;
    if(servingSize !== 1){
        newRice = whiteRice * servingSize;
        document.getElementById(`rice`).innerHTML = newRice + ` cups`;
    }
    let sproutedRice = cupsOfSproutedRice(),
        newSproutedAmount = sproutedRice * servingSize;
    document.getElementById(`fraction`).innerHTML = newSproutedAmount;
}
//Once button gets clicked it stores value in getInputValue()
document.getElementById(`enter`).onclick = function(){
    getInputValue();
    rewriteRecipe();
};
//Displays recipe based on button
document.getElementById(`white-rice`).onclick = function (){
    if(document.getElementById(`recipe-1`).style.display === `none`){
        document.getElementById(`recipe-1`).style.display = `block`;
        document.getElementById(`white-rice`).innerHTML = `Close`;
    }
    else if(document.getElementById(`recipe-1`).style.display === `block`){
        document.getElementById(`recipe-1`).style.display = `none`;
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
