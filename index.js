document.getElementById("CaseIncrease1").addEventListener("click", function () {
  handelarProductChange2(true);
});
document.getElementById("CaseDecrease1").addEventListener("click", function () {
  handelarProductChange2(false);
});

document.getElementById("CaseIncrease").addEventListener("click", function () {
  handelarProductChange(true);
});

document.getElementById("CaseDecrease").addEventListener("click", function () {
  handelarProductChange(false);
});
////////////////////////////////////////////////////////////////////////////////////////////////////////
function calculator() {
const phoneinput = document.getElementById("CaseValue1");
const phoneCount = parseFloat(phoneinput.value);
const caseinput = document.getElementById("CaseValue");
const caseCount = parseFloat(caseinput.value);
const subTotal = phoneCount * 1219 + caseCount * 59;
document.getElementById("subtotal").innerText = subTotal;
const tex =Math.round(subTotal * 0.1);
document.getElementById("tex-total").innerText = tex;
const grandTotal = subTotal + tex;
document.getElementById("grandTotal").innerText = grandTotal;
}
////////////////////////////////////////////////////////////////////////////////////////////////////////
// function getInputNumber(product) {
//   const productInput = document.getElementById("product");
//   const productNumber = parseInt(productInput.value);
//   return productNumber;
// }
////////////////////////////////////////////////////////////////////////////////////////////////////////////
function handelarProductChange2(isIncrease) {
const caseValue = document.getElementById("CaseValue1");
const caseInput = parseInt(caseValue.value);
let caseNewCount = caseInput;
if (isIncrease == true) {
  caseNewCount = caseInput + 1;
} else if (isIncrease == false && caseInput > 0) {
  caseNewCount = caseInput - 1;
}
caseValue.value = caseNewCount;
const caseTotal = caseNewCount * 1219;
document.getElementById("caseTotalAmaount1").innerText = caseTotal;
calculator();
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////
function handelarProductChange(isIncrease) {
const caseValue = document.getElementById("CaseValue");
const caseInput = parseInt(caseValue.value);
let caseNewCount = caseInput;
if (isIncrease == true) {
  caseNewCount = caseInput + 1;
} else if (isIncrease == false && caseInput > 0) {
  caseNewCount = caseInput - 1;
}
caseValue.value = caseNewCount;
const caseTotal = caseNewCount * 59;
document.getElementById("caseTotalAmaount").innerText = caseTotal;
calculator();
}


































































// // Phone Handle
// const shopingCardPlus = document.getElementById("shopingCardPlus").addEventListener("click", function () {
//    const currentValue = document.getElementById("currentValue").value;
//    const currentNumber = parseFloat(currentValue)+1;
//    document.getElementById("currentValue").value = currentNumber; 
   
//     const currentPhonPrice = document.getElementById('currentPrice').innerText
//     const currentPhonPriceNumber = parseFloat(currentPhonPrice) * currentNumber
//        document.getElementById('currentPrice').innerText = currentPhonPriceNumber
    
//  });
//   const shopingCardminus = document.getElementById("shopingCardminus").addEventListener("click", function () { 
//    const currentValue = document.getElementById("currentValue").value;
//    const currentNumber = parseFloat(currentValue)-1;
//    document.getElementById("currentValue").value = currentNumber; 
   
//     const currentPhonPrice = document.getElementById('currentPrice').innerText
//     const currentPhonPriceNumber = parseFloat(currentPhonPrice) * currentNumber;
//        document.getElementById('currentPrice').innerText = currentPhonPriceNumber
    
//   })

//  // phone Cassing Handle 
 
//  const phoneCasePlus = document.getElementById("phoneCasePlus").addEventListener("click", function () {
//    const currentValue2 = document.getElementById("currentValue2").value;
//    const currentNumber2 = parseFloat(currentValue2)+1;
//    document.getElementById("currentValue2").value = currentNumber2; 
   
//     const cureentPriceValueCassing = document.getElementById('cureentPriceValueCassing').innerText
//     const cureentPriceValueCassingNumber = parseFloat(cureentPriceValueCassing) * currentNumber2
//     console.log(cureentPriceValueCassing);
//     document.getElementById('cureentPriceValueCassing').innerText = cureentPriceValueCassingNumber
    
//  });
//  const phoneCaseMaines = document.getElementById("phoneCaseMaines").addEventListener("click", function () {
//     currentValuMains("currentValue2")
//  });
// const subtotalAmaount = document.getElementById("subtotal").innerText;
// const subtotaAmaountlNumber = parseInt(subtotalAmaount)
// const subTotalAmaountValue = currentPhonPriceNumber + cureentPriceValueCassingNumber;
// document.getElementById("subtotal").innerText = subTotalAmaountValue;




//  const subTotal = document.getElementById('subTotal').value
//  const totalSubPrice = parseFloat(subTotal);
//  const totalSubPrice = cureentValueCassingNumber + currentPhonPriceNumber
//  document.getElementById('subTotal').innerText = totalPrice ;
// console.log(totalSubPrice)




















// funcation plus / maines created
//  function currentValuPlus(value){
//     const current = document.getElementById(value).value;
//     const currentNumber = parseInt(current)+1;
//     document.getElementById(value).value = currentNumber; 
    
//  }
//   function currentValuMains(value){
//     const current = document.getElementById(value).value;
//     const currentNumber = parseInt(current)-1;
//     document.getElementById(value).value = currentNumber; 
    
//  }
// subttoal 

// function subtoalNumber(num){
//    const cureentValueCassing = document.getElementById(num).innerText
//     const currentCassingPriceNumber = parseFloat.apply(cureentValueCassing) * currentValue2
//     document.getElementById(num).innerText = currentCassingPriceNumber
// }


