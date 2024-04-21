import Link from "next/link"
import AverageReviews from "../AverageReviews/AverageReviews"
import LikeAndDislike from "../LikeAndDislike/LikeAndDislike";
import './RestaurantCard.css'

export default function RestaurantCard ({restaurant, id, fnMouseEnter, fnMouseLeave, ...props}) {    
    return (
        <>
            <div className="restaurant-item relative">
                <LikeAndDislike id={id} className='absolute top-3 start-3' {...props}/>

                <Link href={`/restaurantes/${id}`} 
                    className='flex gap-6' 
                    onMouseEnter={() => fnMouseEnter(id)}
                    onMouseLeave={fnMouseLeave}
                >
                    <div className='w-[80px] h-[80px] md:w-[200px] md:h-[200px] overflow-hidden rounded-3xl'>
                        <img 
                            src={restaurant.image ? restaurant.image : 'https://res.cloudinary.com/dsywb80za/image/upload/v1712954201/Restaurants/Picture_shzy4m.jpg'} 
                            alt={`Foto restaurante ${restaurant.name}`}
                            className='w-full h-full object-cover'
                            />
                    </div>
                    <div className='flex flex-1 flex-col gap-2 justify-between'>
                        <div>
                            <h2 className='text-[1.5rem] font-semibold mb-3'>{restaurant.name}</h2>
                            <p>{restaurant.address}</p>
                        </div>
                        
                        {restaurant.reviews &&
                            <AverageReviews reviews={restaurant.reviews} />
                        }
                    </div>
                </Link>
            </div>
        </>
    )
}