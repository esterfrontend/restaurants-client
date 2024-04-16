'use client'
import InitialTemplate from '../../ui/templates/Initial.template'
import LogInForm from '@/app/ui/components/LogInForm/LogInForm';
import { useState } from 'react';
import Toast from '@/app/ui/components/Toast/Toast';
import { useAuthContext } from '@/app/context/AuthContext';

export default function InicioSesion() {
    const { login } = useAuthContext() 
    
    const [formSended, setFormSended] = useState(false)
    const [error, setError] = useState(false)
    const initialData = {
        email: '',
        password: ''
    }

    const [userData, setUserData] = useState(initialData)

    const handleChange = (e) => {
        let { name, value } = e.target
        setUserData({ ...userData, [name]: value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        const { email, password } = userData

        const data = { email, password }

        try {
            login(data)
            setFormSended(true)
            setError(false)
        } catch (err) {
            console.log(err)
            setFormSended(true)
            setError(true)
        }
    }

    return (
        <InitialTemplate page='login' logoColor='#FFF'>
            <div className="invert">
                <LogInForm handleSubmit={handleSubmit} handleChange={handleChange} />
            </div>
            { formSended &&  error && (
                <Toast error={error} formSended={formSended}>
                    <p className="text-sm text-white">
                        Error al iniciar sesión. Comprueba que has escrito bien tus datos. 
                    </p>
                </Toast>
            )
            }
        </InitialTemplate>
    );
}