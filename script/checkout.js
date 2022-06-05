document.querySelector("#confirm").addEventListener("click", myaddressFun);

function myaddressFun(){
    event.preventDefault();
let Name = document.querySelector("#name").value;
let Num = document.querySelector("#number").value;
let add = document.querySelector("#address").value;

alert("Your order is accepted");

// setTimeout(alert("Your order is being Prepared"), 3000);
// setTimeout(alert("Your order is being packed"), 8000);
// setTimeout(alert("Your order is out for delivery"), 10000);
// setTimeout(alert("Order delivered"), 12000);

setTimeout(alert1, 3000);
setTimeout(alert2, 8000);
setTimeout(alert3, 10000);
setTimeout(alert4, 12000);

function alert1(){
    alert("Your order is being prepared");
}
function alert2(){
    alert("Your order is being packed");
}
function alert3(){
    alert("Your order is out for delivery");
}
function alert4(){
    alert("Order delivered");
}


}