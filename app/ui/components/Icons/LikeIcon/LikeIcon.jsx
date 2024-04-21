export default function LikeIcon ({like}) {    
    return (
        <svg className='pointer-events-none' width="100%" height="100%" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path className='hover:fill-[#df4d6b]' d="M0.940863 10.3541C1.85071 18.0878 11.9349 25.0444 16.8632 29.1198C21.6968 25.0444 31.8724 18.1175 32.7857 10.3541C33.923 0.687026 22.2656 -3.29362 16.8632 6.94219C11.461 -3.2936 -0.196446 0.686986 0.940863 10.3541Z" fill={ like ? '#d62549' : '#fff' }  stroke="black" strokeWidth="1.5" strokeLinejoin="round"/>
        </svg>
    )
}