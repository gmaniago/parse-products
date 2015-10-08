var React = require('react');
var ProductModel = require('../models/ProductModel');

module.exports = React.createClass({
	getInitialState: function() {
	    return {
	          products: []
	    };
	},
	componentWillMount: function() {
	      var query = new Parse.Query(ProductModel);
	      query
	      .equalTo('type', 'Electronics')
	      .find().then(
	      		(products) => {
	      			console.log(products);
	      			this.setState({products: products});
	      		},
	      		(err) => {
	      			console.log(err);
	      		}
	      	);
	},
	render: function() {
		var productElements = this.state.products
		.map(function(product) {
			return(
				<table class="responsive-table centered striped">
			        <thead>
				          <tr>
				              <th data-field="id">Name</th>
				              <th data-field="name">Description</th>
				              <th data-field="type">Type</th>
				              <th data-field="price">Price</th>
				          </tr>
			        </thead>

			        <tbody>
				          <tr>
							<td>{product.get('name')}</td>
							<td>{product.get('description')}</td>
							<td>{product.get('type')}</td>
							<td>{product.get('price')}</td>
				          </tr>
			        </tbody>
		      	</table>
			);
		});

			return (
				<div>
					<h1>Electronics</h1>
					{productElements}
				</div>
			);
		
		
	}
	
})