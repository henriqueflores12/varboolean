/*values true and false are used in the class atributes of html elements.theses
values trogger different css class rules:true or false ...   
this is not fully completed ok*/

var inStock;
var shipping;

inStock = false;
shipping = true;

if (inStock > 0 == false) {
  var elStock = document.getElementById("stock");
  elStock.className = inStock;
  elStock.textContent = false;
} else if (elShip < 1 == true) {
  var elShip = document.getElementById("shipping");
  elShip = className = shipping;
  shipping.textContent = true;
}
console.log(inStock);
console.log(shipping);
