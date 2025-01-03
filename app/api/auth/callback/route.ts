import { createClient } from 'app/utils/supabase/server';
import { redirect } from 'next/navigation';
import { NextResponse } from 'next/server'
// The client you created from the Server-Side Auth instructions


export async function GET(request: Request) {
    const { searchParams, origin } = new URL(request.url)
    const code = searchParams.get('code')
    const next = searchParams.get('next') ?? '/'

    if (code) {
        const supabase = await createClient()
        const { error } = await supabase.auth.exchangeCodeForSession(code)
        if (!error) {    
            const user = await supabase.auth.getUser()
            const userData = await supabase.from("user").upsert({
                name: user.data.user?.user_metadata.full_name,
                auth_id: user.data.user?.id
            },
            // auth_idカラムにユニーク制約をつけて以下を指定することで、
            // siginする度にユーザー情報が追加されるのを防ぐ
            { onConflict: "auth_id" }) 
            if (userData.error) {
                console.log(userData.error.message)
                redirect("/error")
            }
            const forwardedHost = request.headers.get('x-forwarded-host') // original origin before load balancer
            const isLocalEnv = process.env.NODE_ENV === 'development'
            if (isLocalEnv) {
                // we can be sure that there is no load balancer in between, so no need to watch for X-Forwarded-Host
                return NextResponse.redirect(`${origin}${next}`)
            } else if (forwardedHost) {
                return NextResponse.redirect(`https://${forwardedHost}${next}`)
            } else {
                return NextResponse.redirect(`${origin}${next}`)
            }
        }
    }
    
    // return the user to an error page with instructions
    return NextResponse.redirect(`${origin}/auth/auth-code-error`)
}