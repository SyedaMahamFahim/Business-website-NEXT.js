import React from "react";
import Link from "next/link";
const Header = () => {
  return (
    <>
      <Link href={"/about"}>About</Link>
      <br />

      <Link href={"/contact"}>Contact</Link>
      <br />
      <Link href={"/login"}>Login</Link>
      <br />
    </>
  );
};

export default Header;
