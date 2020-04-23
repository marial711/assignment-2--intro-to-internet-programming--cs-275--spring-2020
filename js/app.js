window.onload = function () {
    let button = document.querySelectorAll(`button`);
    document.getElementById(`sprouted`).style.display = `none`;
    document.getElementById(`recipe-1`).style.display = `none`;

    button[0].addEventListener(`click`, () => {
        rewriteRecipe();
    });
    button[1].addEventListener(`click`, () => {
        document.getElementById(`recipe-1`).style.display = `block`;
    });
    button[2].addEventListener(`click`, () => {
        document.getElementById(`sprouted`).style.display = `block`;
    });
};

function getInputValue() {
    let size = parseFloat(document.getElementById(`quanity`).value);
    return size;
}

function cupsOfWater() {
    let waterAmount = parseFloat(document.getElementById(`water-1`).innerHTML);
    return waterAmount;
}

function cupsOfOil() {
    let oilAmount = parseFloat(document.getElementById(`oil-1`).innerHTML);
    return oilAmount;
}

function cupsOfRice() {
    let riceAmount = parseFloat(document.getElementById(`rice`).innerHTML);
    return riceAmount;
}

function cupsOfWaterSprouted() {
    let riceAmount = parseFloat(document.getElementById(`water-2`).innerHTML);
    return riceAmount;
}

function cupsOfOilSprouted() {
    let oilAmount = parseFloat(document.getElementById(`oil-2`).innerHTML);
    return oilAmount;
}

function cupsOfSproutedRice() {
    let amount = document.getElementById(`fraction`).innerHTML;
    amount = 1.25;
    return amount;
}

function rewriteRecipe() {
    console.log(typeof(cupsOfSproutedRice()) + ` ` + cupsOfSproutedRice());
    let origWater = cupsOfWater(),
        servingSize = getInputValue(),
        newWater = origWater * servingSize;
    document.getElementById(`water-1`).innerHTML = newWater;
    let origOil = cupsOfOil(),
        newOil = origOil * servingSize;
    document.getElementById(`oil-1`).innerHTML = newOil;
    let sproutedWater = cupsOfWaterSprouted(),
        newSprouted = sproutedWater * servingSize;
    document.getElementById(`water-2`).innerHTML = newSprouted;
    let sproutedOil = cupsOfOilSprouted(),
        newSproutedOil = sproutedOil * servingSize;
    document.getElementById(`oil-2`).innerHTML = newSproutedOil;
    let whiteRice = cupsOfRice(),
        newRice = 0;

    if (servingSize !== 1) {
        newRice = whiteRice * servingSize;
        document.getElementById(`rice`).innerHTML = newRice;
    }

    let sproutedRice = cupsOfSproutedRice(),
        newSproutedAmount = sproutedRice * 8;
    document.getElementById(`fraction`).innerHTML = newSproutedAmount;
    document.getElementById(`measure`).innerHTML = `oz`;
}
