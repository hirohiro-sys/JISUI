"use client"

import { supabase } from "./utils/supabase/client";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter()
  const handleLogout = async() => {
    await supabase.auth.signOut()
    router.push("/login")
  }
  // ちらつきがある場合はローディング処理を入れてあげる
  // あとここにもしログイン状態じゃない場合は/loginに飛ばす処理が欲しいかも
  return (
    <>
      <h1 className="flex-grow">うーん、どうしよ</h1>
      <button onClick={handleLogout}>ログアウト</button>
    </>
  );
}
