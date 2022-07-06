import Head from "next/head"
import Header from "../components/Header"
import "../styles/globals.css"

export default function App({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>Hacker News Clinet</title>
            </Head>
            <div className="flex flex-col gap-5" style={{ WebkitTapHighlightColor: 'transparent' }}>
                <Header />
                <Component {...pageProps} />
            </div>
        </>
    )
}