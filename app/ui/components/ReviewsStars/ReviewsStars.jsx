import StarIcon from '@/app/ui/components/Icons/StarIcon/StarIcon';


export default function ReviewsStars ({number}) {
    return (
        <div className='flex gap-3'>
            {[...Array(5)].map((e, i) => { 
                if(i < number) {
                    return <StarIcon key={i}/>
                } else {
                    return <StarIcon fill='gray-300' key={i}/>
                }
            })}
        </div>
    )
}