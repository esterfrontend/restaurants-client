import { useState } from "react";
import DownArrowIcon from "../Icons/DownArrowIcon/DownArrowIcon";
import UpArrowIcon from "../Icons/UpArrowIcon/UpArrowIcon";


export default function Dropdown ({children}) {
    const [isOpen, setIsOpen] = useState(false)
    const toggleDropdown = () => {
        isOpen 
            ? setIsOpen(false)
            : setIsOpen(true)
    }

    return (
        <div className="relative">
            <div onClick={toggleDropdown} className="flex items-center gap-1.5 text-2xl cursor-pointer">
                <span>
                    Nombre usuario
                </span>
                { isOpen 
                    ? <UpArrowIcon />
                    : <DownArrowIcon />
                }
            </div>
            <div className={`${!isOpen && 'hidden'} absolute w-max end-0 top-10 z-50`}>
                {children}
            </div>
        </div>
    )
}