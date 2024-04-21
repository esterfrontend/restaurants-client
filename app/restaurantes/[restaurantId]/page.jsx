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
import CreateRestaurantForm from '@/app/ui/components/CreateRestaurantForm/CreateRestaurantForm';
import Modal from '@/app/ui/components/Modal/Modal';

export default function RestaurantDetails({ params }) {
    const { user } = useAuthContext()
    const [restaurant, setRestaurant] = useState({});
    
    const [formSended, setFormSended] = useState(false)
    const [error, setError] = useState(null)
    const [notFound, setNotFound] = useState(false)

    const [showModal, setShowModal] = useState(false)
    const [editRestaurantData, setEditRestaurantData] = useState(restaurant)

    const getRestaurant = async () => {
        try {
            const response = await restaurantService.fetchOneRestaurant(params.restaurantId);
            setRestaurant(response);
            setNotFound(false)
        } catch (error) {
            setNotFound(true)
        }
    };

    useEffect(() => {
        getRestaurant();
    }, [formSended, showModal]);

    const deleteRestaurant = async () => {
        try {
            const res = await restaurantService.fetchDeleteRestaurant(params.restaurantId);
            setFormSended(true)
            setError(false)
            setNotFound(false)
        } catch (error) {
            setFormSended(true)
            setError(true)
        }
    }

    const handleChange = (e) => {
        const {name, value} = e.target
        setEditRestaurantData({ ...editRestaurantData, [name]: value })
    }
    
    const handleSubmitEdit = async (e) => {
        e.preventDefault()

        try {
            console.log(editRestaurantData)
            const updatedRestaurant = await restaurantService.fetchEditRestaurant(params.restaurantId, editRestaurantData)
            setShowModal(false)
            setRestaurant(updatedRestaurant)
        } catch (error) {
            console.log(error)
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
                                <Button onClick={() => setShowModal(true)}>Editar</Button>
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

        { notFound && 
            <TailorIconsTemplate>
                <Response 
                text='Lo sentimos, no encontramos el restaurante que buscas' 
                href='/restaurantes/lista' 
                buttonText='Ver todos los restaurantes' />
            </TailorIconsTemplate>
        }
        
        { showModal && 
            <Modal onClose={() => setShowModal(false)}>
                <h2 className='text-2xl font-semibold text-center mb-6'>Edita el restaurante</h2>
                <CreateRestaurantForm handleChange={handleChange} handleSubmit={handleSubmitEdit}/>
            </Modal>
        }

    </>)
}