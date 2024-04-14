import InitialTemplate from '../../ui/templates/Initial.template'
import LogInForm from '@/app/ui/components/LogInForm/LogInForm';

export default function InicioSesion() {
    return (
        <InitialTemplate imageURL='/Login.jpg' logoColor='#FFF'>
            <div className="invert">
                <LogInForm />
            </div>
        </InitialTemplate>
    );
}