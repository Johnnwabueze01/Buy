/*import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/layout";
import { CartProvider } from "../context/cartContext";
import { SessionProvider } from "next-auth/react";
import { AuthProvider } from "../context/authContext";


export default function App({ Component, pageProps }: AppProps) {
  return (
    <CartProvider>
    <SessionProvider session={pageProps.session}>
      <AuthProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AuthProvider>
    </SessionProvider>
    </CartProvider>
  );
}
*/

import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/layout";
import { CartProvider } from "../context/cartContext";
import { SessionProvider } from "next-auth/react";
import { AuthProvider } from "../context/authContext";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CartProvider>
      <SessionProvider session={pageProps.session}>
        <AuthProvider>
          <Head>
            <title>Buy Safe</title>
            <link rel="icon" href="/logo.svg" />
            {/* Add more meta tags if needed */}
          </Head>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </AuthProvider>
      </SessionProvider>
    </CartProvider>
  );
}
