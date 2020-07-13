import React from "react"
import IndividualReview from "./IndividualReview"
import Context from "../Context"

// import { Col, Row, Form, Container } from "react-bootstrap";

const ReviewArena = () => {


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