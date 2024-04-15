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