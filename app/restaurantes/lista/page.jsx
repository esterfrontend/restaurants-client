'use client'
import GMap from '@/app/ui/components/GMap/GMap';
import RestaurantsList from '@/app/ui/components/ResturantsList/RestaurantsList';
import { useState } from 'react';
import { useEffect } from 'react';
import { fetchAllRestaurants } from '@/app/lib/restaurants.service';
import Response from '@/app/ui/components/Response/Response';

export default function AllRestaurants() {
    const [restaurants, setRestaurants] = useState(null);
    const [error, setError] = useState(null)

    useEffect(() => {
        getRestaurants();
    }, []);

    const getRestaurants = async () => {
        try {
            const response = await fetchAllRestaurants();
            setRestaurants(response);
            setError(false)
        } catch (error) {
            setError(true)
        }
    };

    const [centerCoords, setCenterCoords] = useState(null)
    const [selectedRestaurant, setSelectedRestaurant] = useState(null)

    const selectRestaurant = (restaurantId) => {
        const restaurant = restaurants.find((restaurant) => {
            return restaurant._id === restaurantId
        })

        const thisCoords = restaurant.latlng
        if (thisCoords) {
            setCenterCoords(thisCoords)
            setSelectedRestaurant(restaurantId)
        }
    }

    const unselectRestaurant = () => {
        setSelectedRestaurant(null)
    }

    return (
        <>
            { error ? 
                <Response 
                    text='Lo sentimos, ha habido un error al cargar los restaurantes.' 
                />
            : (
                <div className="flex h-[calc(100vh-180px)] px-10 gap-10">
                    <div className='w-1/2 h-auto'>
                        <div className='h-full bg-tailor-gray overflow-hidden rounded-3xl'>
                            <GMap restaurants={restaurants} selectedRestaurant={selectedRestaurant} center={centerCoords} />
                        </div>
                    </div>
                    <div className='restaurants__list w-1/2 overflow-auto mb-[-62px]'>
                        { restaurants ? (
                            <RestaurantsList restaurants={restaurants} fnMouseEnter={selectRestaurant} fnMouseLeave={unselectRestaurant} />
                        ) : (
                            <p>Cargando los restaurantes...</p>
                        )}
                    </div>
                </div>
            )}
        </>
    );
}