
function onLoad(e){

    let locationBox = document.querySelector("#location");
    let location = {
        latitude: "unknown", //default values
        longitude: "unknown"
    };

    window.navigator.geolocation.getCurrentPosition(
        function(position){
            location = {
                latitude: position.coords.latitude,
                longitude: position.coords.longitude
            }
            locationBox.value = JSON.stringify(location);
        },
        function(error){
            locationBox.value = JSON.stringify(location);      
    });


/* break up into smaller functional parts? */

function onLoad(e){
    const order = localStorage.getItem("order");
    if(!order) return;
    const pieOrder = JSON.parse(order); //create an object from a string. opposite of json.stringify
    const orderInput = document.querySelector("#pie-order");
    orderInput.value = order; 
    //console.log(orderInput);
    //console.log(orderInput.value);
    //console.log(pieOrder); //pie order object from local store
    const pie = document.querySelector('.pie');
    //console.log(pie); //the pie div element and its childern like on pies.html except is blank and gets populated by JS
    //const title = pie.querySelector('.title');
    pie.querySelector(".title").innerText = pieOrder.title; //make the pie div's title equal to the title from the local storage order
    //const price = pie.querySelector('.price');
    pie.querySelector(".price").innerText = pieOrder.price;
    //const desc = pie.querySelector('.desc');
    pie.querySelector(".desc").innerText = pieOrder.desc;
    //const img = pie.querySelector("img");
    pie.querySelector("img").setAttribute('src',`images/${pieOrder.id}.png`);
    pie.querySelector("img").setAttribute('alt',pieOrder.title);
}  


window.addEventListener("DOMContentLoaded", onLoad);