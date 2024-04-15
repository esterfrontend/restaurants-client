'use client'
import { createContext, useCallback, useContext, useMemo, useState } from "react"
import Cookies from 'js-cookie'
import { navigate } from '@/app/utils'
import { fetchProfile } from '@/app/lib/auth.service';
import { fetchLogin } from '@/app/lib/auth.service';

export const AuthContext = createContext()

export default function AuthContextProvider({ children }) {
    const [user, setUser] = useState(null)

    const getToken = useCallback(function () {
        return Cookies.get("token")
    }, [])

    const getProfile = useCallback(async function () {
        const token = getToken()
        if (token) {
            const {user} = await fetchProfile(token)
            setUser(user)
        }
    }, [])
    
    const login = useCallback(async function (data) {
        const { token } = await fetchLogin(data)
        Cookies.set("token", token)
        await getProfile()
        navigate('/restaurantes/lista')
    }, [])

    const logout = useCallback(function () {
        Cookies.remove("token")
        navigate('/')
    }, [])

    const value = useMemo(() => ({
            login, 
            logout,
            getProfile,
            getToken,
            user
        }),
        [login, logout, getProfile, getToken, user]
    )

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuthContext() {
    return useContext(AuthContext)
}