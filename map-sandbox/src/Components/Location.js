import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api"

const key = process.env.REACT_APP_MAP_API;
const center = {lat: 38.23995, lng: -84.55241};

export default function Location () {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: key
    })
    if (!isLoaded) return <div>Loading You Sum Bitch...</div>
    return <div> <Map /> </div>
}

function Map () {
    return (
    <GoogleMap zoom = {18} center = {center} mapContainerClassName = 'map-container'>
    <MarkerF position={center} />
    </GoogleMap>
    )
}