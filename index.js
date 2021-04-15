// Phone Handle
const shopingCardPlus = document.getElementById("shopingCardPlus").addEventListener("click", function () {
    currentValuPlus("currentValue")
 });
  const shopingCardminus = document.getElementById("shopingCardminus").addEventListener("click", function () { 
    currentValuMains("currentValue");
 });

 // phone Cassing Handle 
 
 const phoneCasePlus = document.getElementById("phoneCasePlus").addEventListener("click", function () {
    currentValuPlus("currentValue2")
 });
 const phoneCaseMaines = document.getElementById("phoneCaseMaines").addEventListener("click", function () {
    currentValuMains("currentValue2")
 });
 
// funcation plus / maines created
 function currentValuPlus(value){
    const current = document.getElementById(value).value;
    const currentNumber = parseInt(current)+1;
    document.getElementById(value).value = currentNumber; 
    
 }
  function currentValuMains(value){
    const current = document.getElementById(value).value;
    const currentNumber = parseInt(current)-1;
    document.getElementById(value).value = currentNumber; 
    
 }



