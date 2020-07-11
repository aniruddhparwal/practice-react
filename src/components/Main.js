import React from "react"
// import Maps from "./Maps"
import LocationLoad from "./LocationLoad"
import ReviwArena from "./ReviewArena"
const App = () => {
    return (
        <div className="container main">
            <div className="row">
                <div className="col maps">
                    <LocationLoad></LocationLoad>
                </div>
                <div className="col reviewArena">
                    <ReviwArena></ReviwArena>
                </div>
            </div>
        </div>

    );
};

export default App;