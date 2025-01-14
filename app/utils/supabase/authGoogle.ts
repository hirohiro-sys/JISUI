"use server";

import { createClient } from "app/utils/supabase/server";
import { redirect } from "next/navigation";

// ---------------------------------------------
// Googleログイン
// ---------------------------------------------
export async function signInWithGoogle() {
    const supabase = await createClient();
    const { data: { url }, error } = await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
            redirectTo: `${process.env.SUPABASE_AUTH_URL}/api/auth/callback`,
            queryParams: {
                access_type: 'offline',
                // 一旦同意画面はスキップにしておく
                prompt: 'select_account',
            },
        },
    });
    if (error) console.error('Googleログインエラー:', error.message)
    if (url) redirect(url);
}


// ---------------------------------------------
// Googleログアウト
// ---------------------------------------------
export async function signOut() {
    // クライアントを作成
    const supabase = await createClient();
    const { error } = await supabase.auth.signOut();
    if (error) console.error('Googleログアウトエラー:', error.message)
    if (!error) return true;
    return false;
}