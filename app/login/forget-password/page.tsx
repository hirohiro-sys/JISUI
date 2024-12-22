"use client";

import { AuthError } from "@supabase/supabase-js";
import { supabase } from "app/utils/supabase/client";
import { FormEvent, useState } from "react";

export default function ForgetPassword() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState<AuthError | null>(null);
  const [isSend, setIsSend] = useState(false);
  const handleSubmitEmail = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        // TODO: 本番用のURLを別途envで作る必要あり
        redirectTo: "http://localhost:3000/login/reset-password",
      });
      if (error) {
        setError(error);
        throw error;
      }
      setIsSend(true);
    } catch (e) {
      console.error(e);
    }
  };
  if (error) {
    return <p className="text-red-500">エラーが発生したよ</p>;
  }

  if (isSend) {
    return <p className="text-green-500">メールを送信しました</p>;
  }

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-full max-w-xs">
        <p className="mb-4 text-lg text-gray-700">
          登録されているメールアドレスを入力してください
        </p>
        <form
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          onSubmit={handleSubmitEmail}
        >
          <div className="mb-4">
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="メールアドレス"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 w-full hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              送信
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
