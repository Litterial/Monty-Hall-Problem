import React,{Component} from 'react'
import "../App.css"

class Door extends Component{
    constructor(props) {
        super(props);

    }

    clicked=(e)=>
    {
        this.props.chooseDoor(e.target.id);

    };

    render() {


        if(this.props.clicked==this.props.number)
        {
            return(
            <div id={this.props.number}>I was clicked</div>);
        }


        else if (this.props.myDoor)
        {
            return(
                <div id={this.props.number} className="Door">
                  {this.props.number}
                </div>);
        }

        else

        {
            return(
                <div  onClick={this.clicked} id={this.props.number} className="Door">
                    {this.props.number}
                </div>);
        }

    }
}
export default Door;