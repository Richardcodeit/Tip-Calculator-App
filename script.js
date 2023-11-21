const bill = document.querySelector("input"),
Tipamount = document.getElementById("tip-amount"),
Total = document.getElementById("total"),
reset = document.getElementById("reset"),
erro = document.querySelector(".error")

const numberOfpeople = document.getElementById("no-people")
numberOfpeople.addEventListener("input", getNoPeople)
function fivePercent(){
    billValue = bill.value * 0.05;
    tipAmount =  billValue.toFixed(2)
    updateUI(tipAmount)
    getNoPeople(tipAmount)
}
function tenPercent(){
    billValue = Number(bill.value) * 0.10;
    tipAmount =  billValue.toFixed(2)
    updateUI(tipAmount)
    getNoPeople(tipAmount)
}
function fifteenPercent(){
    billValue = Number(bill.value) * 0.15;
    tipAmount =  billValue.toFixed(2)
    updateUI(tipAmount)
    getNoPeople(tipAmount)
}
function twentyfivePercent(){
    billValue = Number(bill.value) * 0.25;
    tipAmount =  billValue.toFixed(2)
    updateUI(tipAmount)
    getNoPeople(tipAmount)
}
function fifty(){
    billValue = Number(bill.value) * 0.50;
    tipAmount =  billValue.toFixed(2)
  
    updateUI(tipAmount)
    getNoPeople(tipAmount)
}

function updateUI(tip , total){
              Tipamount.innerHTML = `$${tip}`;
              Total.innerHTML =  total;
}

function getNoPeople(tip){
    if(bill.value === "" && numberOfpeople.click){
        erro.style.display = "block"
        setTimeout(()=>{
        erro.style.display = "none"
        },3000)
        numberOfTotal = "$0.00"
        numberOfpeople.value = null
        updateUI(tipAmount,numberOfTotal)
    }
    else if(bill.value !== null && numberOfpeople.click){
    numberOf = Number(numberOfpeople.value) * tipAmount
    console.log(numberOf)
    numberOfTotal = "$" + numberOf.toFixed(2)

    updateUI(tipAmount,numberOfTotal)
    }
 }

 function rese(){
    bill.value = "";
    numberOfpeople.value = "";
    Tipamount.innerHTML = `$0.00`
    Total.innerHTML = `$0.00`
 }