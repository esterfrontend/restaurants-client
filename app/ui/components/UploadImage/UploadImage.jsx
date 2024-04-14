import Button from "../Button/Button";

export default function UploadImage({image}) {    
    return (
        <div className="relative w-1/2 flex justify-center items-center border border-black rounded-3xl overflow-hidden">
            { image &&
                <img src={image} alt="" className="absolute w-full h-full object-cover z-[-1]"/>
            }
            <div className={`w-full h-full flex flex-col justify-center items-center ${ image && 'bg-black/40'}`}>
                { image 
                    ? <Button className='invert'>Eliminar</Button>
                    : <span className="text-2xl">Añadir imagen</span>
                }
            </div>
        </div>
    )
}