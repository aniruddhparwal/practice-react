import React, { Component, useEffect, useState, useContext } from "react"
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import Context from "../Context";





// export class Maps extends Component {
//     render() {
//         return (
//             <Map google={this.props.google} zoom={14} initialCenter={{
//                 lat: 40.854885,
//                 lng: -88.081807
//             }}>

//                 <Marker onClick={this.onMarkerClick}
//                     name={'Current location'} />

//                 <InfoWindow onClose={this.onInfoWindowClose}>
//                     <div>
//                         {/* <h1>{this.state.selectedPlace.name}</h1> */}
//                     </div>
//                 </InfoWindow>
//             </Map>
//         );
//     }
// }



const Maps = (props) => {
    const { lati } = useContext(Context);

    useEffect(() => {
        //apiCall();
        console.log("Maps component rendered");
    }, []);
    // setLat("40.854885");


    return (
        <Map google={props.google} zoom={14} initialCenter={{
            lat: "40.854885",
            lng: "-88.081855"
        }}>

            <Marker
                title={'Your Location'}
                name={'SOMA'}
                position={{ lat: 40.854885, lng: -88.081807 }} />


        </Map >
    )
}

export default GoogleApiWrapper({
    apiKey: ("AIzaSyAlELmqkRobpn26ReMLLTirp7GHsaW8vy0")
})(Maps)