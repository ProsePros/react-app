// Include React
var React = require("react");

// Create the Header component
// Notice how the header uses React.createClass
// Notice how it uses a render function which specifies what will be displayed by the component
var Revision = React.createClass({
  render: function() {
    return (
            <div className="container">
                <h3>See submissions, submit revisions</h3>
                <div className="section">
                    <div className="row">
                        <div className="col s12">
                            <div className="card orange darken-1 card-content white-text">
                                <span className="card-title">Original: "I went bald years ago, and my game has never fully recovered."</span><br/>
                                <div className="row">
                                    <form className="col s12">
                                        <div className="row">
                                            <div className="input-field col s12">
                                                <i className="material-icons prefix"mode_edit/>
                                                <input className="mytext validate" id="icon_prefix" type="text"/>
                                            </div>
                                            <div className="card-action">
                                                <a className="addsentencesubmit waves-effect waves-light btn right">Submit</a>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <span className="revision">"Hair gone, lonely nights."</span>
                                <a className="btn-floating btn-small waves-effect waves-light blue right material-icons">thumb_up</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
  }
});

// Export the component back for use in other files
module.exports = Revision;
