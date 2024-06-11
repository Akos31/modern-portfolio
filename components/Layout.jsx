import { Sora } from "next/font/google";
import Head from "next/head";

import Header from "../components/Header";
import Nav from "../components/Nav";
import TopLeftImg from "../components/TopLeftImg";

// setup font
const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

const Layout = ({ children }) => {
  return (
    <main
      className={`page bg-site text-white bg-cover bg-no-repeat ${sora.variable} font-sora relative`}
    >
      {/* metadata */}
      <Head>
        <title>Kelemen Ákos | Portfólió</title>
        <meta
          name="description"
          content="Ha szükséged lenne egy weboldal- és szoftverfejlesztőre vagy éppen egy fotósra, keress bátran és közös munkával megvalósítjuk digitális álmaidat."
        />
        <meta
          name="keywords"
          content="kelemen, ákos, kelemen ákos, akos, kelemen akos, weboldal fejlesztés, weblap készítés, fotózás"
        />
        <meta name="author" content="AkosKele27" />
        <meta name="theme-color" content="#f13024" />
      </Head>

      <TopLeftImg />
      <Nav />
      <Header />

      {/* main content */}
      {children}
    </main>
  );
};

export default Layout;
