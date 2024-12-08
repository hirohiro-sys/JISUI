import Link from "next/link";
import React from "react";

export const Header = () => {
  return (
    <header>
      <div className="navbar">
        <Link href="/" className="text-2xl">
          JISUI
        </Link>
      </div>
    </header>
  );
};
