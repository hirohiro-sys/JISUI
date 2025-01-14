"use client";

import { useRouter } from "next/navigation";
import { signOut } from "./utils/supabase/authGoogle";
import { Header2 } from "./components/common/Header2";

export default function Page() {
  return (
    <>
    <Header2/>
    <div className="flex justify-center items-center h-screen">
      ここにメイン機能
    </div>
    </>
  );
}
