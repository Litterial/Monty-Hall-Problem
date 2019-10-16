import React, {Component} from 'react'
import '../App.css'
import Gameboard from "./Gameboard";

class Scoreboard extends Component {

    constructor(props) {
        super(props);

        this.state={
            games:0,
            wins:0,
            losses:0,
            win_percentage:0,
        };
    }


    // const total_games=this.state.games;
    // var hello=

    victory=(e)=>
    {
        this.setState({games:this.state.games+1,wins:this.state.wins+1,win_percentage:((this.state.wins+1)/(this.state.games+1))*100})
    };

    defeat=(e)=>
    {
        this.setState({games:this.state.games+1,losses:this.state.losses+1,win_percentage:(this.state.wins/(this.state.games+1))*100})

    };

    reset=(e)=>
    {
    this.setState({games:0,wins:0,losses:0,win_percentage:0});
    };
    render(){

        return(
            <div>
                Scoreboard
                <h1>Total Games: {this.state.games}</h1>
                <h1>Wins: {this.state.wins}</h1>
                <h1>Loses: {this.state.losses}</h1>
                <h1>Win Percentage: {this.state.win_percentage}%</h1>
                <Gameboard victory={this.victory} defeat={this.defeat}/>
                <button onClick={this.reset}> Reset</button>
            </div>
        )

    }
}
export default Scoreboard;