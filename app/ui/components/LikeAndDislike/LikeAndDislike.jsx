import { useEffect, useState } from "react";
import { useAuthContext } from '@/app/context/AuthContext';
import LikeIcon from "../Icons/LikeIcon/LikeIcon";
import './LikeAndDislike.css'

export default function LikeAndDislike({className, id, index, favouriteRestaurants, addFavouriteRestaurant, removeFavouriteRestaurant }) {
    const { user } = useAuthContext()
    const [ updateUser, setUpdateuser] = useState(user)
    
    const [ isFavourite, setIsFavourite ] = useState(false)

    const checkIfIsFavourite = async () => {
        if(updateUser && favouriteRestaurants && favouriteRestaurants.includes(id)) {
            console.log(favouriteRestaurants)
            setIsFavourite(true)
        } else {
            setIsFavourite(false)
        }
    }
    
    useEffect(() => {
        setUpdateuser(user)
        checkIfIsFavourite()
    }, [favouriteRestaurants])
    
    
    return (
        <div 
        className={`cursor-pointer w-[34px] h-[34px] ${className} z-50`}
        onClick={ isFavourite ? () => removeFavouriteRestaurant(id) : () => addFavouriteRestaurant(id) } 
        >
            { isFavourite && console.log(index) }
            <LikeIcon like={ isFavourite ? true : false } />
        </div>
    )
}