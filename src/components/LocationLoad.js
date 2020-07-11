import React, { Component, useEffect, useState } from "react"
import Context from "../Context"
import Maps from "./Maps"

const LocationLoad = () => {

    const [lati, setLati] = useState(0);
    const [lon, setLon] = useState();
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
        <div className="locationLoad">
            <Context.Provider
                value={{
                    lati: lati,
                    lon: lon,
                }}
            ></Context.Provider>
            <Maps></Maps>
        </div>
    )
}

export default LocationLoad