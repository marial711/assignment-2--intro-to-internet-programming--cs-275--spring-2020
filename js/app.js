//Loads the page without recipes
window.onload = () => {
    document.getElementById(`sprouted`).style.display = `none`;
    document.getElementById(`recipe-1`).style.display = `none`;
};
//Getting serving size
function getInputValue(){
    let size = parseInt(document.getElementById(`quanity`).value);
    return size;
}
//Functions to retrieve amounts for white rice
function cupsOfWater(){
    let riceAmount = parseInt(document.getElementById(`water-1`).innerHTML);
    return riceAmount;
}
function cupsOfOil(){
    let oilAmount = parseInt(document.getElementById(`oil-1`).innerHTML);
    return oilAmount;
}
//Functions retrieving amounts for sprouted riceAmountfunction cupsOfWater(){
function cupsOfWaterSprouted(){
    let riceAmount = parseInt(document.getElementById(`water-2`).innerHTML);
    return riceAmount;
}
function cupsOfOilSprouted(){
    let oilAmount = parseInt(document.getElementById(`oil-2`).innerHTML);
    return oilAmount;
}
//Rewriting Recipe
function rewriteRecipe(){
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
