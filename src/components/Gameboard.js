import React, {Component} from 'react'
// import "../App.css"
import Door from "./Door";

class Gameboard extends Component{
    render() {
        return(
            <div>
                Gameboard
                <div className="doorGrid">
                    <Door number={1}/>
                    <Door number={2}/>
                    <Door number={3}/>
                </div>
                <button onClick={this.props.victory}>Win</button>
                <button onClick={this.props.defeat}>Lose</button>
            </div>
        );
    }
}

export default Gameboard;