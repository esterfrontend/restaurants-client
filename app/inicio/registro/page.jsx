import InitialTemplate from '../../ui/templates/Initial.template'
import SignInForm from '@/app/ui/components/SignInForm/SignInForm';

export default function Registro() {
    return (
        <InitialTemplate imageURL='/Signin.jpg' logoColor='#FFF'>
            <SignInForm className="invert"/>
        </InitialTemplate>
    );
}