// Include React
var React = require("react");

// Create the Header component
// Notice how the header uses React.createClass
// Notice how it uses a render function which specifies what will be displayed by the component
var Slider = React.createClass({
  render: function() {
    return (

        <div className="slider">
            <ul className="slides">
                <li>
                    <img src="./assets/img/bg1.jpg"/>
                        <div className="black-text caption left-align">
                            <h3>ProsePros:</h3>
                            <h5 className="black-text text-lighten-3">prose·pros<br />/prōz prōz/
                                <br /> noun <br /> Reinvent yourself by reinventing your words.</h5>
                        </div>
                </li>
                <li>
                    <img src="./assets/img/bg1.jpg"/>
                        <div className="black-text caption left-align">
                            <h2>Community-driven.<br/> Community, driven. </h2>
                        </div>
                </li>
            </ul>
        </div>
    );
  }
});

// Export the component back for use in other files
module.exports = Slider;
