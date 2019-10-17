import React, {Component} from 'react'
// import "../App.css"
import Door from "./Door";

class Gameboard extends Component{
    constructor(props) {
        super(props);
        this.state={
            doorWinner:Math.floor(Math.random()*3)+1,
            myDoor:"",
            clicked:"",
        };
        this.chooseDoor=this.chooseDoor.bind(this);
    }

    chooseDoor=(id)=>
    {
        console.log("chooseDoor event fired");
        console.log(id);
        this.setState({myDoor:id,clicked:id});
    };

    resetDoors=(e)=>
    {
      this.setState({myDoor:"",clicked:"",doorWinner:Math.floor(Math.random()*3)+1});
      this.props.resetScore();
    };

    render() {
        const doors=[];
        for( var x=1; x<4;x++)
        {
         if (x!==this.state.doorWinner)
             doors.push(x);
        }
        console.log(doors);

        if(this.state.myDoor)
        {
            console.log("A door was clicked");
            return(
                <div className="GameBoard">
                    Gameboard Clicked
                    <h1>{this.state.doorWinner}</h1>
                    <div className="doorGrid">
                        <Door number={1} myDoor={this.state.myDoor} clicked={this.state.clicked}/>
                        <Door number={2}  myDoor={this.state.myDoor} clicked={this.state.clicked}/>
                        <Door number={3}  myDoor={this.state.myDoor} clicked={this.state.clicked}/>
                    </div>
                    <button onClick={this.props.victory}>Win</button>
                    <button onClick={this.props.defeat}>Lose</button>
                    <button onClick={this.resetDoors}>Reset</button>
                </div>
            );
        }
        else
        {
            return(
                <div className="GameBoard">
                    Gameboard
                    <h1>{this.state.doorWinner}</h1>
                    <div className="doorGrid">
                        <Door number={1} chooseDoor={this.chooseDoor} clicked={this.state.clicked}/>
                        <Door number={2} chooseDoor={this.chooseDoor} clicked={this.state.clicked}/>
                        <Door number={3} chooseDoor={this.chooseDoor} clicked={this.state.clicked}/>
                    </div>
                    <button onClick={this.props.victory}>Win</button>
                    <button onClick={this.props.defeat}>Lose</button>
                    <button onClick={this.resetDoors}>Reset</button>
                </div>
            );
        }

    }
}

export default Gameboard;