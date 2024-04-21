import { NextResponse } from "next/server"

export function middleware(request) {
    const authTokens = request.cookies.get('token')?.value

    if(request.nextUrl.pathname.startsWith('/mi-perfil') && !authTokens) {
        const response = NextResponse.redirect(new URL('/inicio/inicio-sesion', request.url))
        response.cookies.delete('authTokens')
        return response
    }

    if( authTokens && request.nextUrl.pathname.startsWith('/inicio')) {
        const response = NextResponse.redirect(new URL('/mi-perfil', request.url))
        return response
    }

    if(request.nextUrl.pathname.startsWith('/restaurantes/crear-nuevo') && !authTokens) {
        const response = NextResponse.redirect(new URL('/inicio/inicio-sesion', request.url))
        response.cookies.delete('authTokens')
        return response
    }
}

export const config = {
    marcher: ['/mi-perfil(.*)', '/restaurantes/crear-nuevo', '/inicio/inicio-sesion']
}

  