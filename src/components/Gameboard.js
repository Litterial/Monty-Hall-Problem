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
            choices:false,
            playAgain:false,

        };
        this.chooseDoor = this.chooseDoor.bind(this);
        this.selectWrongDoor = this.selectWrongDoor.bind(this);
    }

    chooseDoor = (id) => {
        console.log("chooseDoor event fired");
        console.log(id);
        this.setState({myDoor: id, clicked: id, titleMessage: "You have selected Door " + id});
    };

    anotherRound =(e)=>
    {
        this.setState({myDoor: "", clicked: "", doorWinner: Math.floor(Math.random() * 3) + 1,wrongDoor:"",choices:false,playAgain:false});
    };

    resetDoors = (e) => {
        this.anotherRound();
        this.props.resetScore();
    };

    selectWrongDoor = (e) => {
        var message = this.setState({titleMessage: "Let's select Door " + e, wrongDoor: e});
        this.setState({choices:true});
        console.log("selectWrongDoor event fired")
    };



    reveal =(e)=> {
        console.log(e.target.id);
        if (e.target.id == this.state.doorWinner) {
            this.props.victory();
            this.setState({titleMessage: "You win",choices:false,playAgain:true});
        }
        else{
            this.props.defeat();
            this.setState({titleMessage: "You Lose",choices:false,playAgain:true});

        }

    };

    // componentWillUnmount() {
    //     clearInterval(message);
    // }

    render() {
        var keep;
        var swap;
        var play_again;


        var doors = [1,2,3];
        var randomDoor;

        console.log(doors);
        if (this.state.choices)
        {
            keep=<button id={this.state.myDoor} onClick={this.reveal} >Keep</button>;
            doors.splice(doors.indexOf(parseInt(this.state.myDoor)),1);
            console.log(doors);

            doors.splice(doors.indexOf(parseInt(this.state.wrongDoor)),1);
            console.log(doors);

            swap=<button id={doors[0]} onClick={this.reveal}>Swap</button>;
        }
        if (this.state.playAgain)
            play_again=<button onClick={this.anotherRound}>Play again?</button>;

        if (this.state.myDoor && !this.state.wrongDoor) {
            console.log("A door was clicked");

            // if (this.state.myDoor == this.state.doorWinner) {
            do {
                randomDoor = doors[Math.floor(Math.random() * 3)];
                console.log(randomDoor);
            }
            while (this.state.doorWinner == randomDoor || this.state.myDoor == randomDoor);
            console.log("My door "+ this.state.myDoor);
            console.log(doors);
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
                        <Door number={1} myDoor={this.state.myDoor} clicked={this.state.clicked} wrongDoor={this.state.wrongDoor} />
                        <Door number={2} myDoor={this.state.myDoor} clicked={this.state.clicked} wrongDoor={this.state.wrongDoor} />
                        <Door number={3} myDoor={this.state.myDoor} clicked={this.state.clicked} wrongDoor={this.state.wrongDoor} />
                    </div>
                    <button onClick={this.resetDoors}>Reset</button>
                    {keep}
                    {swap}
                    {play_again}
                </div>

            )
        }
        else {
            return (
                <div className="GameBoard">
                    Gameboard
                    <h1>{this.state.doorWinner}</h1>
                    <h1>Select a door</h1>
                    <div className="doorGrid">
                        <Door number={1} chooseDoor={this.chooseDoor} clicked={this.state.clicked}/>
                        <Door number={2} chooseDoor={this.chooseDoor} clicked={this.state.clicked}/>
                        <Door number={3} chooseDoor={this.chooseDoor} clicked={this.state.clicked}/>
                    </div>
                    <button onClick={this.resetDoors}>Reset</button>
                </div>
            );
        }

    }
}
export default Gameboard;