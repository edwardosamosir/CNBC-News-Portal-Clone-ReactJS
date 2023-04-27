import React, { useEffect } from 'react';

export default function MarketBanner() {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-tickers.js';
        script.async = true;
        script.innerHTML = JSON.stringify({
            "symbols": [
                {
                    "proName": "FX_IDC:EURUSD",
                    "title": "EUR/USD"
                },
                {
                    "description": "DAX",
                    "proName": "XETR:DAX"
                },
                {
                    "description": "FTSE",
                    "proName": "SPREADEX:FTSE"
                },
                {
                    "description": "CAC",
                    "proName": "SPREADEX:CAC"
                },
                {
                    "description": "FTSE MIB*",
                    "proName": "INDEX:FTSEMIB"
                },
                {
                    "description": "STOXX 50",
                    "proName": "EUREX:FESX1!"
                }
            ],
            "colorTheme": "light",
            "isTransparent": false,
            "showSymbolLogo": true,
            "locale": "en",

        });
        const container = document.getElementById('tradingview-widget-container__widget');
        container.innerHTML = '';
        container.appendChild(script);

        return () => {
            container.innerHTML = '';
        };
    }, []);

    return (
        <>
            <section style={{ marginTop: "100px", marginBottom: "70px", width:"1280px" }} className="MarketsBanner-container" id="HomePageInternational-MarketsBanner-1" data-test="marketsBanner-0" data-analytics="HomePageInternational-marketsBanner-1-0">
                <div className="MarketsBannerMenu-marketBannerMenuWrapper" style={{ width:"1280px" }}>
                    <div className="MarketsBannerMenu-container" style={{ width:"1280px" }}>
                        <button className="MarketsBannerMenu-marketOption">EUR</button>
                        <button className="MarketsBannerMenu-marketOption">ASIA</button>
                        <button className="MarketsBannerMenu-marketOption">ASIA FX</button>
                        <button className="MarketsBannerMenu-marketOption">PRE-MKT</button>
                        <button className="MarketsBannerMenu-marketOption">CRYPTO</button>
                        <button className="MarketsBannerMenu-marketOption">OIL</button>
                        <button className="MarketsBannerMenu-marketOption">GOLD</button>
                        <button className="MarketsBannerMenu-marketOption">BONDS</button>
                        <button className="MarketsBannerMenu-marketOption">EUR FX</button>
                        <button className="MarketsBannerMenu-marketOption">US</button></div>
                </div>
                <div className="MarketsBanner-main" style={{ width:"1280px" }}>
                    <div className="MarketsBannerMenu-container" style={{ width:"1280px" }}>
                        <div className="tradingview-widget-container" style={{ marginTop: "20px" }}>
                            <div id="tradingview-widget-container__widget" style={{ width: "1280px", margin: "auto" }}></div>
                            <div className="tradingview-widget-copyright">
                                <a href="https://www.tradingview.com/markets/" rel="noopener" target="_blank"></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
};


