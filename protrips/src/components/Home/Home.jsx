import React from 'react';
import './Home.css'

class Home extends React.Component{    //this component display the total number of trip and number of club,trek,tropic trip
    render=()=>{
        return(<div className="home">
        <div>{this.props.details[0]}<b className="not_bold">trips</b></div>
        <div className="trek_details">
            <div>{this.props.details[1]}<b className="not_bold">treks</b></div>
            <div>{this.props.details[2]}<b className="not_bold">club</b></div>
            <div>{this.props.details[3]}<b className="not_bold">tropics</b></div>
        </div>
        </div>)
    }
}
export default Home