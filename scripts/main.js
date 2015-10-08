'use strict';
var React = require('react');
var Backbone = require('backbone');
window.$ = require('jquery');
window.jQuery = $;
Parse.initialize("f9KSa4QKe5ClS5OVQyHCgCUhwTBRHW62SAWBnqK0", "nlKF8wWAE2QocgPDzaJU6SXlr3LshQapDWkAAkPl");

var RegisterComponent = require('./components/RegisterComponent');
var NavigationComponent = require('./components/NavigationComponent');
var HomeComponent = require('./components/HomeComponent');
var LoginComponent = require('./components/LoginComponent');

var AddProductComponent = require('./components/AddProductComponent');
var ProductDetailsComponent = require('./components/ProductDetailsComponent');
var BooksComponent = require('./components/BooksComponent');
var ElectronicsComponent = require('./components/ElectronicsComponent');
var ClothingComponent = require('./components/ClothingComponent');



var app = document.getElementById('app');

$(document).ready(function(){
    $('.slider').slider({full_width: true});
});

var Router = Backbone.Router.extend({
	routes: {
		'': 'home',
		'add': 'add',
		'product/details/:id': 'productDetails',
		'category/books': 'books',
		'category/electronics': 'electronics',
		'category/clothing': 'clothing',
		'login': 'login',
		'register': 'register'
	},
	home: function() {
		React.render(<HomeComponent />, app);
	},
	add: function() {
		React.render(<AddProductComponent />, app);
	},
	books: function() {
		React.render(<BooksComponent />, app);
	},
	electronics: function() {
		React.render(<ElectronicsComponent />, app);
	},
	clothing: function() {
		React.render(<ClothingComponent />, app);
	},
	login: function() {
		React.render(<LoginComponent router={r} />, app);
	},
	register: function() {
		React.render(<RegisterComponent router={r} />, app);
	}
});

var r = new Router();
Backbone.history.start();

React.render(
	<NavigationComponent router={r} />,
	document.getElementById('nav')
);