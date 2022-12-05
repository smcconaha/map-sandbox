import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";
import React, {useRef, useState} from "react";
import usZips from 'us-zips';

function Map() {
    let [center, setCenter] = useState({lat: 38.0593, lng: -84.4921});
    const inputRef = useRef(null);
    function  handleClick() {
        let zipInput = inputRef.current.value;
        let longInput = (usZips[zipInput].longitude);
        let latInput = (usZips[zipInput].latitude);
        setCenter({lat: latInput, lng: longInput});
        console.log(`lat: ${latInput}, lng: ${longInput}`)
    }
    return (
    <>
        <div className="input-group mb-3">
        <input ref={inputRef} type="text" id="zipInput" className="form-control" placeholder="Zip Code" aria-label="Enter Zip Code" aria-describedby="button-addon2"/>
        <button onClick={handleClick} className="btn btn-outline-secondary" type="button" id="submitBtn">Search</button>
        </div>
        <GoogleMap zoom = {18} center = {center} mapContainerClassName = 'map-container'>
        <MarkerF position={center} />
        </GoogleMap>
    </>
    ) 
}

export default function Location() {
    const key = process.env.REACT_APP_MAP_API;
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: key
    })
    if (!isLoaded) return <div>Loading</div>
    return <div> <Map /> </div>
}