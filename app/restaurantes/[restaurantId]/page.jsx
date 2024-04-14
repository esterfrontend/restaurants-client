
import Button from '@/app/ui/components/Button/Button';
import ReviewsList from '@/app/ui/components/ReviewsList/ReviewsList';
import HeroRestaurant from '@/app/ui/components/HeroRestaurant/HeroRestaurant';
import CreateReview from '@/app/ui/components/CreateReview/CreateReview';
import Response from '@/app/ui/components/Response/Response';
import { fetchOneRestaurant } from '@/app/lib/restaurants.service';

export default async function RestaurantDetails({ params }) {
    const restaurant = await fetchOneRestaurant(params.restaurantId)

    return (<>
        { restaurant ? (
            <div className='px-10'>
                <HeroRestaurant restaurant={restaurant} />

                <div className='w-5/6 flex items-start gap-10 mt-10 mx-auto'>
                    <div className='flex-1'>
                        <p className='text-2xl'>Lorem ipsum dolor sit amet consectetur. At vel elementum amet est nulla cras turpis. Fringilla ornare massa eu a sollicitudin vestibulum auctor risus. Elementum quam sit neque quis. A vestibulum consectetur tincidunt vitae.Lorem ipsum dolor sit amet consectetur. At vel elementum amet est nulla cras turpis. Fringilla ornare massa eu a sollicitudin vestibulum auctor risus. Elementum quam sit neque quis. A vestibulum consectetur tincidunt vitae.Lorem ipsum dolor sit amet consectetur. At vel elementum amet est nulla cras turpis. Fringilla ornare massa eu a sollicitudin vestibulum auctor risus. Elementum quam sit neque quis. A vestibulum consectetur tincidunt vitae.</p>
                        
                        { restaurant.reviews 
                            ? <ReviewsList reviews={restaurant.reviews}/>
                            : <p>Todavía no hay ningún comentario</p>
                        }
                        
                        <div className='flex justify-end gap-4'>
                            <Button>Editar</Button>
                            <Button>Eliminar</Button>
                        </div>
                    </div>
                    <CreateReview/>
                </div>
            </div>
        ) : (
            <Response 
            text='Lo sentimos, no encontramos el restaurante que buscas' 
            href='/restaurantes/lista' 
            buttonText='Ver todos los restaurantes' />
        )}
    </>)
}