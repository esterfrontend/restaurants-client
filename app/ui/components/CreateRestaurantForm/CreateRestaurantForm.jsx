import Button from "../Button/Button";
import Fieldset from "../Fieldset/Fieldset";

export default function CreateRestaurantForm (){
    return (
        <form action="" className="flex flex-col gap-6 mt-1">
            <Fieldset type='text' name='name' labelText='Nombre de restaurante:' placeholder='Nombre' />
            <Fieldset type='text' name='address' labelText='Dirección de restaurante:' placeholder='Dirección' />
            <Fieldset type='textarea' name='description' labelText='Dirección de restaurante:' placeholder='Escribe información acerca del restaurante' />
            <Button>Guardar</Button>
        </form>
    )
}