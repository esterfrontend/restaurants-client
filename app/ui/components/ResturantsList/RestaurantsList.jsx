import RestaurantCard from "../ResturantCard/RestaurantCard"

export default function RestaurantsList ({restaurants, ...props}) {
    return (
        <div className='flex flex-col gap-8 pr-6 pb-10'>
            { restaurants.map((restaurant, index) => {
                return (
                    <RestaurantCard key={index} restaurant={restaurant} id={restaurant._id} {...props} />
                )
            }) }
        </div>
    )
}