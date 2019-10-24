import React, {Component} from 'react'
// import "../App.css"
import Door from "./Door";

class Gameboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            doorWinner: Math.floor(Math.random() * 3) + 1,
            myDoor: "",
            clicked: "",
            titleMessage: "",
            wrongDoor: "",
        };
        this.chooseDoor = this.chooseDoor.bind(this);
        this.selectWrongDoor = this.selectWrongDoor.bind(this);
    }

    chooseDoor = (id) => {
        console.log("chooseDoor event fired");
        console.log(id);
        this.setState({myDoor: id, clicked: id, titleMessage: "You have selected Door " + id});
    };

    resetDoors = (e) => {
        this.setState({myDoor: "", clicked: "", doorWinner: Math.floor(Math.random() * 3) + 1,wrongDoor:""});
        this.props.resetScore();
    };

    selectWrongDoor = (e) => {
        var message = setTimeout(() => this.setState({titleMessage: "Let's select Door " + e, wrongDoor: e}), 3000);
        console.log("selectWrongDoor event fired")
    };

    // componentWillUnmount() {
    //     clearInterval(message);
    // }

    render() {
        const doors = [];
        var randomDoor;
        for (var x = 1; x < 4; x++)
            doors.push(x);

        console.log(doors);

        if (this.state.myDoor && !this.state.wrongDoor) {
            console.log("A door was clicked");

            // if (this.state.myDoor == this.state.doorWinner) {
            do {
                randomDoor = doors[Math.floor(Math.random() * 3)];
                console.log(randomDoor);
            }
            while (this.state.doorWinner == randomDoor || this.state.myDoor == randomDoor);
            doors.splice(randomDoor);
            console.log("My door "+ this.state.myDoor);
            console.log(randomDoor);
            this.selectWrongDoor(randomDoor);
            // }

            // else {
            //     for (var i = 0; i < doors.length; i++) {
            //         console.log(this.state.doorWinner);
            //         console.log(doors[i]);
            //         if (doors[i] == this.state.doorWinner) {
            //             randomDoor = doors[i];
            //             doors.splice(i);
            //             this.selectWrongDoor(randomDoor);
            //         }


            return (
                <div className="GameBoard">
                    Gameboard Clicked
                    <h1>{this.state.titleMessage}</h1>
                    <h1>{this.state.doorWinner}</h1>
                    <div className="doorGrid">
                        <Door number={1} myDoor={this.state.myDoor} clicked={this.state.clicked}/>
                        <Door number={2} myDoor={this.state.myDoor} clicked={this.state.clicked}/>
                        <Door number={3} myDoor={this.state.myDoor} clicked={this.state.clicked}/>
                    </div>
                    <button onClick={this.props.victory}>Win</button>
                    <button onClick={this.props.defeat}>Lose</button>
                    <button onClick={this.resetDoors}>Reset</button>
                </div>
            )
        }
        else if (this.state.myDoor) {
            console.log(" elif this.state.door");
            return (
                <div className="GameBoard">
                    Gameboard Clicked
                    <h1>{this.state.titleMessage}</h1>
                    <h1>{this.state.doorWinner}</h1>
                    <div className="doorGrid">
                        <Door number={1} myDoor={this.state.myDoor} clicked={this.state.clicked}/>
                        <Door number={2} myDoor={this.state.myDoor} clicked={this.state.clicked}/>
                        <Door number={3} myDoor={this.state.myDoor} clicked={this.state.clicked}/>
                    </div>
                    <button onClick={this.props.victory}>Win</button>
                    <button onClick={this.props.defeat}>Lose</button>
                    <button onClick={this.resetDoors}>Reset</button>
                </div>

            )
        }
        else {
            return (
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