import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import { BsMedium } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsStackOverflow } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { FaAngellist } from "react-icons/fa";
import Link from "next/link";
import { useRouter } from "next/router";
import { FormattedMessage, useIntl } from "react-intl";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ dir }) {
  return (
    <>
      <Head>
        <title>Amir Najafi</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="alternate" href="http://example.com" hrefLang="x-default" />
        <link rel="alternate" href="http://example.com" hrefLang="en" />
        <link rel="alternate" href="http://example.com/ar" hrefLang="ar" />
        <link rel="alternate" href="http://example.com/fa" hrefLang="fa" />
        <link rel="alternate" href="http://example.com/tr" hrefLang="tr" />
      </Head>

      <div className="min-h-screen mx-10 sm:mx-96 " dir={dir}>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:mt-36 ">
          <div className="card bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <img
                src="/firstpost.jpg"
                alt="amir najafi"
                className="rounded-md"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Amir Najafi</h2>
              <p>Web developer</p>
              <div className="card-actions">
                <div className="grid grid-cols-7 gap-8">
                  <div className="tooltip" data-tip="Instagram">
                    <BsInstagram className="cursor-pointer text-primary" />
                  </div>
                  <div className="tooltip" data-tip="LinkedIn">
                    <BsLinkedin className="cursor-pointer text-primary" />
                  </div>
                  <div className="tooltip" data-tip="Medium">
                    <BsMedium className="cursor-pointer text-primary" />
                  </div>
                  <div className="tooltip" data-tip="StackOverflow">
                    <BsStackOverflow className="cursor-pointer text-primary " />
                  </div>
                  <div className="tooltip" data-tip="Twitter">
                    <BsTwitter className="cursor-pointer text-primary" />
                  </div>
                  <div className="tooltip" data-tip="Wellfound">
                    <FaAngellist className="cursor-pointer text-primary" />
                  </div>
                  <div className="tooltip" data-tip="Github">
                    <BsGithub className="cursor-pointer text-primary" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <img src="/firstpost.jpg" alt="Shoes" className="rounded-md" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">
                Physics, Seismology, Theatre, Film, and Coding
              </h2>
              <p>My story as a self-taught web developer</p>
              <div className="card-actions">
                <button className="btn btn-primary ">Read Post</button>
              </div>
            </div>
          </div>
        </div>
        <div className="card shadow-xl mt-16 p-10">
          <ul>
            <li className="mb-10">
              <Link href="/">
                <h1 className="font-bold text-lg">Post 1</h1>
              </Link>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
              deserunt autem ut quis dicta quo, dolorem sit eligendi! Labore,
              eaque.
            </li>
            <li className="mb-10">
              <Link href="/">
                <h1 className="font-bold text-lg">Post 2</h1>
              </Link>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
              deserunt autem ut quis dicta quo, dolorem sit eligendi! Labore,
              eaque.
            </li>
            <li className="mb-10">
              <Link href="/">
                <h1 className="font-bold text-lg">Post 3</h1>
              </Link>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
              deserunt autem ut quis dicta quo, dolorem sit eligendi! Labore,
              eaque.
            </li>
            <li className="mb-10">
              <Link href="/">
                <h1 className="font-bold text-lg">Post 4</h1>
              </Link>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
              deserunt autem ut quis dicta quo, dolorem sit eligendi! Labore,
              eaque.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
