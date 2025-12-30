import React from "react";
import Logo from "../logo/logo";
import Link from "next/link";
import style from "./navbar.module.css";

export default function Navbar() {
  return (
    // replace everything in between the <header> & <header /> tags
    // with your navbar code from your earlier milestones
    // NOTE: we use "class" in HTML but React is quirky so we have to 
    // change all the "class" to "className"
    <header className={style.navbar}>
      <Logo />
      <nav className={style.navlist}>
        <Link href="/blogs"><h2>Blogs</h2></Link>
        <Link href="/portfolio"><h2>Portfolio</h2></Link>
        <Link href="/contact"><h2>Contact Me</h2></Link>
      </nav>
    </header>
  );
}