'use client'
import RestaurantsGrid from '@/app/ui/components/RestaurantsGrid/RestaurantsGrid';
import { useAuthContext } from "@/app/context/AuthContext";
import userService from '../lib/user.service';
import { useEffect, useState } from 'react';

export default function AllRestaurants() {
    const { user } = useAuthContext();

    const [favouriteRestaurants, setFavouriteRestaurants] = useState(null);
    
    useEffect(() => {
        getRestaurants();
    }, [user]);

    const getRestaurants = async () => {
        try {
            const response = await userService.fetchGetFavouriteRestaurants();
            setFavouriteRestaurants(response);
        } catch (error) {
            console.log(error)
        }
    };

    return (
        <>
        { user &&
            <>
                <div className='px-5 lg:px-10 mb-14'>
                    <h1 className='text-2xl lg:text-4xl font-semibold text-center mb-8'>Bienvenido {user.username}</h1>
                    <div className='border rounded-3xl p-10'>
                        <p><strong>Nombre de usuario:</strong> {user.username}</p>
                        <p><strong>Email:</strong> {user.email}</p>
                    </div>
                </div>

                { favouriteRestaurants &&
                    <div>
                        <h2 className='text-xl lg:text-2xl font-semibold text-center px-5 lg:px-10 mb-6'>Tus restaurantes favoritos</h2>
                        <RestaurantsGrid restaurants={favouriteRestaurants}/>
                    </div>
                }
            </>
        }
           
        </>
    );
}