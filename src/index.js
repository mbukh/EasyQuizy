import React, {Component} from "react";
import ReactDOM from "react-dom";
import "./assets/style.css"

class EasyQuizy extends Component {
    render() {
        return(
            <div className="container">
                <div className="title">EasyQuizy</div>
            </div>
        );
    }
}

ReactDOM.render(<EasyQuizy />, document.getElementById("root"));

// https://opentdb.com/api.php?amount=100