'use client'
import GMap from '@/app/ui/components/GMap/GMap';
import restaurants from '../../mock/restaurants'
import RestaurantsList from '@/app/ui/components/ResturantsList/RestaurantsList';
import { useState } from 'react';

export default function AllRestaurants() {
    const [centerCoords, setCenterCoords] = useState(null)
    const [selectedRestaurant, setSelectedRestaurant] = useState(null)

    const selectRestaurant = (index) => {        
        const dataID = index
        const thisCoords = restaurants[dataID].latlng
        if(thisCoords) {
            setCenterCoords(thisCoords)
            setSelectedRestaurant(dataID)
        }
    }

    const unselectRestaurant = () => { 
        setSelectedRestaurant(null)
    }

    return (
        <div className="flex h-[calc(100vh-180px)] px-10 gap-10">
            <div className='w-1/2 h-auto'>
                <div className='h-full bg-tailor-gray overflow-hidden rounded-3xl'>
                    <GMap restaurants={restaurants} selectedRestaurant={selectedRestaurant} center={centerCoords}/>
                </div>
            </div>
            <div className='restaurants__list w-1/2 overflow-auto mb-[-62px]'>
                <RestaurantsList restaurants={restaurants} fnMouseEnter={selectRestaurant} fnMouseLeave={unselectRestaurant}/>
            </div>
        </div>
    );
}