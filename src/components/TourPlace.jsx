import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {Thumbnail ,Grid,Col,Image,Button,Row} from 'react-bootstrap';
import '../Styles/home.css'
export default class TourPlace extends Component{
    render(){
        return(

            <Grid>

                <Row className= "show-grid text-center">
                    <Col xs={12} sm={4} className="place">
                    <Thumbnail src="assets/img/places/spain.jpg" alt="242x200">
                        <h3>Spain</h3>
                        <p>Madrid, Barcelona • 9 days Start your Eastern Europe trip from Berlin – one of the most attractive European cities. Head out to Warsaw – the capital of Poland, where you’ll be able to take a guided tour through the city’s places of interests and museums. </p>
                        <p>
                        <Button bsStyle="primary">More</Button>
                        </p>
                    </Thumbnail>                   
                    </Col>

                    <Col xs={12} sm={4} className="place">
                    <Thumbnail src="assets/img/places/england.jpg"  alt="242x200">
                        <h3>United Kingdom</h3>
                        <p>England, Scotland, Wales • 13 days Start your Eastern Europe trip from Berlin – one of the most attractive European cities. Head out to Warsaw – the capital of Poland, where you’ll be able to take a guided tour through the city’s places of interests and museums. </p>
                        <p>
                        <Button bsStyle="primary">More</Button>
                        </p>
                    </Thumbnail>                   
                    </Col>

                    <Col xs={12} sm={4} className="place">
                    <Thumbnail src="assets/img/places/turkey.jpg" alt="242x200">
                        <h3>Turkey</h3>
                        <p>Istanbul, Antalya, Ephesus • 8 days Start your Eastern Europe trip from Berlin – one of the most attractive European cities. Head out to Warsaw – the capital of Poland, where you’ll be able to take a guided tour through the city’s places of interests and museums. </p>
                        <p>
                        <Button bsStyle="primary">More</Button>
                        </p>
                    </Thumbnail>                   
                    </Col>
                </Row>
                       </Grid>
        )}}