import { useEffect } from "react";
import type { AppProps } from "next/app";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
    useEffect(() => {
        // Remove the server-side injected CSS.
        const jssStyles = document.querySelector("#jss-server-side");
        if (jssStyles) {
            jssStyles.parentElement?.removeChild(jssStyles);
        }
    }, []);

    return (
        <>
            <Head>
                <title>My App</title>
                <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
            </Head>
            <header>
                {/* Add your header component here */}
            </header>
            <main>
                <Component {...pageProps} />
            </main>
            <footer>
                {/* Add your footer component here */}
            </footer>
        </>
    );
}

export default MyApp;
