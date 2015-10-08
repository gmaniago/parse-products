var React = require('react');

module.exports = React.createClass({
	render: function() {
		return (
		<main>
			<div className="slider">
			    <ul className="slides">
			      <li>
			        <img src="http://incentivetravelgroup.com/wp-content/uploads/2014/08/travel-agent.jpg" /> 
			        <div className="caption center-align">
			          <h3>Quisque ut dapibus leo!</h3>
			          <h5 className="light grey-text text-lighten-3">Suspendisse cursus augue lectus, eu blandit nibh viverra eu.</h5>
			        </div>
			      </li>
			      <li>
			        <img src="http://i.huffpost.com/gen/2535408/images/o-COFFEE-BOOKSHOP-facebook.jpg" />
			        <div className="caption center-align">
			          <h3>Cras id elementum nibh.</h3>
			          <h5 className="light grey-text text-lighten-3">Nunc non est maximus, accumsan lectus sit amet, vestibulum nibh.</h5>
			        </div>
			      </li>
			      <li>
			        <img src="http://www.dowelectronics.com/img/banner03.jpg" /> 
			        <div className="caption center-align">
			          <h3>Nunc eu faucibus urna</h3>
			          <h5 className="light grey-text text-lighten-3">Phasellus euismod nec mi et consequat</h5>
			        </div>
			      </li>
			    </ul>
			</div>
      
      		<div className="row">
				<div className="col s12 m6 l3">
			        <p>Lorem ipsum dolor sit amet, auctor sodales, quam maecenas, amet dignissim. Curabitur donec ligula, tortor wisi dis. Donec eget lectus. Wisi vitae, fermentum habitasse eros. Labore metus velit, risus et.</p>			    
			    </div>
			    <div className="col s12 m6 l3">
			        <p>Leo mattis nec, in urna sed. Nam eleifend vitae, nullam justo vitae. Vestibulum aenean metus, quam maiores, a leo. Metus vestibulum, in ante penatibus, tellus tincidunt. Integer massa diam.</p>				    
			    </div>
			    <div className="col s12 m6 l3">
			        <p>Fermentum felis ullamcorper, amet vel in. Luctus odio libero. Quam sed eget. Cum sit, diam sodales volutpat. Sit et pellentesque, risus leo, lectus consequat. Facilisi libero, nam a vel.</p>				    
			    </div>
			    <div className="col s12 m6 l3">
			        <p>Eros viverra integer, sit purus. Vehicula nulla nulla, tempor eget tincidunt. Ornare donec nibh, scelerisque temporibus dis, nulla mauris curabitur. Purus tristique vitae. Tempor eu lacus.</p>				    
			    </div>
			</div>
      	</main>
		);
	}
});