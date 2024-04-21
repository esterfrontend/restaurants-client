'use client'
import RestaurantsGrid from '@/app/ui/components/RestaurantsGrid/RestaurantsGrid';
import restaurantService from '@/app/lib/restaurants.service';
import { useState, useEffect } from 'react';
import Response from '@/app/ui/components/Response/Response';

export default function AllRestaurants() {
    const [restaurants, setRestaurants] = useState(null);
    const [error, setError] = useState(null)
    
    useEffect(() => {
        getRestaurants();
    }, []);

    const getRestaurants = async () => {
        try {
            const response = await restaurantService.fetchAllRestaurants();
            setRestaurants(response);
            setError(false)
        } catch (error) {
            setError(true)
        }
    };

    return (
        <>
        { error 
            ? (
                <Response 
                    text='Lo sentimos, ha habido un error al cargar los restaurantes.' 
                />
            ) : ( <>
                { restaurants &&
                    <RestaurantsGrid restaurants={restaurants}/>
                }
            </>)
        }
        </>
    );
}