import React, { useEffect, useState, useContext } from "react"
import IndividualReview from "./IndividualReview"
import Context from "../Context"
import axios from "axios";


// import { Col, Row, Form, Container } from "react-bootstrap";

const ReviewArena = () => {

    // let service = new window.google.maps.places.PlacesService();
    // service.getDetails(
    //     { placeId: this.match.params.place_id },
    //     // (place, status) => {
    //     //     const latLng = String(place.geometry.location)
    //     //         .replace(" ", "")
    //     //         .replace("(", "")
    //     //         .replace(")", "")
    //     //         .split(",");
    //     //     // console.log("latLng", latLng);
    //     //     this.setState({
    //     //         location: latLng,
    //     //         place,
    //     //         reviews: place.reviews
    //     //     });
    //     // }
    // );

    const { lati, lon, setError } = useContext(Context);
    const [restresult, setRestresult] = useState();
    var restList = []

    // let restresult = null;'
    // let response = ''
    // let setFlag = true


    useEffect(async () => {
        console.log("apicalllati", lati)
        console.log("apicalllon", lon)
        // const restList = ''
        // const API_KEY = "c648acd3649fb8a0ce09c3ff9a096d4a";
        // const url = `https://maps.googleapis.com/maps/api/place/details/json?location=${lati},${lon}&fields=name,rating &key=AIzaSyAlELmqkRobpn26ReMLLTirp7GHsaW8vy0`;
        const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lati},${lon}&radius=1500&type=restaurant&key=AIzaSyAlELmqkRobpn26ReMLLTirp7GHsaW8vy0`
        // const url = `${"https://cors-anywhere.herokuapp.com/"}https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lati},${lon}&radius=1500&type=restaurant&key=AIzaSyAlELmqkRobpn26ReMLLTirp7GHsaW8vy0`;
        const request = await axios.get(url).catch((error) => {
            console.log("erre", error)
        });
        const response = request;
        if (response && response.status !== 200) {
            setError("Error fetching weather information");
        }
        if (response) {
            console.log("Reesponse recived", response)
            console.log("Result Array", response.data.results)
            restList = response.data.results
            setRestresult(restList)
            console.log("Result restresut", restList)
        }
    }, []);

    return (
        <div>
            <Context.Provider
                value={{
                    restresult: restresult
                }}
            >
                <div className="row arenaTitle">
                    <h1>ReviewArena</h1>
                </div>
                <hr></hr>
                <div className="row arenaReview">
                    {/* {restresult.map(name => (<p>name</p>))} */}
                    {/* aaa */}
                    {restresult && <IndividualReview />}
                </div>
            </Context.Provider>
        </div>
        // <h1>ss</h1>
    )
}

export default ReviewArena