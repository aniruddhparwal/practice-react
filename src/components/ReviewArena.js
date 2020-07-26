import React, { useEffect, useState, useContext } from "react"
import IndividualReview from "./IndividualReview"
import Context from "../Context"
import axios from "axios";
import Rating from '@material-ui/lab/Rating';



// import { Col, Row, Form, Container } from "react-bootstrap";

const ReviewArena = () => {

    const { lati, lon, setError } = useContext(Context);
    const [restresult, setRestresult] = useState();
    const [value, setValue] = useState(2);

    const [restView, setRestView] = useState();
    let restList = []

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
            // setRestList(response.data.results)
            console.log("chack restlisty", restList)
            setRestresult(restList)
            setRestView(restList)
            console.log("Result restresut", restList)
        }
    }, []);

    const listUpdate = (newValue) => {
        console.log("listUpdate")
        console.log("listssUU", restList, newValue)

        setRestView(restresult.filter(details => newValue >= details.rating))

        // restList = (restresult.filter(details => details.rating <= value))
        console.log("listView", restView)
    }

    return (
        <div>
            <Context.Provider
                value={{
                    restresult: restresult,
                    restView: restView
                }}
            >
                <div className="row arenaTitle">
                    <h1>ReviewArena</h1>
                </div>
                <div>
                    <Rating
                        name="simple-controlled"
                        value={value}
                        onChange={(event, newValue) => {
                            if (newValue != null) {
                                console.log("New Value", newValue)
                                setValue(newValue);
                                listUpdate(newValue);
                            }
                        }}
                    />
                    {value}
                </div>
                <div className="row arenaReview" style={{ display: "grid" }}>
                    {restView && restView.map(details => (<IndividualReview icon={details.icon} name={details.name} rating={details.rating} />))}
                </div>
            </Context.Provider>
        </div>
        // <h1>ss</h1>
    )
}

export default ReviewArena