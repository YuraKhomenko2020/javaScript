let price;
let memory = prompt("How much memory do you want in phone?");

if (memory == 64) {
   price = "Phone price 300$";
  
}
else if (memory == 128) {
    price = "Phone price 500$";
  
}
else if (memory == 256) {
    price = "Phone price 700$";
  
} 
else {
   alert ("Incorrect type");
}
alert(price);
/*
document.write (price);
Можливо потрібно так?
*/
