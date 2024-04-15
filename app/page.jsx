import InitialTemplate from "./ui/templates/Initial.template";
import Button from "./ui/components/Button/Button";
import Link from "next/link";

export default function Home() {
   return (
      <InitialTemplate
         bgColor='tailor-gray'
         page='home'
      >
         <p>Hola, <br />Bienvenido a la prueba de Tailor hub, en ella has de añadir los restaurantes favoritos donde te gustaría ir en tu onboarding.</p>
         <Button href="/inicio/registro">Crear cuenta</Button>
         <Link href="/inicio/inicio-sesion">Iniciar sesión</Link>
      </InitialTemplate>
   );
}
