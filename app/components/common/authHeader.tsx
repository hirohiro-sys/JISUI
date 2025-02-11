import Link from "next/link";
import React from "react";
import { FcGoogle } from "react-icons/fc";

type handleGoogleLoginProps = {
  handleGoogleLogin: () => void;
};

export const AuthHeader = ({ handleGoogleLogin }: handleGoogleLoginProps) => {
  return (
    <header className="text-gray-600 body-font bg-gray-100 fixed top-0 left-0 w-full z-50 shadow-md">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link
          href="#"
          className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
        >
          <span className="ml-3 text-xl">JISUI</span>
        </Link>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
          <Link href="#" className="mr-5 hover:underline">
            アプリの特徴
          </Link>
        </nav>
        <button onClick={handleGoogleLogin} className="btn btn-outline bg-white">
          <FcGoogle size={25}/>
          Googleでサインイン
        </button>
      </div>
    </header>
  );
};
