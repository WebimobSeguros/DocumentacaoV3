// Next
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

export async function GET(request: Request) {
    const { origin } = new URL(request.url)

    const cookies_store = await cookies()
    cookies_store.delete('auth_token')

    return NextResponse.redirect(`${origin}/`)
}