import React,{Component} from 'react'
import "../App.css"

class Door extends Component{
    constructor(props) {
        super(props);
    }

    clicked=(e)=>
    {

        this.props.chooseDoor(this.props.number);


    };

    goat=(e)=>
    {
        this.props.goatFunction();
    };
    render() {

            var goat=<div  className="curtainContainer" id={this.props.number}>
                        <div  className="Door">{this.props.number}</div>
                        <div className="curtain curtain-float curtain-raise">Lraise</div>
                        <div className="curtain curtain-float curtain-raise">R</div>
                </div>;
            if(this.props.goat)
                goat = this.props.goat;


            if(this.props.clicked==this.props.number)
        {
            return(
            <div id={this.props.number}>I was clicked</div>);
        }


        else if (this.props.number==this.props.wrongDoor)
        {

            if(!this.props.goat)
            {
                this.goat();
            }
            return(
                <div>
                    Hello
                    {goat}
                </div>
            )
        }

        else if (this.props.myDoor)
        {
            return(
                <div  className="curtainContainer" id={this.props.number}>
                    <div className="Door">{this.props.number}</div>
                    <div className="curtain curtain-float">Le</div>
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