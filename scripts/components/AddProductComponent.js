var React = require('react');
var ProductModel = require('../models/ProductModel');

module.exports = React.createClass({
	getInitialState: function() {
		return { error: null };
	},
	render: function() {
		var errorElement = null;
		if(this.state.error) {
			errorElement = (
				<p className="red">{this.state.error}</p>
			);
		}
		return (
			<div className="container">
				<div className="row">
					<form className="col s12" onSubmit={this.onAddProduct}>
						<h1>Add Product</h1>
						{errorElement}
						<div className="row">
							<div className="input-field col s12">
								<input type="text" ref="name" id= "name" className="validate" />
								<label>Product Name</label>
							</div>
						</div>
						<div className="row">
							<div className="input-field col s12">
								<textarea ref="description" id="textarea1" className="materialize-textarea"></textarea>
								<label>Description</label>
							</div>
						</div>
						<div className="row">
							<div className="input-field col s6" id="price" ref="price">
								<input type="number" ref="price" className="validate" />
								<label>Price</label>
							</div>
							<div className="input-field col s6">
								<select className="browser-default" id="type" ref="type">
									<option defaultValue="" disabled selected>Category</option>
									<option defaultValue="books">Books</option>
									<option defaultValue="electronics">Electronics</option>
									<option defaultValue="clothing">Clothing</option>
								</select>
							</div>
						</div>
						<div className="row">
							<button className="waves-effect waves-light btn">Add Product</button>
						</div>
					</form>
				</div>
			</div>
		);
	},
	onAddProduct: function(e) {
		e.preventDefault();
		var newProduct = new ProductModel ({
			name: this.refs.name.getDOMNode().value,
			price: parseFloat(this.refs.price.getDOMNode().value),
			description: this.refs.description.getDOMNode().value,
			type: this.refs.type.getDOMNode().value,
			user: Parse.User.current()
		});

		newProduct.save();
	}
});
















