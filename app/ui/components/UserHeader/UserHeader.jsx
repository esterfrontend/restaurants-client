'use client'

import Link from "next/link";
import Button from "../Button/Button";
import Dropdown from "../Dropdown/Dropdown";
import { useAuthContext } from "@/app/context/AuthContext";

export default function UserHeader () {
    const { logout } = useAuthContext();

    return (
        <header className="flex justify-end p-10">
            <Dropdown>
                <div className='bg-tailor-blue px-4 pt-8 pb-6 rounded-s-3xl rounded-br-3xl'>
                    <div className="flex flex-col gap-3 text-white text-2xl pr-4 pb-6 mb-8 border-b border-white">
                        <Link href="/">Panel de control</Link>
                        <Link href="/restaurantes/crear-nuevo">Añadir restaurante</Link>
                    </div>
                    <Button onClick={logout} className="w-full invert">Cerrar sesión</Button>
                </div>
            </Dropdown>
        </header>
    )
}