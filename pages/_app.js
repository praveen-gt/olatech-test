import { useEffect } from "react";

import "../styles/globals.css"

function MyApp({ Component, pageProps }) {
    useEffect(() => {
        import('tw-elements');
    }, []);
    return (
            <Component {...pageProps} />

    )
}

export default MyApp