"use client";

import React from "react";
import { signInWithGoogle } from "app/utils/supabase/authGoogle";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";

export default function LoginPage() {
  const handleGoogleLogin = async () => {
    await signInWithGoogle();
  };
  return (
    <>
      <div className="flex justify-center items-center h-screen bg-gradient-to-br from-rose-200 via-orange-50 to-amber-200 p-4">
        <div className="card bg-base-100 shadow-xl py-5">
          <div className="card-body items-center text-center">
            <h2 className="card-title">JISUIへようこそ！</h2>
            <div className="card-actions py-5">
              <button
                onClick={handleGoogleLogin}
                className="btn btn-outline flex items-center"
              >
                <FcGoogle className="text-xl"/>
                Sign in with Google
              </button>
            </div>
            <p className="text-sm">
              続けることにより、
              <Link href="#" className="link">
                利用規約
              </Link>
              に同意し、
              <Link href="#" className="link">
                プライバシーポリシー
              </Link>
              を理解したうえで、個人情報の取り扱いに同意したものとみなされます。
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
