import { APIProvider, Map, AdvancedMarker } from '@vis.gl/react-google-maps';
import React, { useEffect, useState } from 'react';
import CustomMarker from '../CustomMarker/CustomMarker';

const apiKey = process.env.NEXT_PUBLIC_GOOGLEMAPS_APIKEY
const mapId = process.env.NEXT_PUBLIC_GOOGLEMAPS_MAPID

export default function GMap ({restaurants, selectedRestaurant, center}) {
    const initialPosition = restaurants[0].latlng
    let [currentPosition, setCurrentPosition] = useState(initialPosition);
    const [restaurantSelected, setRestaurantSelected] = useState(null);

    useEffect(() => {
        if(center) {
            setCurrentPosition(center)
            setRestaurantSelected(selectedRestaurant)
        } else {
            setCurrentPosition(initialPosition)
        }
    }, [center, selectedRestaurant]);

    return (
        <>
        <APIProvider apiKey={apiKey}>
            <Map defaultCenter={ initialPosition } center={currentPosition} defaultZoom={14} mapId={mapId}>
                {
                    restaurants.map((restaurant, index) => {
                        return (
                            <React.Fragment key={index}>
                                <AdvancedMarker position={restaurant.latlng} >
                                    <CustomMarker id={`restaurant-${index}`} fill={ restaurantSelected === index ? 'tailor-blue' : 'tailor-purple'} />
                                </AdvancedMarker>
                            </React.Fragment>
                        )
                    })
                }
            </Map>
        </APIProvider>
        </>
    )
}
