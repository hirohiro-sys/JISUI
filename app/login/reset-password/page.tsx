"use client";

import { AuthError } from "@supabase/supabase-js";
import { supabase } from "app/utils/supabase/client";
import { FormEvent, useState } from "react";

export default function ResetPassword() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState<AuthError | null>(null);
  const [isSend, setIsSend] = useState(false);
  const handleResetPassword = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const { error } = await supabase.auth.updateUser({
        password,
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
    return <p className="text-green-500">パスワードを変更したよ</p>;
  }

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-full max-w-xs p-8 bg-white rounded-lg shadow-md">
        <p className="text-lg text-gray-700 mb-4">
          新しいパスワードを入力してください
        </p>
        <form className="space-y-4" onSubmit={handleResetPassword}>
          <input
            className="w-full p-2 text-gray-700 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            type="password"
            placeholder="パスワード"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            送信
          </button>
        </form>
      </div>
    </div>
  );
}
