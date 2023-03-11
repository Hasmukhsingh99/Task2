let celsiusInput = document.querySelector("#f");
let fahrenheitInput = document.querySelector("#c");

let button = document.querySelector('.button button');

function roundNumber(number){
    return Math.round(number*100)/100;
}

celsiusInput.addEventListener('input',function(){
    let cTemp = parseFloat(celsiusInput.value);
    let fTemp = (cTemp*(9/5)) + 32;
    fahrenheitInput.value = fTemp;

})

fahrenheitInput.addEventListener('input',function(){
    let fTemp = parseFloat(fahrenheitInput.value);
    let cTemp = (fTemp - 32) * (5/9);

    celsiusInput.value = roundNumber(cTemp);
})

button.addEventListener('click',()=>{
    celsiusInput.value="";
    fahrenheitInput.value=""
})