'use client'
import CreateRestaurantForm from "@/app/ui/components/CreateRestaurantForm/CreateRestaurantForm";
import Response from "@/app/ui/components/Response/Response";
import UploadImage from "@/app/ui/components/UploadImage/UploadImage";
import TailorIconsTemplate from "@/app/ui/templates/TailorIcons.template";
import { useState } from "react";
import { fetchCreateRestaurant } from '@/app/lib/restaurants.service';

export default function CreateRestaurant() {
    const [error, setError] = useState(false)
    const [formSended, setFormSended] = useState(false)
    const [newRestaurantId, setNewRestaurantId] = useState(null)
    const initialData = {
        image: null,
        name: '',
        address: '',
        description: ''
    }

    const [restaurantData, setRestaurantData] = useState(initialData)

    const handleChange = (e) => {
        let { name, value } = e.target
        setRestaurantData({ ...restaurantData, [name]: value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        const { image, name, address, description } = restaurantData

        const data = { image, name, address, description }

        try {
            const reponse = await fetchCreateRestaurant(data)
            setNewRestaurantId(reponse.restaurant._id)
            setFormSended(true)
            setError(false)
        } catch (err) {
            setFormSended(true)
            setError(true)
        }
    }

    return (
        <TailorIconsTemplate>

            { !formSended ? (
                <form action="" className="w-full flex gap-10">
                    <UploadImage />
                    <div className="w-1/2 mb-20">
                        <CreateRestaurantForm handleChange={handleChange} handleSubmit={handleSubmit}/>
                    </div>
                </form>
            ) : (
                <div>
                    { !error ? (
                        <Response 
                        text='Restaurante guardado' 
                        href={`/restaurantes/${newRestaurantId}`} 
                        buttonText='Ver restaurante' />
                    ) : (
                        <Response 
                            text='Ups, algo salió mal' 
                            href='/restaurantes/crear-nuevo'
                            buttonText='Volver' />
                    )}
                </div>
            )}
            
        </TailorIconsTemplate>
    );
}