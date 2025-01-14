import { signOut } from "app/utils/supabase/authGoogle";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";


export const Header2 = () => {
    const router = useRouter();
    const handleGoogleLogout = async () => {
      const result = await signOut();
      if (result) router.push("/login");
    };
  return (
    <header className="ext-gray-600 body-font bg-gray-100 fixed top-0 left-0 w-full z-50 shadow-md">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link
          href="#"
          className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
        >
          <span className="ml-3 text-xl">JISUI</span>
        </Link>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
          <Link href="#" className="mr-5 hover:underline">
            HOME
          </Link>
        </nav>
        <button onClick={handleGoogleLogout} className="btn btn-active btn-neutral">
          ログアウト
        </button>
      </div>
    </header>
  );
};
