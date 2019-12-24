
var products = [
{name: "Apple", price: 2, image: "images/apple.jpg"},
{name: "Banana", price: 10, image: "images/banana.jpg"},
{name: "Pineapple", price: 4, image: "images/pineapple.jpg"},
{name: "Avocado", price: 5, image: "images/avocado.jpg"},
{name: "Celery", price: 1, image: "images/celery.jpg"},
{name: "Grapes", price: 1, image: "images/grapes.jpg"},
{name: "Orange", price: 1, image: "images/orange.jpg"},
{name: "Lemon", price: 3, image: "images/lemon.jpg"}
];

var cart = [];




$(function(){
 
   //https://codepen.io/drehimself/pen/VvYLmV
	$("#cart").click(function() {
		$(".shoppingcart").fadeToggle("fast");
	});
  
	$('.item').click(function() {
		var i = $(this).data('index');
		var product = products[i];
		cart.push(product);
		renderShoppingCart();
	});
});


function renderShoppingCart()
{
	$("#cartTable > tbody").html("");
	cart.forEach(function(product, i) {
		var cartItemHtml = 
			"<tr>" + 
				"<td><img src='" + product.image + "'></td>" +
				"<td>" + product.name + "</td>" +
				"<td>" + product.price + "</td>" +
				"<td><input onClick=" + "removeFromCart(" + i + ") type='button' value='X'></td>" +
			"</tr>";
			
		//https://stackoverflow.com/questions/171027/add-table-row-in-jquery
		$('#cartTable > tbody:last-child').append(cartItemHtml);
	});
}

function removeFromCart(cartId)
{
	cart.splice(cartId, 1);
	renderShoppingCart();
}
