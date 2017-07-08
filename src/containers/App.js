import React, { Component } from 'react';
import { connect } from 'react-redux';
import CityList from '../components/CityList';
import WeatherInfo from '../components/WeatherInfo';

import "bootswatch/journal/bootstrap.css";
import { Navbar, Grid, Row, Col } from "react-bootstrap";

class App extends Component{
  render(){
    return (<div>
              <Navbar>
                <Navbar.Header>
                  <Navbar.Brand>
                    React Simple Weather App
                  </Navbar.Brand>
                </Navbar.Header>
              </Navbar>
              <Grid>
                <Row>
                  <Col md={4} sm={4}>
                    <h3>Select a city</h3>
                    <CityList />
                  </Col>
                  <Col md={8} sm={8}>
                    <WeatherInfo />
                  </Col>
                </Row>
              </Grid>
           </div>);
  }
}

export default connect(null, { })(App);
