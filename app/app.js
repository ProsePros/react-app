// Include the Main React Dependencies
var React = require("react");
var ReactDOM = require("react-dom");

// Include the Header Component
var Master = require("./components/Master");
var Slider = require("./components/Slider");
var Original = require("./components/Original");
var Revision = require("./components/Revision");
var Footer = require("./components/Footer");

ReactDOM.render(

  // Here we deploy the Master component as though it were any other HTML element
  
  <div>
  	  <Master />
  	  <Slider />
  	  <Original />
  	  <Revision />
  	  <Footer />
  </div>,
  document.getElementById("app")
);
