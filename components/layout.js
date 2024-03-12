import Head from "next/head";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

export default function Layout({ title, children }) {
  return (
    <>
      <Head>
        <title>{title ? title + " - Babacar's Portfolio" : "Babacar's Portfolio"}</title>
        <meta name="description" content="Babacar Thiam's Portfilio" />
      </Head>

      <div className="flex min-h-screen flex-col justify-between">
        <header>
          <nav className="flex h-16 items-center px-4 justify-between shadow-md">
            <Link href="/" className=" text-lg font-bold">
              Babacar Thiam
            </Link>
            <div className="flex items-center z-10 m-5">
              <Link href="/" className="p2 hover:text-blue-500 text-lg">
                <FaGithub />
              </Link>
              <Link href="/" className="p-2 hover:text-blue-500">
                <FaLinkedin />
              </Link>
              <Link href="/" className="p-2 hover:text-blue-500">
                <FaInstagram />
              </Link>
              <Link href="/" className="p-2 hover:text-blue-500">
                <FaFacebook />
              </Link>
            </div>
          </nav>
        </header>

        <main className="container m-auto mt-4 px-4">{children}</main>

        <footer className="flex h-10 justify-center items-center shadow-inner">
          <p>All Rights Reserved &copy;</p>
        </footer>
      </div>
    </>
  );
}
