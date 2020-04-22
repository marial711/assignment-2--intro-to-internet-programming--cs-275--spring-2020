window.onload = function () {
    document.getElementById(`sprouted`).style.display = `none`;
    document.getElementById(`recipe-1`).style.display = `none`;
    console.log(`Hello it works also`);
};

function getInputValue() {
    var size = parseFloat(document.getElementById(`quanity`).value);
    return size;
}

function cupsOfWater() {
    var waterAmount = parseFloat(document.getElementById(`water-1`).innerHTML);
    return waterAmount;
}

function cupsOfOil() {
    var oilAmount = parseFloat(document.getElementById(`oil-1`).innerHTML);
    return oilAmount;
}

function cupsOfRice() {
    var riceAmount = parseFloat(document.getElementById(`rice`).innerHTML);
    return riceAmount;
}

function cupsOfWaterSprouted() {
    var riceAmount = parseFloat(document.getElementById(`water-2`).innerHTML);
    return riceAmount;
}

function cupsOfOilSprouted() {
    var oilAmount = parseFloat(document.getElementById(`oil-2`).innerHTML);
    return oilAmount;
}

function cupsOfSproutedRice() {
    var amount = document.getElementById(`fraction`).innerHTML;
    amount = 1.25;
    return amount;
}

function rewriteRecipe() {
    console.log(typeof(cupsOfSproutedRice()) + ` ` + cupsOfSproutedRice());
    var origWater = cupsOfWater(),
        servingSize = getInputValue(),
        newWater = origWater * servingSize;
    document.getElementById(`water-1`).innerHTML = newWater;
    var origOil = cupsOfOil(),
        newOil = origOil * servingSize;
    document.getElementById(`oil-1`).innerHTML = newOil;
    var sproutedWater = cupsOfWaterSprouted(),
        newSprouted = sproutedWater * servingSize;
    document.getElementById(`water-2`).innerHTML = newSprouted;
    var sproutedOil = cupsOfOilSprouted(),
        newSproutedOil = sproutedOil * servingSize;
    document.getElementById(`oil-2`).innerHTML = newSproutedOil;
    var whiteRice = cupsOfRice(),
        newRice = void 0;

    if (servingSize !== 1) {
        newRice = whiteRice * servingSize;
        document.getElementById(`rice`).innerHTML = newRice + ` cups`;
    }

    var sproutedRice = cupsOfSproutedRice(),
        newSproutedAmount = sproutedRice * servingSize;
    document.getElementById(`fraction`).innerHTML = newSproutedAmount;
}

document.getElementById(`enter`).onclick = function () {
    getInputValue();
    rewriteRecipe();
};

document.getElementById(`white-rice`).onclick = function () {
    if (document.getElementById(`recipe-1`).style.display === `none`) {
        document.getElementById(`recipe-1`).style.display = `block`;
        document.getElementById(`white-rice`).innerHTML = `Close`;
    } else if (document.getElementById(`recipe-1`).style.display === `block`) {
        document.getElementById(`recipe-1`).style.display = `none`;
        document.getElementById(`white-rice`).innerHTML = `White Rice`;
    }
};

document.getElementById(`california-rice`).onclick = function () {
    if (document.getElementById(`sprouted`).style.display === `none`) {
        document.getElementById(`sprouted`).style.display = `block`;
        document.getElementById(`california-rice`).innerHTML = `Close`;
    } else if (document.getElementById(`sprouted`).style.display === `block`) {
        document.getElementById(`sprouted`).style.display = `none`;
        document.getElementById(`california-rice`).innerHTML = `California Rice`;
    }
};
