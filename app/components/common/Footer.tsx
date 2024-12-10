import Link from "next/link";
import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { SiQiita } from "react-icons/si";

export const Footer = () => {
  return (
    <footer className="footer footer-center bg-base-300 text-base-content rounded p-10">
      <nav className="grid grid-flow-col gap-10">
        {/* プライバシーポリシーと利用規約は別途コンポーネントを作成予定 */}
        <Link className="link link-hover font-bold" href="#">
          ➡︎プライバシーポリシー
        </Link>
        <Link className="link link-hover font-bold" href="#">
          ➡︎利用規約
        </Link>
        {/* 押下した際にemailの導線に */}
        <Link className="link link-hover font-bold" href="#">
          ➡︎お問い合わせ(管理者)
        </Link>
      </nav>
      <nav>
        <div className="grid grid-flow-col gap-10">
          {/* 告知する際は各repや記事、専用アカのリンクに変える */}
          <Link href="https://github.com/hirohiro-sys" target="_blank">
            <FaGithub size={32} />
          </Link>
          <Link href="https://twitter.com/qhcSEiFAQg5454" target="_blank">
            <FaSquareXTwitter size={32} />
          </Link>
          <Link href="https://qiita.com/bisketoriba" target="_blank">
            <SiQiita size={32} />
          </Link>
        </div>
      </nav>
      <aside>
        <p>
          <i>©{new Date().getFullYear()} JISUI</i>
        </p>
      </aside>
    </footer>
  );
};
