let celsiusInput = document.querySelector('#celsius > input')
let fahrenheitInput = document.querySelector('#fahrenheit > input');;
let caraKalkulasi = document.getElementById('caraKalkulasi');

let btn = document.querySelector('.button button');


function roundNumber(number){
    return Math.round(number*100)/100;
}

celsiusInput.addEventListener('input', function(){
    let cTemp = parseFloat(celsiusInput.value);
    let fTemp = (cTemp*(9/5)) + 32;

    let rumus = (`${cTemp}*99/5 + 32`);

    fahrenheitInput.value = roundNumber(fTemp);
    document.getElementById('caraKalkulasi').innerText = rumus;
})

fahrenheitInput.addEventListener('input', function(){
    let fTemp = parseFloat(fahrenheitInput.value);
    let cTemp = (fTemp - 32) * (5/9);

    let rumus = (`(${fTemp} - 32) * (5/9)`);

    celsiusInput.value = roundNumber(cTemp);
    document.getElementById('caraKalkulasi').innerText = rumus;
})

btn.addEventListener('click', ()=>{
    window.location.reload();
})