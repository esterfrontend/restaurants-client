import InitialTemplate from '../../ui/templates/Initial.template'
import Button from "../../ui/components/Button/Button";

export default function InicioSesion() {
    return (
        <InitialTemplate imageURL='/Login.jpg'>
            <h1>Inicio sesión</h1>
            <Button href="/">Home</Button>
        </InitialTemplate>
    );
}