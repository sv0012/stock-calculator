const priceInit = document.querySelector('#price-init');
const priceNow = document.querySelector('#price-now');
const qty = document.querySelector('#qty');
const btn = document.querySelector('#btn');
const output = document.querySelector('#output');


function calculateProfitAndLoss(init,curr,qt){
    let profit;
    let profitPercentage;
    let loss;
    let lossPercentage;
    if(init > curr){
        loss = (init - curr) * qt;
        lossPercentage = (loss / init) * 100;
        output.innerText = "Sorry Bud! Your loss percentage is  " + lossPercentage+"% and your loss is " + loss;
    } else if (curr > init){
        profit = (curr - init) * qt;
        profitPercentage = (profit / init) * 100;
        output.innerText = "Congratulations! Your profit percentage is  " + profitPercentage+"% and your profit is " + profit;
    } else {
        output.innerText = "No pain No Gain,No Gain Yes Pain";
    }
}

function submitHandler(){
    let ip = Number(priceInit.value) ;
    let quantity = Number(qty.value) ;
    let curr = Number(priceNow.value)  ;
    calculateProfitAndLoss(ip,curr,quantity)
}

btn.addEventListener('click', submitHandler);