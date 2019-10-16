import React, {Component} from 'react'
import '../App.css'
import Gameboard from "./Gameboard";

class Scoreboard extends Component {
    constructor(props) {
        super(props);
        this.state.games=0;
        this.state.wins=0;
        this.state.losses=0;
        this.state.win_percentage=0;
    }


    render(){
        return(
            <div>
                Scoreboard
                <h1></h1>
                <h1></h1>
                <h1></h1>

                <Gameboard/>
                <button> Reset</button>
            </div>
        )

    }
}
export default Scoreboard;