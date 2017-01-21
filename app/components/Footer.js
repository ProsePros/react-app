// Include React
var React = require("react");

// Create the Header component
// Notice how the header uses React.createClass
// Notice how it uses a render function which specifies what will be displayed by the component
var Footer = React.createClass({
  render: function() {
	

        return(
            <footer className="page-footer cyan darken-3 center">
                <div className="container left-align">
                    <div className="row">
                          <div className="col l6 s12">                
                             <ul>
                                <li><a className="white-text" href="#!">ABOUT &nbsp</a>
                                <a className="white-text" href="#!">BLOG &nbsp</a>
                                <a className="white-text" href="#!">TERMS &nbsp</a>
                                <a className="white-text" href="#!">CONTACT </a></li>
                            </ul>
                          </div>
                    </div>
                </div>
                <div className="footer-copyright">
                    <div className="container">
                    © 2017 ProsePros
                    </div>
                </div>
            </footer>

        );
  }
});

// Export the component back for use in other files
module.exports = Footer;
