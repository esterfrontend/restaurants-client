'use client'
import Button from '@/app/ui/components/Button/Button';
import ReviewsList from '@/app/ui/components/ReviewsList/ReviewsList';
import HeroRestaurant from '@/app/ui/components/HeroRestaurant/HeroRestaurant';
import CreateReview from '@/app/ui/components/CreateReview/CreateReview';
import Response from '@/app/ui/components/Response/Response';
import { useState, useEffect } from 'react';
import restaurantService from '@/app/lib/restaurants.service';
import { useAuthContext } from '@/app/context/AuthContext';
import TailorIconsTemplate from '@/app/ui/templates/TailorIcons.template';

export default function RestaurantDetails({ params }) {
    const { user } = useAuthContext()
    const [restaurant, setRestaurant] = useState(null);
    
    const [formSended, setFormSended] = useState(false)
    const [error, setError] = useState(null)
    const [notFound, setNotFound] = useState(false)
    
    useEffect(() => {
        getRestaurant();
    }, [formSended]);

    const getRestaurant = async () => {
        try {
            const response = await restaurantService.fetchOneRestaurant(params.restaurantId);
            setRestaurant(response);
            setNotFound(false)
        } catch (error) {
            setNotFound(true)
        }
    };

    const deleteRestaurant = async () => {
        try {
            const res = await restaurantService.fetchDeleteRestaurant(params.restaurantId);
            console.log(res)
            setFormSended(true)
            setError(false)
            setNotFound(false)
        } catch (error) {
            setFormSended(true)
            setError(true)
        }
    }

    return (<>
        { restaurant && !formSended &&
            <div className='px-5 lg:px-10'>
                <HeroRestaurant restaurant={restaurant} />

                <div className='w-5/6 mt-10 mx-auto'>
                    <div className='flex flex-col lg:flex-row lg:items-start gap-10'>
                        <div className='lg:w-2/3'>
                            { restaurant.description 
                                ? <p>{restaurant.description}</p>
                                : <p>Lorem ipsum dolor sit amet consectetur. At vel elementum amet est nulla cras turpis. Fringilla ornare massa eu a sollicitudin vestibulum auctor risus. Elementum quam sit neque quis. A vestibulum consectetur tincidunt vitae.Lorem ipsum dolor sit amet consectetur. At vel elementum amet est nulla cras turpis. Fringilla ornare massa eu a sollicitudin vestibulum auctor risus. Elementum quam sit neque quis. A vestibulum consectetur tincidunt vitae.Lorem ipsum dolor sit amet consectetur. At vel elementum amet est nulla cras turpis. Fringilla ornare massa eu a sollicitudin vestibulum auctor risus. Elementum quam sit neque quis. A vestibulum consectetur tincidunt vitae.</p>
                            }
                        </div>
                        <CreateReview/>
                    </div>
                    <div className='lg:w-2/3'>
                        { restaurant.reviews 
                            ? <ReviewsList reviews={restaurant.reviews}/>
                            : <p>Todavía no hay ningún comentario</p>
                        }
                        
                        { user &&
                            <div className='flex justify-end gap-4'>
                                <Button>Editar</Button>
                                <Button onClick={deleteRestaurant}>Eliminar</Button>
                            </div>
                        }
                    </div>
                </div>
            </div>
        }
        { formSended &&
            <TailorIconsTemplate>
                { !error ? (
                    <Response 
                    text='El restaurante ha sido eliminado' 
                    href={`/restaurantes/lista`} 
                    buttonText='Ver restaurantes' />
                ) : (
                    <Response 
                        text='Ups, algo salió mal' 
                     />
                )}
            </TailorIconsTemplate>
        
        }

        { notFound && !formSended &&
            <TailorIconsTemplate>
                <Response 
                text='Lo sentimos, no encontramos el restaurante que buscas' 
                href='/restaurantes/lista' 
                buttonText='Ver todos los restaurantes' />
            </TailorIconsTemplate>
        }
    </>)
}