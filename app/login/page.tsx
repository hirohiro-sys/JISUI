"use client";

import React from "react";
import { signInWithGoogle } from "app/utils/supabase/authGoogle";
import { Header } from "app/components/common/Header";

export default function LoginPage() {
  const handleGoogleLogin = async () => {
    await signInWithGoogle();
  };
  return (
    <>
      <Header handleGoogleLogin={handleGoogleLogin}/>
      <div className="flex justify-center items-center h-screen">
        ここにアプリの概要LPみたいなのを載せる予定。ここはUIの領域なので一旦機能を作る
      </div>
    </>
  );
}
