import { reviewsCalcs } from '../../../utils'
import ReviewsStars from '../ReviewsStars/ReviewsStars'

export default function AverageReviews ({reviews}) {
    const { number, average } = reviewsCalcs(reviews)
    const roundedAverage = Math.round(average)

    return (
        <div className='flex items-center gap-3'>
            <div className='flex gap-3'>
                <ReviewsStars number={roundedAverage} />
            </div>
            <span>({number} comentarios)</span>
        </div>
    )
}