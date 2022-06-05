const url="https://masai-mock-api.herokuapp.com/coffee/menu";
console.log(url)
var i = 0;
async function getData(){
    let res= await fetch(url);
    let users= await res.json();
    let coffeedata=users.menu.data;
    console.log(coffeedata)

coffeedata.forEach(function(ele) {
    let div=document.createElement("div")
    let img=document.createElement("img") 
    let title=document.createElement("h3")
    let price=document.createElement("h3")
    img.src=ele.image;
    title.innerText=ele.title;
    price.innerText=ele.price;
    var btn=document.createElement("button")
    btn.innerText="Add To Bucket";
    btn.setAttribute("class","add_button");
    btn.addEventListener("click", addtobucketFun);
    //btn.addEventListener("click", counts);
    
    div.append(img,title,price,btn)
    document.querySelector("#menu").append(div)
    
    let storecoffee= JSON.parse(localStorage.getItem("coffee"))||[]
    function addtobucketFun(){
        
        storecoffee.push(ele)
        localStorage.setItem("coffee",JSON.stringify(storecoffee))

            }

    
        //document.getElementById("coffee_count").innerHTML-coffeedata.length;

    
    
    


});
}
getData();
function counts(){
let coffee_counts= JSON.parse(localStorage.getItem("coffee"))
    console.log(coffee_counts.length)
    document.getElementById("coffee_count").innerText=`Cart Items: ${coffee_counts.length}`;
    //window.location.reload()
}
counts()
    