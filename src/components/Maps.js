import React, { useEffect, useState, useContext } from "react"
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';
import Context from "../Context";

const Maps = (props) => {
    const { lati, lon } = useContext(Context);

    return (
        <Map google={props.google} zoom={14} initialCenter={{
            lat: lati,
            lng: lon
        }}
        >
            <Marker
                title={'Your Location'}
                name={'SOMA'}
                position={{ lat: lati, lng: lon }} />
        </Map >
    )
}

export default GoogleApiWrapper({
    apiKey: ("AIzaSyAlELmqkRobpn26ReMLLTirp7GHsaW8vy0")
})(Maps)