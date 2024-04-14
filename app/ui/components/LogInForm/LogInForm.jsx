'use client'
import Button from "../Button/Button"
import BackArrowIcon from "../Icons/BackArrowIcon/BackArrowIcon"
import Fieldset from "../Fieldset/Fieldset"

export default function LogInForm () {
    return (
        <form className='flex flex-col gap-6 mt-10'>
            <Fieldset type="text" name="email" id="email" labelText="Email" placeholder="Escribe tu email" />
            <Fieldset type="password" name="password" id="password" labelText="Contraseña" placeholder="Escribe tu contraseña" />

            <Button href="/restaurantes/lista">Entrar</Button>
        </form>
    )
}