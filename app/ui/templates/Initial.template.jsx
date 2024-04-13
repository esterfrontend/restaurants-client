import Logo from "../components/logo/logo";
import Image from 'next/image';

export default function InitialTemplate({children, imageURL, bgColor='tailor-blue', logoColor}) {
    return (
        <div className="flex gap-10 items-end p-10 h-full">
            <div className={`w-1/2 flex flex-col gap-10 bg-${bgColor} rounded-xl p-6`}>
                <Logo fill={logoColor}/>
                {children}
            </div>
            <div className='w-1/2 h-full overflow-hidden rounded-xl relative'>
                <Image 
                    src={`${imageURL}`}
                    width={804}
                    height={1002}
                    alt=''
                    className='w-full h-full object-cover'
                />
            </div>
        </div>
    );
}