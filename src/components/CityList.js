import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSelectedCity, addCityToList, removeCityFromList, fetchWeather, clearWeather } from '../actions/actions';

import "bootswatch/journal/bootstrap.css";
import { Col, NavItem, Nav} from "react-bootstrap";

class CityList extends Component{
  constructor(props){
    super(props);
    navigator.geolocation.getCurrentPosition((position) => {
          let latitude = position.coords.latitude;
          let longitude = position.coords.longitude;

          this.props.addCityToList('coords', {lat: latitude, lon: longitude });
    },
    () => {
          console.log('No geolocation')
        }
    );

    this.onRemoveClick = this.onRemoveClick.bind(this);
    this.onSelectCity = this.onSelectCity.bind(this);
  }

  onRemoveClick(e){
    let active = "" + this.props.data.cities[this.props.data.activeCity].id;
    if(e.target.value === active){
      this.props.clearWeather()
      this.props.fetchSelectedCity(0);
    }

    this.props.removeCityFromList(e.target.value)

    e.stopPropagation();
  }

  onSelectCity(index){
      this.props.fetchSelectedCity(index);
      this.props.fetchWeather(this.props.data.cities[index].id)
  }

  render(){
      const CITIES = this.props.data.cities;

      return (<div>
                <Nav
                  bsStyle="pills"
                  stacked
                  activeKey={ this.props.activeCity }
                  onSelect={ index => { this.onSelectCity(index) }}>
                  {CITIES.map((city, index) =>
                    <NavItem key={index} eventKey={index}>
                    <Col sm={10}>{city.name + ', ' + city.country + '    '}</Col>
                    <button className="btn btn-primary btn-xs" type="button" value={ city.id }
                        onClick={ this.onRemoveClick }>✖</button>
                    </NavItem>
                  )}
                </Nav>
              </div>)
    };
}

function mapStateToProps(state){
  return{
    data: state.cityReducer
  }
}


export default connect(mapStateToProps, { fetchSelectedCity, addCityToList, removeCityFromList, fetchWeather, clearWeather })(CityList);
