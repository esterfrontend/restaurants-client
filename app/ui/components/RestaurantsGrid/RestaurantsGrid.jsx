'use client'
import userService from '@/app/lib/user.service';
import GMap from '@/app/ui/components/GMap/GMap';
import RestaurantsList from '@/app/ui/components/ResturantsList/RestaurantsList';
import { useEffect, useState } from 'react';
import { useAuthContext } from '@/app/context/AuthContext';
import { navigate } from '@/app/utils'
import Spinner from '../Spinner/Spinner';

export default function RestaurantsGrid({restaurants}) {
    const [isLoading, setIsLoading] = useState(true)
    const { user, getProfile } = useAuthContext()
    const [centerCoords, setCenterCoords] = useState(null)
    const [selectedRestaurant, setSelectedRestaurant] = useState(null)
    const [favouriteRestaurants, setFavouriteRestaurants] = useState(null)
    
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


    const getFavouriteRestaurants = async () => {
        if(user) {
            setFavouriteRestaurants(user.favouriteRestaurants)
        }
    }

    useEffect(() => {
        getFavouriteRestaurants()
        if (restaurants) {
            setIsLoading(false)
        }
    }, [user])


    const addFavouriteRestaurant = async (id) => {
        try {
            if(user) {
                await userService.fetchLikeRestaurant(id);
                getProfile()
                const updatedFavouriteRestaurants = [...favouriteRestaurants]
                updatedFavouriteRestaurants.push(id)
                setFavouriteRestaurants(updatedFavouriteRestaurants)
            } else {
                navigate('/inicio/inicio-sesion')
            }
        } catch (error) {
            console.log(error)
        }
    }

    const removeFavouriteRestaurant = async(id) => {
        try {
            if(user) {
                await userService.fetchDislikeRestaurant(id);
                getProfile()
                const updatedFavouriteRestaurants = favouriteRestaurants.filter(restaurant => restaurant !== id)
                setFavouriteRestaurants(updatedFavouriteRestaurants)
            } else {
                navigate('/inicio/inicio-sesion')
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (<>
    
        { isLoading ? (
            <Spinner />
        ) : (
            <>
                { restaurants.length === 0 
                    ? (
                        <p>No hay ningún restaurante añadido.</p>
                    ) : (
                        <div className="flex flex-col items-center lg:items-stretch lg:flex-row lg:h-[calc(100vh-200px)] px-5 lg:px-10 gap-5 lg:gap-10">
                            <div className='w-full lg:w-1/2 h-auto'>
                                <div className='h-[250px] lg:h-full bg-tailor-gray overflow-hidden rounded-3xl'>
                                    <GMap restaurants={restaurants} selectedRestaurant={selectedRestaurant} center={centerCoords} />
                                </div>
                            </div>
                            <div className={`restaurants__list lg:w-1/2 overflow-auto lg:mb-[-70px] ${selectedRestaurant ? 'hovered' : ''}`}>
                                { restaurants ? (
                                    <RestaurantsList 
                                        restaurants={restaurants} 
                                        fnMouseEnter={selectRestaurant} 
                                        fnMouseLeave={unselectRestaurant} 
                                        favouriteRestaurants={favouriteRestaurants}
                                        addFavouriteRestaurant={addFavouriteRestaurant}
                                        removeFavouriteRestaurant={removeFavouriteRestaurant}
                                    />
                                ) : (
                                    <p>Cargando los restaurantes...</p>
                                )}
                            </div>
                        </div>
                    )
                }
            </>
        )}
    </>);
}