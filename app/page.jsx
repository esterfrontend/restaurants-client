import InitialTemplate from "./ui/templates/Initial.template";
import Button from "./ui/components/Button/Button";

export default function Home() {
  return (
    <InitialTemplate 
      bgColor='tailor-gray' 
      imageURL='/Home.jpg'
    >
      <p>Hola, <br/>Bienvenido a la prueba de Tailor hub, en ella has de añadir los restaurantes favoritos donde te gustaría ir en tu onboarding.</p>
      <Button href="/inicio/registro">Entrar</Button>
    </InitialTemplate>
  );
}
