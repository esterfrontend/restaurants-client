import CreateRestaurantForm from "@/app/ui/components/CreateRestaurantForm/CreateRestaurantForm";
import Response from "@/app/ui/components/Response/Response";
import UploadImage from "@/app/ui/components/UploadImage/UploadImage";
import TailorIconsTemplate from "@/app/ui/templates/TailorIcons.template";

export default function CreateRestaurant() {
    const newRestaurantId = 3
    return (
        <TailorIconsTemplate>
            <>
                <div className="w-full flex gap-10">
                    <UploadImage />
                    <div className="w-1/2 mb-20">
                        <CreateRestaurantForm />
                    </div>
                </div>
            </>
            <div className="hidden">
                <>
                    <Response 
                        text='Restaurante guardado' 
                        href={`/restaurantes/${newRestaurantId}`} 
                        buttonText='Ver restaurante' />
                </>

                <>
                    <Response 
                        text='Ups, algo salió mal' 
                        href='/restaurantes/crear-nuevo'
                        buttonText='Volver' />
                </>
            </div>
        </TailorIconsTemplate>
    );
}