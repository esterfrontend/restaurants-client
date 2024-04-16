'use client'
import { useState } from "react"
import InitialTemplate from '../../ui/templates/Initial.template'
import SignUpForm from '@/app/ui/components/SignUpForm/SignUpForm';
import { fetchSignup } from '@/app/lib/auth.service';
import Toast from "@/app/ui/components/Toast/Toast";
import { useAuthContext } from "@/app/context/AuthContext";

export default function Registro() {
    const { login } = useAuthContext() 
    const [formSended, setFormSended] = useState(false)
    const [error, setError] = useState(false)
    const initialData = {
        email: '',
        username: '',
        password: ''
    }

    const [userData, setUserData] = useState(initialData)

    const handleChange = (e) => {
        let { name, value } = e.target
        setUserData({ ...userData, [name]: value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        const { email, username, password } = userData

        const data = { email, username, password }

        try {
            await fetchSignup(data)
            login(data)
            setFormSended(true)
            setError(false)
        } catch (err) {
            console.log(err)
            setFormSended(true)
            setError(true)
        }
    }

    const inputsForm = [
        {
            name: 'email',
            text: 'El email es obligatorio'
        },
        {
            name: 'username',
            text: 'El nombre de usuario es obligatorio'
        },
        {
            name: 'password',
            text: 'La contraseña es obligatoria'
        }
    ]

    return (
        <InitialTemplate page='signup' logoColor='#FFF'>
            <SignUpForm handleSubmit={handleSubmit} handleChange={handleChange} className="invert"/>

            { formSended && (
                <Toast error={error} formSended={formSended}>
                    { !error ? (
                        <p className="text-sm text-white">
                            Enhorabuena, tu usuario ha sido creado.
                        </p>
                    ) : (
                        <>
                            <p className="text-sm text-white">
                                No ha podido crearse la cuenta.
                            </p>

                            { inputsForm.map((input) => {
                                if(!userData[input.name]) {
                                    return <p key={input.name} className="text-white">{input.text}</p>
                                }
                            }) }
                        </>
                    )}
                </Toast>
            )
            }
        </InitialTemplate>
    );
}