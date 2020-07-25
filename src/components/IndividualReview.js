// import React from "react"
import React, { useEffect, useState, useContext } from "react"
import Context from "../Context";
import Rating from '@material-ui/lab/Rating';

// import { Col, Row, Form, Container } from "react-bootstrap";

const IndividualReview = ({ name, icon, rating }) => {
    const { lati, lon, restresult } = useContext(Context);
    console.log("ddd", restresult)

    return (
        <div className="IndividualReview">
            <div className="row">
                <div className="col col-2">
                    <div className="placePhoto">
                        {/* <img src="https://via.placeholder.com/100" alt="Rest Pic" /> */}
                        <img src={icon} alt="Rest Pic" />
                    </div>
                </div>
                <div className="col col-10 details">
                    <div className="row placeTitle">{name}</div>
                    <div className="row placeRating">
                        <Rating name="half-rating" defaultValue={rating} precision={0.5} />
                    </div>
                </div>
            </div>
        </div>
        // <h1>ss</h1>
    )
}

export default IndividualReview