import React,{Component} from 'react'
import "../App.css"
import {CSSTransition} from "react-transition-group";

class Door extends Component{
    constructor(props) {
        super(props);
        this.state={
            goat:""
        };

        this.goat=this.goat.bind(this);

    }

    clicked=(e)=>
    {

        this.props.chooseDoor(this.props.number);


    };

    goat=(e)=>
    {
        setTimeout(()=>this.setState({goat:"This is a goat"}),15000);
    };
    render() {

            var goat=
                <div  key ={this.props.number} className="curtainContainer" id={this.props.number}>
                        <div  className="Door">{this.props.number}</div>
                        <div className="curtain curtain-float curtain-raise">L</div>
                        <div className="curtain curtain-float curtain-raise">R</div>
                </div>;
            if(this.state.goat)
                goat = this.state.goat;


            if(this.props.clicked==this.props.number)
        {
            return(
            <div id={this.props.number}>I was clicked</div>);
        }


        else if (this.props.number==this.props.wrongDoor)
        {

            if(!this.state.goat)
            {
                this.goat();
            }
            return(
                <div>
                    goat
                    {goat}
                </div>
            )
        }

        else if (this.props.myDoor)
        {
            return(
                <div  className="curtainContainer" id={this.props.number}>
                    <div className="Door">{this.props.number}</div>
                    <div className="curtain curtain-float">L</div>
                    <div className="curtain curtain-float">R</div>
                </div>);
        }

        else

        {
            return(
                <div  className="curtainContainer" onClick={this.clicked} id={this.props.number}>
                    <div  className="Door">{this.props.number}</div>
                    <div className="curtain curtain-float">L</div>
                    <div className="curtain curtain-float">R</div>
                </div>);
        }

    }
}
export default Door;