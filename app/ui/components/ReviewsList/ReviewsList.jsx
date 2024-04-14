import ReviewCard from "../ReviewCard/ReviewCard"

export default function ReviewsList({reviews}) {
    return (
        <div className="flex flex-col gap-6 my-10">
            { reviews.map((review, index) => {
                return (
                    <ReviewCard key={`review-${index}`} review={review} />
                )
            })}
            
        </div>
    )
}