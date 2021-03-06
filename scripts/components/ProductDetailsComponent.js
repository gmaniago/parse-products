var React = require('react');
var ProductModel = require('../models/ProductModel');

module.exports = React.createClass({
	getInitialState: function() {
	    return {
	        product: null  
	    };
	},
	componentWillMount: function() {
	    var query = new Parse.Query(ProductModel);
	    query
	    .get(this.props.productId)
	    .then(
	    	(product) => {
	    		this.setState({ product: product })
	    		console.log(pet);
	    	},
	    	(err) => {
	    		console.log(err);
	    	}
	    );
	},
	render: function() {
		var content = <div>loading...</div>;

		if(this.state.product) {
			content = (
				<div>
					<h1>{this.state.product.get('name')}</h1>
					<div>{this.state.product.get('description')}</div>
					<div>{this.state.product.get('type')}</div>
					<div>${this.state.product.get('price')}</div>
				</div>
			);
		}

		return (
			<div className="container">
				<h1>Product Details</h1>
				{content}
			</div>
		);
	},
	
});