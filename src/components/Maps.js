import React, { useEffect, useState, useContext } from "react"
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';
import Context from "../Context";

const Maps = (props) => {
    // const { lati, lon } = useContext(Context);
    const { lati, lon, restresult } = useContext(Context);


    const displayMarkers = () => {
        return restresult.map(details => {
            return <Marker position={{
                lat: details.geometry.location.lat,
                lng: details.geometry.location.lng
            }}
            // onClick={() => console.log("You clicked me!")} />
            />
        })
    }

    return (
        <Map google={props.google} zoom={14} initialCenter={{
            lat: lati,
            lng: lon
        }}
        >
            <Marker
                title={'Your Location'}
                name={'Live Location'}
                position={{ lat: lati, lng: lon }} />
            {/* <Marker
                title={'Your Location'}
                name={'Live Location'}
                position={{ lat: lati + 10, lng: lon + 10 }} /> */}

            {/* {displayMarkers()} */}

            {/* {restresult && restresult.map(details => (
                <Marker
                    title={'Your Location'}
                    name={details.name}
                    position={{
                        lat: details.geometry.location.lat, lng: details.geometry.location.lng
                    }}
                />

            ))} */}

        </Map >
    )
}

export default GoogleApiWrapper({
    apiKey: ("AIzaSyAlELmqkRobpn26ReMLLTirp7GHsaW8vy0")
})(Maps)