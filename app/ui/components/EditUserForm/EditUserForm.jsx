import Button from "../Button/Button";
import Fieldset from "../Fieldset/Fieldset";

export default function EditUserForm({handleChange, handleSubmit}) {
    return (
        <div className="flex flex-col gap-6 mt-1">
            <Fieldset handleChange={handleChange} type='email' name='email' labelText='Email:' placeholder='Email' />
            <Fieldset handleChange={handleChange} type='text' name='username' labelText='Nombre de usuario:' placeholder='Nombre de usuario' />
            <Button onClick={handleSubmit}>Guardar</Button>
        </div>
    )
}