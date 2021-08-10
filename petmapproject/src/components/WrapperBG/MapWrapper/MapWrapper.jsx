import m from './MapWrapper.module.css'
import { WrappedMap } from './Map/Map'
import { Search } from './Map/Search'


export const MapWrapper = (props) => {
    const URL = 'https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyALEAjyQhPIlN1Qd7UQN6_rVen2f-tBUSo&libraries=places&callback=initMap'
    return (
        <div className={m.MapWrapper}>
            <div style={{ width: '100%', height: '100%' }}>
                {/* <Search /> */}
                <WrappedMap
                    googleMapURL={URL}
                    loadingElement={<div style={{ height: '100%' }} />}
                    containerElement={<div style={{ height: '100%' }} />}
                    mapElement={<div style={{ height: '100%' }} />}

                />
            </div>
        </div>
    )
}
