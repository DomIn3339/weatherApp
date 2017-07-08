import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchWeatherByCityCoords, fetchWeatherByCityName, setActiveCity, fetchSelectedCity } from '../actions/actions';

import "bootswatch/journal/bootstrap.css";
import { NavItem, Nav} from "react-bootstrap";

class CityList extends Component{
  constructor(props){
    super(props);

    navigator.geolocation.getCurrentPosition((position) => {
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;

        this.props.fetchWeatherByCityCoords(lat, lon);
    }, () => {
      console.log('No geolocation')
    });

    this.props.fetchWeatherByCityName('Odessa, UA');
    this.props.fetchWeatherByCityName('Kiev, UA');
    this.props.fetchWeatherByCityName('Lviv, UA');
  }

  componentWillMount(){

  }

  componentWillReceiveProps(nextProps){
    //console.log('nextProps',nextProps)
  }

  render(){
      const CITIES = this.props.data.cities;

      return (<div>
                <Nav
                  bsStyle="pills"
                  stacked
                  activeKey={this.props.activeCity}
                  onSelect={index => {
                    this.props.fetchSelectedCity(index)
                  }}>
                  {CITIES.map((city, index) =>
                    <NavItem key={index} eventKey={index}>{city.name + ', ' + city.country}</NavItem>
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


export default connect(mapStateToProps, { fetchWeatherByCityCoords, fetchWeatherByCityName, setActiveCity, fetchSelectedCity })(CityList);
