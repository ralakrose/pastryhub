let wrapper = document.querySelector('.wrapper')
let productname = document.getElementsByTagName('h1')
let price = document.getElementsByClassName('price')
let buybutton = document.querySelector('.product-price-button')
let buybtn = document.querySelector('#btn')
let productinfo = document.querySelector('.product-info')

//Adding item to cart
function addToCart() 
{
    if (buybtn.innerHTML=="ADD TO CART") buybtn.innerHTML = "REMOVE FROM CART";
    else buybtn.innerHTML = "ADD TO CART";
   
}
