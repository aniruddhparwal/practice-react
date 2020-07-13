import React, { Component, useEffect, useState, useContext } from "react"
import IndividualReview from "./IndividualReview"
import Context from "../Context"
import axios from "axios";


// import { Col, Row, Form, Container } from "react-bootstrap";

const ReviewArena = () => {
    const { lati, lon, setError } = useContext(Context);

    const apiCall = async () => {
        // prevent refresh when form is submitted
        // e.preventDefault();


        const API_KEY = "c648acd3649fb8a0ce09c3ff9a096d4a";
        const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lati},${lon}&radius=1500&type=food&key=AIzaSyAlELmqkRobpn26ReMLLTirp7GHsaW8vy0`;
        const request = axios.get(url).catch((error) => {
            // setError("Error fetching weather information");
            console.log("erre", error)
            // return setWeather(null);
        });
        const response = await request;
        console.log(response);
        if (response && response.status !== 200) {
            setError("Error fetching weather information");
            // return setWeather(null);
        }
        if (response) {
            // setWeather(response.data.main);
            // setCity(response.data.name);
            setError(null);
        }
    };



    apiCall()


    return (
        <div>
            <div className="row arenaTitle">
                <h1>ReviewArena</h1>
            </div>
            <hr></hr>
            <div className="row arenaReview">
                <IndividualReview></IndividualReview>
            </div>
        </div>
        // <h1>ss</h1>
    )
}

export default ReviewArena