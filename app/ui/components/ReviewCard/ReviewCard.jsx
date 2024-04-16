import ReviewsStars from "../ReviewsStars/ReviewsStars";

export default function ReviewCard({ review }) {
    return (
        <div className="flex items-center gap-4 border-b border-tailor-blue px-6 pb-6">
            <div>
                <p className="text-2xl font-semibold">{review.name}</p>
            </div>
            <div>
                <div className="flex justify-end mb-4">
                    <ReviewsStars number={review.rating} />
                </div>
                <p>{review.comments}</p>
            </div>
        </div>
    )
}