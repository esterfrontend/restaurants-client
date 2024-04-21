import { useState } from "react";
import DownArrowIcon from "../Icons/DownArrowIcon/DownArrowIcon";
import UpArrowIcon from "../Icons/UpArrowIcon/UpArrowIcon";

export default function Dropdown ({title, children}) {
    const [isOpen, setIsOpen] = useState(false)
    const toggleDropdown = () => {
        isOpen 
            ? setIsOpen(false)
            : setIsOpen(true)
    }

    const closeDropdown = () => {
        setIsOpen(false)
    }

    return (
        <div className="relative">
            <div onClick={toggleDropdown} className="relative flex items-center gap-1.5 cursor-pointer z-10">
                <span>
                    { title }
                </span>
                { isOpen 
                    ? <UpArrowIcon />
                    : <DownArrowIcon />
                }
            </div>
            <div onClick={toggleDropdown} className={`${!isOpen && 'hidden'} absolute w-max end-0 top-10 z-50`}>
                {children}
            </div>
            <div onClick={closeDropdown} className={`${!isOpen && 'hidden'} fixed top-0 start-0 w-full h-full z-2`}></div>
        </div>
    )
}