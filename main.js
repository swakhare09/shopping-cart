var cartData = new Map();

fetch("./content.json").then(response => response.json())
    .then(data => setData(data));

function setData(data) {
    document.getElementById("first-header").innerHTML = data.data[0].name;
    document.getElementById("second-header").innerHTML = data.data[1].name;

    document.getElementById("cos-first-name").innerHTML = data.data[0].productList[0].name;
    document.getElementById("cos-first-price").innerHTML = data.data[0].productList[0].price;

    document.getElementById("cos-second-name").innerHTML = data.data[0].productList[1].name;
    document.getElementById("cos-second-price").innerHTML = data.data[0].productList[1].price;

    document.getElementById("hos-first-name").innerHTML = data.data[1].productList[0].name;
    document.getElementById("hos-first-price").innerHTML = data.data[1].productList[0].price;

    document.getElementById("hos-second-name").innerHTML = data.data[1].productList[1].name;
    document.getElementById("hos-second-price").innerHTML = data.data[1].productList[1].price;

    document.getElementById("addToCart00").name = data.data[0].productList[0].name;
    document.getElementById("addToCart00").value = data.data[0].productList[0].price;
    document.getElementById("removeFromCart00").name = data.data[0].productList[0].name;
    document.getElementById("removeFromCart00").value = data.data[0].productList[0].price;


    document.getElementById("addToCart01").name = data.data[0].productList[1].name;
    document.getElementById("addToCart01").value = data.data[0].productList[1].price;
    document.getElementById("removeFromCart01").name = data.data[0].productList[1].name;
    document.getElementById("removeFromCart01").value = data.data[0].productList[1].price;

    document.getElementById("addToCart10").name = data.data[1].productList[0].name;
    document.getElementById("addToCart10").value = data.data[1].productList[0].price;
    document.getElementById("removeFromCart10").name = data.data[1].productList[0].name;
    document.getElementById("removeFromCart10").value = data.data[1].productList[0].price;

    document.getElementById("addToCart11").name = data.data[1].productList[1].name;
    document.getElementById("addToCart11").value = data.data[1].productList[1].price;
    document.getElementById("removeFromCart11").name = data.data[1].productList[1].name;
    document.getElementById("removeFromCart11").value = data.data[1].productList[1].price;

}


function addToCart(element) {


    cartData.set(element.id.substring(element.id.length - 2), { "name": element.name, "price": element.value });
    console.log("Added to cart");
    cartData.forEach((value) => { console.log(value) });



}

function removeFromCart(element) {

    cartData.delete(element.id.substring(element.id.length - 2));
    console.log("Removed from cart");
    cartData.forEach((value) => { console.log(value) });


}