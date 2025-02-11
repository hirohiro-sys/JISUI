"use client";

import React from "react";
import { signInWithGoogle } from "app/utils/supabase/authGoogle";
import { AuthHeader } from "app/components/common/authHeader";

export default function LoginPage() {
  const handleGoogleLogin = async () => {
    await signInWithGoogle();
  };
  return (
    <>
      <AuthHeader handleGoogleLogin={handleGoogleLogin} />
      
      {/* ヒーローセクション */}
      <section className="flex flex-col items-center justify-between mt-40 bg-white max-w-screen-xl mx-auto">
        <div className="hero-content flex-1 pr-8">
          <div>
            <h1 className="text-6xl font-bold leading-tight mb-6">
              毎日の自炊を
              <br />
              <span className="bg-gradient-to-r from-pink-400 via-teal-400 to-teal-500 bg-clip-text text-transparent">
                もっと楽しく
              </span>
            </h1>
            <p className="text-xl mb-8 text-gray-600">
              1000以上のレシピであなたの料理生活をサポート。
              <br />
              初心者から上級者まで、誰でも簡単に作れるレシピが満載。
            </p>
            <a
              href="#"
              className="primary-button inline-block py-3 px-8 rounded-full text-white font-semibold bg-gradient-to-r from-pink-400 via-teal-400 to-teal-500 transform transition-all hover:scale-105"
            >
              今すぐ始める
            </a>
            <a
              href="#"
              className="secondary-button inline-block py-3 px-8 rounded-full text-gray-800 font-semibold border-2 border-gray-300 transform transition-all hover:scale-105"
            >
              アプリの特徴
            </a>
          </div>
          <img
            src="https://images.unsplash.com/photo-1547592180-85f173990554?w=800&auto=format&fit=crop"
            alt="料理の画像"
            className="hero-image w-1/2 max-w-lg rounded-xl shadow-xl"
          />
        </div>
      </section>

      {/* アプリの特徴 */}
      <section id="#" className="py-20">
        <div className="max-w-screen-xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-12">アプリの特徴</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="feature-card bg-white p-6 rounded-lg shadow-lg text-center">
              <img
                src="https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=400&auto=format&fit=crop"
                alt="レシピ検索"
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">かんたん検索</h3>
              <p className="text-gray-600">
                材料や調理時間から最適なレシピを見つけられます
              </p>
            </div>
            <div className="feature-card bg-white p-6 rounded-lg shadow-lg text-center">
              <img
                src="https://images.unsplash.com/photo-1516824711718-9c1e683412ac?w=400&auto=format&fit=crop"
                alt="献立作成"
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">献立作成</h3>
              <p className="text-gray-600">
                AIが栄養バランスを考えた献立を提案します
              </p>
            </div>
            <div className="feature-card bg-white p-6 rounded-lg shadow-lg text-center">
              <img
                src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&auto=format&fit=crop"
                alt="レシピ保存"
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">お気に入り保存</h3>
              <p className="text-gray-600">
                気に入ったレシピをいつでも見返せます
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
