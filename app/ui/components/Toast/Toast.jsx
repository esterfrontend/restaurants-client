import { useState, useEffect } from 'react';

export default function Toast({error, formSended, children}) {
    const [visible, setVisible] = useState(formSended)

    useEffect(() => {
        const timer = setTimeout(() => {
            setVisible(false)
        }, 7000)

        return () => clearTimeout(timer)
    }, [])

    if( !visible ) {
        return null
    }

    return (
        <div className={`absolute bottom-4 end-4 ${ error ? 'bg-red-500' : 'bg-green-500' } rounded-3xl p-4 z-50`}>
            <div className="text-white">
                {children}
            </div>
        </div>
    )
}