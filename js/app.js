window.onload = function () {
    let button = document.querySelectorAll(`button`);
    let input = document.querySelectorAll(`input`);
    document.getElementById(`sprouted`).style.display = `none`;
    document.getElementById(`recipe-1`).style.display = `none`;

    input[0].addEventListener(`change`, () => {
        getInputValue();
        rewriteRecipe();
    });
    button[0].addEventListener(`click`, () => {
        document.getElementById(`recipe-1`).style.display = `block`;
    });
    button[1].addEventListener(`click`, () => {
        document.getElementById(`sprouted`).style.display = `block`;
    });
};

function getInputValue() {
    let size = parseFloat(document.getElementById(`quanity`).value);
    return size;
}

function cupsOfWater() {
    let waterAmount = parseFloat(document.getElementById(`water-1`).innerHTML);
    waterAmount = 2 * 8;
    return waterAmount;
}

function cupsOfOil() {
    let oilAmount = parseFloat(document.getElementById(`oil-1`).innerHTML);
    oilAmount = 1/2;
    return oilAmount;
}

function cupsOfRice() {
    let riceAmount = parseFloat(document.getElementById(`rice`).innerHTML);
    riceAmount = 8;
    return riceAmount;
}

function cupsOfWaterSprouted() {
    let waterAmount = parseFloat(document.getElementById(`water-2`).innerHTML);
    waterAmount = 2 * 8;
    return waterAmount;
}

function cupsOfOilSprouted() {
    let oilAmount = parseFloat(document.getElementById(`oil-2`).innerHTML);
    oilAmount = 1/2;
    return oilAmount;
}

function cupsOfSproutedRice() {
    let amount = document.getElementById(`fraction`).innerHTML;
    amount = 1.25 * 8;
    return amount;
}
function increase(){
    let increase = document.getElementById(`increase`).innerHTML;
    increase = .5 * 8;
    return increase;
}

function rewriteRecipe() {
    let origWater = cupsOfWater(),
        servingSize = getInputValue(),
        newWater = origWater * servingSize;
    document.getElementById(`water-1`).innerHTML = newWater;
    document.getElementById(`size-2`).innerHTML = `oz`;

    let origOil = cupsOfOil(),
        newOil = origOil * servingSize;
    document.getElementById(`oil-1`).innerHTML = newOil;
    document.getElementById(`size-3`).innerHTML = `oz`;

    let sproutedWater = cupsOfWaterSprouted(),
        newSprouted = sproutedWater * getInputValue();
    document.getElementById(`water-2`).innerHTML = newSprouted;
    document.getElementById(`size-5`).innerHTML = `oz`;


    let sproutedOil = cupsOfOilSprouted(),
        newSproutedOil = sproutedOil * servingSize;
    document.getElementById(`oil-2`).innerHTML = newSproutedOil;
    document.getElementById(`size-6`).innerHTML = `oz`;

    let whiteRice = cupsOfRice(),
        newRice = 1;
    if (servingSize !== 1) {
        newRice = whiteRice * servingSize;
        document.getElementById(`rice`).innerHTML = newRice;
        document.getElementById(`size-1`).innerHTML = `oz`;
    }else if (servingSize === 1){
        newRice = whiteRice * servingSize;
        document.getElementById(`rice`).innerHTML = newRice;
        document.getElementById(`size-1`).innerHTML = `oz`;
    }

    let sproutedRice = cupsOfSproutedRice(),
        newSproutedAmount = sproutedRice * servingSize;
    document.getElementById(`fraction`).innerHTML = newSproutedAmount;
    document.getElementById(`size-4`).innerHTML = `oz`;

    let changeIncrease = increase(),
        newIncrease = changeIncrease;
    document.getElementById(`increase`).innerHTML = newIncrease;
    document.getElementById(`size-7`).innerHTML = `oz`;

}
