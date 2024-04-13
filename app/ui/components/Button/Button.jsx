import Link from 'next/link'

export default function Button ({onClick, href, type, children}) {
    const styledButton = 'inline-block w-fit py-4 px-8 border rounded-3xl border-black text-2xl font-semibold'
    return (
        <>
            { href && 
                <Link 
                    href={href}
                    className={styledButton}
                >
                    {children}
                </Link>
            } 

            { onClick &&
                <button 
                    onClick={onClick}
                    className={styledButton}
                >
                    {children}
                </button>
            } 

            { type &&
                <input 
                    type={type} 
                    value={children}
                    className={styledButton}
                />
            }
        </>
    )
}