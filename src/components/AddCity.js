import React, { Component } from 'react';
import { connect } from 'react-redux';

import "bootswatch/journal/bootstrap.css";
import { addCityToList } from '../actions/actions';

class AddCity extends Component{

constructor(props){
  super(props);

  this.state = {
    errorText: "",
    errorClass: ""
  };

  this.onAddPress = this.onAddPress.bind(this);
  this.onEnterPress = this.onEnterPress.bind(this);
  this.onTextChange = this.onTextChange.bind(this);
}

onAddPress(e){
  if(this.refs.cityNameField.value !== ""){
    let addResponse = this.props.addCityToList("name", {name: this.refs.cityNameField.value})

    addResponse.then(res => {
      switch (res) {
        case "added":
          this.refs.cityNameField.value = "";
          this.setState({
            errorText: "",
            errorClass: ""
          })
          break;
        case "notFound":
          this.setState({
            errorText: "City not found",
            errorClass: "has-error"
          })
          break;
        case "alreadyInList":
          this.setState({
            errorText: "The city is already in the list",
            errorClass: "has-error"
          })
          break;
        default:
          this.setState({
            errorText: "",
            errorClass: ""
          })
      }
    })
  }
}

onEnterPress(e){
  if(e.keyCode === 13){ //13 = Enter
    this.onAddPress();
  }
}

onTextChange(e){
  if(this.refs.cityNameField.value === ""){
    this.setState({
      errorText: "",
      errorClass: ""
    })
  }
}

render() {
   let className = "form-group ".concat(this.state.errorClass)
    return(
      <div className={ className }>
        <label className="control-label">Add city</label>
        <div className="input-group">
          <input type="text" className="form-control" ref="cityNameField"
                 title="Enter city name, e.g. London, GB" onKeyDown={ this.onEnterPress } onChange={ this.onTextChange }/>
          <span className="input-group-btn">
          <button className="btn btn-default" type="button" onClick={ this.onAddPress }>Add</button>
          </span>
        </div>
        <label className="control-label" htmlFor="inputError">{this.state.errorText}</label>
      </div>
    );
  }
}

export default connect(null, { addCityToList })(AddCity);
