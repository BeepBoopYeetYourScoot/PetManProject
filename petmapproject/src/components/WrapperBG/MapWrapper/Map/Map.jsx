import {
    GoogleMap,
    withScriptjs,
    withGoogleMap,
    InfoWindow,
    Marker,
    // useLoadScript
} from 'react-google-maps'
import { useState, useCallback, useRef } from 'react'

import mapStyles from '../../../../mapStyles'

// const libraries = ['places']

const mapContainerStyle = {
    width: '100%',
    height: '100%'
}

const mapCenter = {
    lat: 55.784199,
    lng: 49.118984
}

const options = {
    styles: mapStyles,
    disableDefaultUI: true,
    zoomControl: true,
}


function Map() {

    const [markers, setMarkers] = useState([]);
    const onMapClick = useCallback(
        (event) => {
            setMarkers(current => [...current, {
                lat: event.latLng.lat(),
                lng: event.latLng.lng()
            }])
        }, [])
    const [selected, setSelected] = useState(null)
    const mapRef = useRef()
    const onMapLoad = useCallback((map) => {
        mapRef.current = map
    }, [])

    // const { isLoaded, loadError } = useLoadScript({
    //     googleMapApiKey: 'AIzaSyALEAjyQhPIlN1Qd7UQN6_rVen2f-tBUSo',
    //     libraries
    // });

    // if (loadError) return 'Error loading maps'
    // if (!isLoaded) return 'Loading maps'

    // const [selectedPlace, setSelectedPlace] = useState(null);
    return (
        <GoogleMap mapContainerStyle={mapContainerStyle}
            zoom={13}
            center={mapCenter}
            options={options}
            onClick={onMapClick}
            onLoad={onMapLoad}
        >
            {markers.map((marker) => (
                <Marker
                    position={{ lat: marker.lat, lng: marker.lng }}
                    icon={{
                        url: '/map_icon.png',
                        scaledSize: new window.google.maps.Size(50, 50),
                        origin: new window.google.maps.Point(0, 0),
                        anchor: new window.google.maps.Point(25, 25)
                    }}

                    onClick={() => {
                        setSelected(marker);
                    }}
                />))}

            {selected ? (
                <InfoWindow
                    position={{ lat: selected.lat, lng: selected.lng }}
                    onCloseClick={() => {
                        setSelected(null)
                    }}>
                    <div>
                        <h2>Хачю сюда</h2>
                        <p>Описание места</p>
                    </div>
                </InfoWindow>) : null}
        </GoogleMap >

    );
}

export const WrappedMap = withScriptjs(withGoogleMap(Map))
