import Link from "next/link"
import AverageReviews from "../AverageReviews/AverageReviews"

export default function RestaurantCard ({restaurant, index, fnMouseEnter, fnMouseLeave}) {
    return (
        <Link href={`/restaurantes/${index}`} 
            className='flex gap-6' 
            onMouseEnter={() => fnMouseEnter(index)}
            onMouseLeave={fnMouseLeave}
        >
            { restaurant.image &&
                <div className='w-[200px] h-[200px] overflow-hidden rounded-3xl'>
                    <img 
                        src={restaurant.image} 
                        alt={`Foto restaurante ${restaurant.name}`}
                        className='w-full h-full object-cover'
                        />
                </div>
            }
            <div className='flex flex-1 flex-col justify-between'>
                <div>
                    <h2 className='text-4xl font-semibold mb-3'>{restaurant.name}</h2>
                    <p className='text-2xl'>{restaurant.address}</p>
                </div>
                <AverageReviews reviews={restaurant.reviews} />
            </div>
            </Link>
    )
}