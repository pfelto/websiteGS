function onLoad(e){
    const orderButtons = document.querySelectorAll('button[data-order]'); //Get all the order buttons
    console.log(orderButtons);
    orderButtons.forEach(button => button.addEventListener("click",onClick)); //shorthand saying for each button in orderButtons create addEventListener

}

/* Might want to break this code up into smaller functional pieces */
function onClick(e){
    const button = e.currentTarget; //gives us reference to the html element of the button that we just clicked. Need data- and parent
    console.log(button);
    const parentContainer = button.parentNode; //this the the parent div element that has additional title, price and desc info
    console.log(parentContainer);

    const order = {
        id: button.getAttribute("data-order"),
        title: parentContainer.querySelector(".title").innerText, //use class select and get its text with .innerText
        price: parentContainer.querySelector(".price").innerText,
        desc: parentContainer.querySelector(".desc").innerText
    };

    console.log(order);
    console.log(JSON.stringify(order));


    localStorage.setItem("order", JSON.stringify(order)); //localStorage does not know how to save objects only strings

    //Want to popup the orders.html page filled in with info about pie selected. Handle switching pages here tho
    const url = window.location.href.replace("pies.html", "order.html");
    window.location.href = url;

}


window.addEventListener("DOMContentLoaded",onLoad);
