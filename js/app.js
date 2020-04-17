//Loads the page without recipes
window.onload = () => {
    document.getElementById(`sprouted`).style.display = `none`;
    document.getElementById(`rice`).style.display = `none`;
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
