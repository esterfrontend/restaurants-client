import { NextResponse } from "next/server"

export function middleware(request) {
    const authTokens = request.cookies.get('token')?.value

    if(request.nextUrl.pathname.startsWith('/restaurantes') && !authTokens) {
        const response = NextResponse.redirect(new URL('/inicio/inicio-sesion', request.url))
        response.cookies.delete('authTokens')
        return response
    }

    if( authTokens && request.nextUrl.pathname.startsWith('/inicio')) {
        const response = NextResponse.redirect(new URL('/restaurantes/lista', request.url))
        return response
    }
}

export const config = {
    marcher: ['/restaurantes(.*)', '/inicio/inicio-sesion']
}