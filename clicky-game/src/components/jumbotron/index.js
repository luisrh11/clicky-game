import React from "react";
import "./styles.css";

function Jumbotron() {
    return (
        <div>
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className="display-4" id="jh1">Angry Birds Version</h1>
                    <p className="lead" id="jp">Click on an image to earn points, but don't click on any more than once!</p>
                </div>
            </div>
        </div>
    );
}

export default Jumbotron;