"use client";

import { useRouter } from "next/navigation";
import { signOut } from "./utils/supabase/authGoogle";


export default function Page() {
  const router = useRouter();
  const handleGoogleLogout = async () => {
    const result = await signOut();
    if (result) router.push("/login");
  };
  return (
    <>
      <h1 className="flex-grow">うーん、どうしよ</h1>
      <button onClick={handleGoogleLogout}>ログアウト</button>
    </>
  );
}
