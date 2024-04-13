'use client'
import { useState } from "react"
import Button from "../Button/Button"
import BackArrowIcon from "../BackArrowIcon/BackArrowIcon"
import Fieldset from "../Fieldset/Fieldset"

export default function SignInForm ({...props}) {
    const [current, setCurrent] = useState(1)

    const goToPreviousStep = (currentStep) => {
        const prevStep = currentStep - 1
        setCurrent(prevStep)
    }

    const goToNextStep = (currentStep) => {
        const nextStep = currentStep + 1
        setCurrent(nextStep)
    }

    return (
        <form {...props}>
            { current === 1 && 
                <>
                    <Button href='/'>
                        <BackArrowIcon />
                    </Button>
                   
                    <div className='flex flex-col gap-6 mt-10'>
                        <Fieldset type="text" name="email" id="email"  labelText="Email" placeholder="Añade tu email" />
                        <Fieldset type="email" name="username" id="username" labelText="Nombre de usuario" placeholder="Añade tu nombre" />

                        <Button onClick={() => goToNextStep(current)}>Siguiente</Button>
                    </div>
                </>
            }

            { current === 2 && 
                <>
                    <Button onClick={() =>goToPreviousStep(current)}>
                        <BackArrowIcon />
                    </Button>

                    <div className='flex flex-col gap-6 mt-10'>
                        <Fieldset type="password" name="password" labelText="Crea una contraseña" placeholder="Añade una contraseña" />
                        <Button type='submit'>Finalizar</Button>
                    </div>
                </>
            }

        </form>
    )
}