import { reviewsCalcs } from '@/app/utils'
import ReviewsStars from '../ReviewsStars/ReviewsStars'

export default function AverageReviews ({reviews}) {
    const numberOfReviews = reviews.length

    let sum = 0
    for (let i = 0; i < numberOfReviews; i++) {
        sum += reviews[i].rating
    }

    const average = sum / numberOfReviews

    const roundedAverage = Math.round(average)

    return (
        <div className='flex flex-col items-start
                sm:flex-row sm:items-center
                lg:flex-col lg:items-start
                xl:flex-row xl:items-center
                gap-2'
            >
            <div className='flex gap-3'>
                <ReviewsStars number={roundedAverage} />
            </div>
            <span className='text-xs'>({numberOfReviews} comentarios)</span>
        </div>
    )
}