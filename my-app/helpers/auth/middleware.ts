// Next
import { NextResponse, type NextRequest } from 'next/server'
// Libs
import { jwtVerify } from 'jose'

export async function checkSession(request: NextRequest) {
    let response = NextResponse.next({
        request,
    })

    const token = request.cookies.get('auth_token')?.value

    let token_valid = false

    if (token) {
        try {
            const ACCESS_SECRET = new TextEncoder().encode(process.env.ACCESS_SECRET!)
            await jwtVerify(token, ACCESS_SECRET)

            token_valid = true
        } catch (error) {
            console.log('Erro ao decodificar o JWT.', error)
        }
    }

    // Public routes
    const public_routes = ['/login']

    const isPublicRoute = public_routes.some((route) => {
        return request.nextUrl.pathname === route
    })

    // If session exists, redirect from '/' to '/dashboard'
    if (token_valid && isPublicRoute) {
        const url = request.nextUrl.clone()
        url.pathname = '/'
        return NextResponse.redirect(url)
    }

    // If session does not exist and route is not public, redirect to '/'
    if (!token_valid && !isPublicRoute) {
        const url = request.nextUrl.clone()
        url.pathname = '/login'
        return NextResponse.redirect(url)
    }

    return response
}