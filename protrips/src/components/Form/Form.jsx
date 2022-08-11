import React from 'react';
import './Form.css';

class Form extends React.Component{
    submitting=(e)=>{
    let lists=[];//hold details of the filled form ie(date,place,type of trip) and it push into parent component state object details
    
    const regex_place=/^[a-zA-Z]+$/ //checking the value of place input
      if(document.getElementById("dates").value===""){
          alert("Fill the Date field")
      }
      else if(document.getElementById("place").value==="" || (!regex_place.test(document.getElementById("place").value))){ 
        alert("Fill out the Place and Place shouldn't contain digit")
      }
      lists.push(document.getElementById("dates").value) //pushing all the inputed values into list array
      lists.push(document.getElementById("place").value)
      lists.push(document.getElementById("type").value);

      let new_list=this.props.form_detail; //it hold form_detail state object array and in this array we are pushing the list 
      new_list.push(lists)

      let array=this.props.details;//geting the details array from parent component and store in a variable
      array[0]+=1;
      if(document.getElementById("type").value==="Trek"){
          array[1]+=1;
      }
      else if(document.getElementById("type").value==="Club"){
          array[2]+=1;
      }
      else if(document.getElementById("type").value==="Tropic"){
          array[3]+=1
      }
      //makes all the neccessary changes and call the handle method to update the changes in parent state
      this.props.handle(array,new_list)
      alert("Trip Added")
      e.preventDefault();
    }
    render(){
        console.log(this.props.form_detail)
        return(<div className="form">
            <div>Add a Trip</div>
            <form id="forms" onSubmit={this.submitting}>
                <div>Date</div>
                <input type="date" id="dates"></input>
                <div>Place</div>
                <input type="text" id="place"></input>
                <div>Type</div>
                <select name="type" id="type">
                    <option value="Trek">Trek</option>
                    <option value="Club">Club</option>
                    <option value="Tropic">Tropic</option>
                </select>
                <button type="submit">Submit</button>
            </form>
        </div>)
    }
}
export default Form