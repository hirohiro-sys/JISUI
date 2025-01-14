import Link from "next/link";
import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { SiQiita } from "react-icons/si";

export const Footer = () => {
  return (
    <div className="bg-gray-900">
      <footer className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div className="mb-16 grid grid-cols-2 gap-12 pt-10 md:grid-cols-4 lg:grid-cols-6 lg:gap-8 lg:pt-12">
          <div className="col-span-full lg:col-span-2">
            <div className="mb-4 lg:-mt-2">
              <Link
                href="#"
                className="inline-flex items-center gap-2 text-xl font-bold text-gray-100 md:text-2xl"
                aria-label="logo"
              >
                JISUI
              </Link>
            </div>

            <p className="mb-6 text-gray-400 sm:pr-8">
              〜自炊をもっと楽しく〜
            </p>
            <div className="flex gap-4">
              <Link
                href="#"
                target="_blank"
                className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600"
              >
                <FaGithub size={30}/>
              </Link>

              <Link
                href="#"
                target="_blank"
                className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600"
              >
                <FaSquareXTwitter size={30}/>
              </Link>

              <Link
                href="#"
                target="_blank"
                className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600"
              >
                <SiQiita size={30}/>
              </Link>
            </div>
          </div>

          <div>
            {/* 項目を追加する際は以下のdivタグを複製する */}
            <div className="mb-4 font-bold uppercase tracking-widest text-gray-100">
              Legal
            </div>

            <nav className="flex flex-col gap-4">
              <div>
                <Link
                  href="#"
                  className="text-gray-400 transition duration-100 hover:underline active:text-indigo-600"
                >
                  利用規約
                </Link>
              </div>

              <div>
                <Link
                  href="#"
                  className="text-gray-400 transition duration-100 hover:underline active:text-indigo-600"
                >
                  プライバシーポリシー
                </Link>
              </div>
            </nav>
          </div>
        </div>

        <div className="border-t border-gray-800 py-8 text-center text-sm text-gray-400">
          ©2025 JISUI
        </div>
      </footer>
    </div>
  );
};
