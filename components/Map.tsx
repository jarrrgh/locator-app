"use client"

import React from 'react'
import { GoogleMap, LoadScript, useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
    width: '100vw',
    height: '100vh'
};

const center = {
    lat: 23.609561,
    lng: 18.039166
};

const Map = () => {
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
                        minZoom: 2
                    }}
                    zoom={2}
                    onLoad={(map) => {
                        const bounds = map.getBounds()
                        if (bounds) {
                            map.fitBounds(bounds, 200)
                        }
                    }}
                >

                </GoogleMap>
            </LoadScript>
        </div>
    )
}

export default React.memo(Map)