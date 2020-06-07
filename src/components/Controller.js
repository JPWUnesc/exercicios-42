import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import './Controller.css';

export default class Controller extends Component {

  state = {
    degrees: 28,
    mode: "Ventilar",
    velocity: 1
  }

  constructor(props){
    super(props);
    this.changeVelocity = this.changeVelocity.bind(this);
    this.changeMode = this.changeMode.bind(this);
    this.changeDegrees = this.changeDegrees.bind(this);
    this.changeDegreesUp = this.changeDegreesUp.bind(this);
    this.changeDegreesDown = this.changeDegreesDown.bind(this);
  }

  changeVelocity() {
    
    if(this.state.velocity == 3){
      this.state.velocity = 1;
    }else{
      this.state.velocity += 1;
    }

    let velocity = this.state.velocity;

    this.setState({velocity});
  }

  changeMode() {

    switch(this.state.mode){
      case 'Ventilar':
        this.state.mode = 'Refrigerar'
        break;
      case 'Refrigerar':
        this.state.mode = 'Aquecer'
        break;
      case 'Aquecer':
        this.state.mode = 'Ventilar'
        break;
    }

    let mode = this.state.mode;

    this.setState({mode});

  }

  changeDegreesUp(){
    this.changeDegrees(true)
  }

  changeDegreesDown(){
    this.changeDegrees(false)
  }

  changeDegrees(up) {

    if(up){
      if(this.state.degrees < 28){
        this.state.degrees += 1;
      }
    }else{
      if(this.state.degrees > 16){
        this.state.degrees -= 1;
      }
    }

    let degrees = this.state.degrees;

    this.setState({degrees});

  }

  render() {
    return (
      <Container className='controller'>
        <Row className='screen'>
          <Col>
            <Row className='options'>
              <Col>
                <Row>
                  <div className='options-label'>Modo:</div>	&nbsp; {this.state.mode}
                </Row>
              </Col>
              <Col>
                <Row>
                  <div className='options-label'>Velocidade: </div>	&nbsp; {this.state.velocity}                  
                </Row>
              </Col>
            </Row>
            <Row className='row-degrees'>
    <div className='degrees'>{this.state.degrees}</div><div className='marker-degrees'>°C</div>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col>
            <Row>
              <Button className='all-button' onClick={this.changeMode} >Modo</Button>
            </Row>
          </Col>
          <Col>
            <Row>
              <Button onClick={this.changeVelocity}>Velocidade</Button>
            </Row>
          </Col>
        </Row>
        <Row  className='temp-row'>
          <Col>
            <Row className='temp-inner-row'>
              <Button className='all-button'  onClick={this.changeDegreesDown}>-</Button>
            </Row>
          </Col>
          <Col>
            <Row className='temp-inner-row'>
              <Button className='all-button' onClick={this.changeDegreesUp}>+</Button>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}
