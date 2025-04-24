import { useEffect, useRef } from "react";

declare global {
    interface Window {
        adsbygoogle: unknown[];
    }
}

const GoogleAdTest = () => {
    const adRef = useRef<HTMLModElement>(null);

    useEffect(() => {
        const existingScript = document.querySelector(
            'script[src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"]'
        );

        if (!existingScript) {
            const script = document.createElement("script");
            script.src = "//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";
            script.async = true;
            document.body.appendChild(script);

            script.onload = () => {
                if (window.adsbygoogle && Array.isArray(window.adsbygoogle)) {
                    try {
                        window.adsbygoogle.push({});
                    } catch (e) {
                        console.error("AdsbyGoogle Error:", e);
                    }
                }
            };
        } else {
            if (window.adsbygoogle && Array.isArray(window.adsbygoogle)) {
                try {
                    window.adsbygoogle.push({});
                } catch (e) {
                    console.error("AdsbyGoogle Error:", e);
                }
            }
        }
    }, []);

    return (
        <ins
            ref={adRef}
            className="adsbygoogle"
            style={{ display: "block" }}
            data-ad-client="ca-pub-3940256099942544"
            data-ad-slot="6300978111"
            data-ad-format="auto"
            data-full-width-responsive="true"
        ></ins>
    );
};

export default GoogleAdTest;
