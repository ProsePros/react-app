// Include React
var React = require("react");

// Create the Header component
// Notice how the header uses React.createClass
// Notice how it uses a render function which specifies what will be displayed by the component
var Master = React.createClass({
  render: function() {
	return (
            <nav className="cyan darken-3" role="navigation">
                <div className="nav-wrapper container">
                    <ul className="right hide-on-med-and-down">
                        <li><a href="#"><i className="material-icons">search</i></a></li>
                        <li><a href="#">LOGIN</a></li>
                        <li><a href="#">SIGN UP</a></li>
                    </ul>

                    <ul id="nav-mobile" className="side-nav">
                        <li><a href="#"><i className="material-icons">search</i></a></li>
                        <li><a href="#">LOGIN</a></li>
                        <li><a href="#">SIGN UP</a></li>
                    </ul>
                </div>
            </nav>
        );
  }
});

// Export the component back for use in other files
module.exports = Master;
