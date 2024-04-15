import { useState } from "react";
import DownArrowIcon from "../Icons/DownArrowIcon/DownArrowIcon";
import UpArrowIcon from "../Icons/UpArrowIcon/UpArrowIcon";
import { useEffect } from "react";
import { useAuthContext } from "@/app/context/AuthContext";

export default function Dropdown ({children}) {
    const { user, getProfile } = useAuthContext();

    useEffect(() => {
        getProfile();
    }, []);

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
                    { user ? user.username : 'Nombre' }
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