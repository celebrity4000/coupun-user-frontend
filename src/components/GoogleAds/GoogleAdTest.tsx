import { useEffect, useRef } from "react";

declare global {
    interface Window {
        adsbygoogle: unknown[];
    }
}

const GoogleAdTest = () => {
    const adRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Check if the Google Ads script is already added
        const existingScript = document.querySelector(
            'script[src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7301333954588533"]'
        );

        if (!existingScript) {
            const script = document.createElement("script");
            script.src =
                "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7301333954588533";
            script.async = true;
            script.crossOrigin = "anonymous"; // Allow cross-origin resource sharing
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
            // If the script is already loaded
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
        <div
            ref={adRef}
            className="adsbygoogle"
            style={{ display: "block" }}
            data-ad-client="ca-pub-7301333954588533"
            data-ad-slot="5558653240"
            data-ad-format="auto"
            data-full-width-responsive="true"
        ></div>
    );
};

export default GoogleAdTest;
