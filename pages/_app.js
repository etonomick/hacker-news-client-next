import Head from "next/head"
import "../styles/globals.css"

export default function App({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>Hacker News Clinet</title>
            </Head>
            <div className="flex flex-col p-5 gap-5" style={{ WebkitTapHighlightColor: 'transparent' }}>
                <h1 className="text-2xl font-medium">Hacker News</h1>
                <Component {...pageProps} />
            </div>
        </>
    )
}