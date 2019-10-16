import React,{Component} from 'react'
import "../App.css"

class Door extends Component{
    render() {

        return(
            <div>
                {this.props.number}
            </div>
        )
    }
}
export default Door;