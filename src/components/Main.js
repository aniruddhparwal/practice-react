import React from "react"
// import Maps from "./Maps"
import LocationLoad from "./LocationLoad"
import ReviwArena from "./ReviewArena"
import { Col, Row, Form, Container } from "react-bootstrap";
const App = () => {
    return (
        // <div className="main">
        //     <row>
        //         <div className="maps">
        //             {/* <LocationLoad></LocationLoad> */}

        //         </div>
        //         <div className="col-2 reviewArena">
        //             <ReviwArena></ReviwArena>
        //         </div>
        //         {/* </div> */}
        //     </row>
        // </div>
        <Container className="main">
            <Row>
                <Col xs={12} md={8}>
                    <LocationLoad></LocationLoad>
                </Col>
                <Col xs={12} md={4}>
                    <ReviwArena></ReviwArena>
                </Col>
            </Row>
        </Container>

    );
};

export default App;