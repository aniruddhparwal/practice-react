// import React from "react"
import React, { useEffect, useState, useContext } from "react"
import Context from "../Context";

// import { Col, Row, Form, Container } from "react-bootstrap";

const IndividualReview = () => {
    const { lati, lon, restresult } = useContext(Context);
    console.log("ddd", restresult)
    return (
        <div className="IndividualReview">
            <div className="row">
                <div className="col col-2">
                    <div className="placePhoto">
                        <img src="https://via.placeholder.com/100" alt="Rest Pic" />
                    </div>
                </div>
                <div className="col col-10 details">
                    <div className="row placeTitle">Test 1</div>
                    <div className="row placeRating"></div>
                </div>
            </div>
        </div>
        // <h1>ss</h1>
    )
}

export default IndividualReview