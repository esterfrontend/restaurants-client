'use server'
import { redirect } from 'next/navigation'

export const reviewsCalcs = (reviews) => {
    const numberOfReviews = reviews.length

    let sum = 0
    for (let i = 0; i < numberOfReviews; i++) {
        sum += reviews[i].rating
    }

    const average = sum / numberOfReviews

    return {number: numberOfReviews, average}
}

export async function navigate(direction) {
    redirect(direction)
}

const clickLikeIcon = (element) => {
    element.classList.add('clicked')
    setTimeout(function() {
        element.classList.remove('clicked');
    }, 700);
}

export const addFavouriteRestaurant = async (e) => {
    try {
        if(user) {
            await userService.fetchLikeRestaurant(id);
            setFavourite(true)
            clickLikeIcon(e.target)
        } else {
            navigate('/inicio/inicio-sesion')
        }
    } catch (error) {
        console.log(error)
    }
}

export const removeFavouriteRestaurant = async(e) => {
    try {
        if(user) {
            await userService.fetchDislikeRestaurant(id);
            setFavourite(false)
            clickLikeIcon(e.target)
        } else {
            navigate('/inicio/inicio-sesion')
        }
    } catch (error) {
        console.log(error)
    }
}