import React,{Component} from 'react'
import "../App.css"

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
        this.props.chooseDoor(e.target.id);

    };

    goat=(e)=>
    {
        setTimeout(()=>this.setState({goat:"This is a goat"}),2000);
    };
    render() {

            var goat=
                <div className="Door">{this.props.number}</div>;
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
                    {goat}
                </div>
            )
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