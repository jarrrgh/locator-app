"use client"

import React from 'react'
import { GoogleMap, LoadScript, Marker, Polyline } from '@react-google-maps/api';
import { ActionTypes, useDispatchLocations, useLocations } from '@/context/LocationContext';
import { LocationData } from '@/types';

const containerStyle = {
    width: '100vw',
    height: '100vh',
};

const center = {
    lat: -10.0,
    lng: 18.0
};

const Map = () => {
    const { myLocation, locations } = useLocations()
    const dispatch = useDispatchLocations()

    const onLoad = React.useCallback((map: google.maps.Map) => {
        fetch("https://aseevia.github.io/star-wars-frontend/data/secret.json")
            .then(res => res.json())
            .then(secret => atob(secret.message))
            .then(str => JSON.parse(str))
            .then(data => dispatch({
                type: ActionTypes.SET_LOCATIONS,
                payload: data
            }))
            .catch(console.error)
    }, [dispatch])

    const onClick = React.useCallback((e: google.maps.MapMouseEvent) => {
        const latLng = e.latLng;

        if (latLng) {
            const location: LocationData = { id: -1, lat: latLng.lat(), long: latLng.lng() }
            dispatch({
                type: ActionTypes.SET_MY_LOCATION,
                payload: location
            })
            dispatch({
                type: ActionTypes.REFRESH_DISTANCES,
                payload: null
            })
        }
    }, [dispatch])

    return (
        <div className="overflow-hidden mix-blend-screen">
            <LoadScript
                googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ''}
                mapIds={['cd985146a568cfa3']}
            >
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={center}
                    options={{
                        mapId: 'cd985146a568cfa3',
                        disableDefaultUI: true,
                        minZoom: 2,
                        restriction: {
                            latLngBounds: {
                                north: 85,
                                south: -85,
                                west: -180,
                                east: 180
                            }
                        },
                    }}
                    zoom={2}
                    onLoad={onLoad}
                    onClick={onClick}
                >
                    {myLocation && locations.length > 0
                        ? locations.map((location) =>
                            <Polyline
                                key={`polyline-${location.id}`}
                                path={[
                                    new google.maps.LatLng(myLocation.lat, myLocation.long),
                                    new google.maps.LatLng(location.lat, location.long)
                                ]}
                                options={{
                                    strokeColor: "#ffffff",
                                    strokeOpacity: 0.05,
                                    strokeWeight: 1,
                                    clickable: false,
                                }}
                            />
                        ) : null}
                    {myLocation
                        ? <Marker
                            icon={{
                                url: "/my-location.svg",
                                scaledSize: new google.maps.Size(0.25 * 92.53, 0.25 * 122.88)
                            }}
                            position={new google.maps.LatLng(myLocation.lat, myLocation.long)}
                        /> : null}
                    {locations.length > 0
                        ? locations.map((location) =>
                            <Marker
                                key={`marker-${location.id}`}
                                icon={{
                                    url: "/target.svg",
                                    scaledSize: new google.maps.Size(0.3 * 92.53, 0.3 * 122.88),
                                    anchor: new google.maps.Point(13.9, 18.4),
                                }}
                                position={new google.maps.LatLng(location.lat, location.long)}
                            />
                        ) : null}
                </GoogleMap>
            </LoadScript>
        </div>
    )
}

export default React.memo(Map)