'use client'
import RestaurantsGrid from '@/app/ui/components/RestaurantsGrid/RestaurantsGrid';
import { useAuthContext } from "@/app/context/AuthContext";
import userService from '../lib/user.service';
import { useEffect, useState } from 'react';
import authService from '../lib/auth.service';
import Button from '../ui/components/Button/Button';
import Modal from '../ui/components/Modal/Modal';
import EditUserForm from '../ui/components/EditUserForm/EditUserForm';

export default function AllRestaurants() {
    const { user, removeUser } = useAuthContext();
    const [updatedUser, setUpdatedUser] = useState(user);

    const [formSended, setFormSended] = useState(false)
    const [error, setError] = useState(null)
    const [favouriteRestaurants, setFavouriteRestaurants] = useState(null);

    const [showModal, setShowModal] = useState(false)
    const [editUserData, setEditUsertData] = useState(user)
    
    useEffect(() => {
        getRestaurants();
        setUpdatedUser(user)
    }, [user]);

    const getRestaurants = async () => {
        try {
            const response = await userService.fetchGetFavouriteRestaurants();
            setFavouriteRestaurants(response);
        } catch (error) {
            console.log(error)
        }
    };

    const handleChange = (e) => {
        const {name, value} = e.target
        setEditUsertData({ ...editUserData, [name]: value })
    }
    
    const handleSubmitEdit = async (e) => {
        e.preventDefault()

        try {
            console.log(editUserData)
            const {user} = await authService.fetchEditUser(editUserData)
            setShowModal(false)
            setUpdatedUser(user)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
        { updatedUser &&
            <>
                <div className='px-5 lg:px-10 mb-14'>
                    <h1 className='text-2xl lg:text-4xl font-semibold text-center mb-8'>Bienvenido {updatedUser.username}</h1>
                    <div className='border rounded-3xl p-10'>
                        <p><strong>Nombre de usuario:</strong> {updatedUser.username}</p>
                        <p><strong>Email:</strong> {updatedUser.email}</p>
                        <div className='flex justify-end gap-4'>
                            <Button onClick={() => setShowModal(true)}>Editar</Button>
                            <Button onClick={removeUser}>Eliminar</Button>
                        </div>
                    </div>
                </div>

                { favouriteRestaurants &&
                    <div>
                        <h2 className='text-xl lg:text-2xl font-semibold text-center px-5 lg:px-10 mb-6'>Tus restaurantes favoritos</h2>
                        <RestaurantsGrid restaurants={favouriteRestaurants}/>
                    </div>
                }
            </>
        }

        { showModal && 
            <Modal onClose={() => setShowModal(false)}>
                <h2 className='text-2xl font-semibold text-center mb-6'>Edita el usuario</h2>
                <EditUserForm handleChange={handleChange} handleSubmit={handleSubmitEdit} />
            </Modal>
        }
           
        </>
    );
}