export default function StarIcon ({fill='tailor-blue'}) {
    return (
        <svg className='w-[20px] md:w-[32px] h-[20px] md:h-[32px]' height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path 
                d="M16 0L18.3388 10.3538L27.3137 4.68629L21.6462 13.6612L32 16L21.6462 18.3388L27.3137 27.3137L18.3388 21.6462L16 32L13.6612 21.6462L4.68629 27.3137L10.3538 18.3388L0 16L10.3538 13.6612L4.68629 4.68629L13.6612 10.3538L16 0Z" 
                fill={fill}
                className={`fill-${fill}`}
            />
        </svg>
    )
}