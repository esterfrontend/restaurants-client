'use client'
import { createContext, useCallback, useContext, useMemo, useState, useEffect } from "react"
import Cookies from 'js-cookie'
import { navigate } from '@/app/utils'
import authService from '@/app/lib/auth.service';

export const AuthContext = createContext()

export default function AuthContextProvider({ children }) {
    const [user, setUser] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    const setToken = useCallback(function (token) {
        return Cookies.set("token", token)
    }, [])

    const getToken = useCallback(function () {
        return Cookies.get("token")
    }, [])

    const getProfile = useCallback(async function () {
        try {
            const token = getToken()
            if (token) {
                const {user} = await authService.fetchProfile(token)
                setUser(user)
            }
        } catch (error) {
            console.log("Error =>", error)
        } finally {
            setIsLoading(false)
        }
    }, [])
    
    const login = useCallback(async function (data) {
        const { token } = await authService.fetchLogin(data)
        setToken(token)
        await getProfile()
        navigate('/restaurantes/lista')
    }, [])

    const logout = useCallback(function () {
        Cookies.remove("token")
        setUser(null)
        navigate('/')
    }, [])

    const value = useMemo(() => ({
            login, 
            logout,
            getProfile,
            getToken,
            user,
            isLoading
        }),
        [login, logout, getProfile, getToken, user, isLoading]
    )

    useEffect(() => {
        getProfile()
    }, [])

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuthContext() {
    return useContext(AuthContext)
}