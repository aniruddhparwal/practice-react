import React, { Component, useEffect, useState } from "react"
import Context from "../Context"
import Maps from "./Maps"
import ReviewArena from "./ReviewArena"
import { Col, Row, Form, Container, Collapse } from "react-bootstrap";

const App = () => {
    const [lati, setLati] = useState();
    const [lon, setLon] = useState();
    const [error, setError] = useState();

    useEffect(() => {
        if ("geolocation" in navigator) {
            console.log("Available");
        } else {
            console.log("Not Available");
        }
        navigator.geolocation.getCurrentPosition(function (position) {
            console.log("Latitude is :", position.coords.latitude);
            setLati(position.coords.latitude)
            // console.log("lat value:", lat)
            console.log("Longitude is :", position.coords.longitude);
            setLon(position.coords.longitude)
        });
        console.log("Main component rendered");
    }, []);
    return (

        // <Container >
        <div className="container-fluid">
            <Context.Provider
                value={{
                    lati: lati,
                    lon: lon,
                    error: error
                }}
            >
                {/* <Row>
                    <Col className="maps">
                        <Maps></Maps>
                    </Col>
                    <Col className="reviewArena">
                        <ReviewArena></ReviewArena>
                        dd
                    </Col>
                </Row> */}

                {/* <Row> */}
                <div className="row">
                    <div className="col col-sm-12 col-lg-8 maps">
                        <Maps></Maps>
                    </div>
                    <div className="col col-sm-12 col-lg-4 reviewArena">
                        <ReviewArena></ReviewArena>
                    </div>
                </div>
                {/* </Row> */}
            </Context.Provider>
            {/* </Container> */}
        </div>
    );
};

export default App;