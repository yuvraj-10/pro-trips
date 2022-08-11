import React, { Component } from 'react';
import './List.css'

class List extends Component{
    constructor(props){
        super(props);
        this.state={value:this.props.form_detail,initial:this.props.form_detail}//setting form_detail state object from props and store it in child state,
                                                                                //value hold filter values and initil hold the inial values got from props        
    }
    componentWillReceiveProps(nextProps) {
        this.setState({value:nextProps})
    }
    click=(e)=>{
        let new_value=this.state.initial
        if(e.target.value==="All"){
            this.setState({value:new_value})
        }
        else{
        const list=this.state.initial.filter(val=>{return(val[2]===e.target.value)})
        this.setState({value:list})
        }
    }
    render(){
        return(<div className="contain">
            <div>All Trips</div>
            <div className="details">
                <div>Date<div className="line"></div></div>
                <div>Place<div className="line"></div></div>
                <div>Type<div className="line"></div></div>
            </div>
              {this.state.value.map(val=>(
                  <div className="user_selection">
                      <div>{val[0]}</div>
                      <div>{val[1]}</div>
                      <div>{val[2]}</div>
                  </div>
              ))}
              <div className="filter">
              <div>Filter By : </div>
              <input type="radio" onClick={this.click} value="All" name = "hey"></input>All
              <input type="radio" onClick={this.click} value="Trek"  name = "hey"></input>Trek
              <input type="radio" onClick={this.click} value="Club" name = "hey"></input>Club
              <input type="radio" onClick={this.click} value="Tropic" name = "hey"></input>Tropic
              </div>
        </div>)
    }
}
export default List;