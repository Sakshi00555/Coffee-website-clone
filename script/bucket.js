var bucketArr=JSON.parse(localStorage.getItem("coffee"))||[]
var sumtotal=0;

displayData(bucketArr);


function displayData(bucketArr){
    document.querySelector("#bucket").innerHTML="";
    //document.querySelector("#total_amount").innerText = "Total Price = " +"";
    bucketArr.forEach((element ,index )=> {
        var buck=document.querySelector("#bucket");
        var div= document.createElement("div")
        var image=document.createElement("img")
        image.setAttribute("src",element.image)
        image.setAttribute("id","cofeeimage")

        var name=document.createElement("h3")
        name.innerText=element.title
        var price=document.createElement("h3")
        price.innerText=element.price
        //console.log(name)
        //console.log(image,name)
        var btn=document.createElement("button")
        btn.textContent="Remove"
        btn.addEventListener("click",function(){
            removeItem(element, index);
        })
       
        
        //console.log(total)
        div.append(image,name,price,btn)
        //console.log(div)
        buck.append(div)
        


        sumtotal=sumtotal+element.price
        document.querySelector("#total_amount").innerHTML = "Total Price = " + sumtotal;
        
        
        console.log(sumtotal)


        


        
    });


}
function removeItem(element,index){
    bucketArr.splice(index,1);
    localStorage.setItem("coffee", JSON.stringify(bucketArr));
    
    displayData(bucketArr)
//     sumtotal = sumtotal-el.Price;
// document.querySelector("#total_amount").innerText = "Total Price = " + sumtotal;
    window.location.reload()
    
}


