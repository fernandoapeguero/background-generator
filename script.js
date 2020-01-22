
let firstPicker = document.querySelector(".colorPicker1");
let secondPicker = document.querySelector(".colorPicker2");
let updaterSelector = document.querySelectorAll("input[type='color']");

onScreenLinearGradientText();

updaterSelector.forEach(element => element.addEventListener("change" , updateBackgroundGradient));

function updateBackgroundGradient(){

    document.body.style.background = `linear-gradient(to right, ${firstPicker.value} , ${secondPicker.value})`;

    onScreenLinearGradientText();

}

function onScreenLinearGradientText(){
    
    document.querySelector("h3").textContent = `background = linear-gradient(to right, ${firstPicker.value} , ${secondPicker.value})`;

}

