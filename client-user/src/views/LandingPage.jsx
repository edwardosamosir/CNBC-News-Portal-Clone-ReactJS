import React from "react";
import NewsTable from "../components/NewsTable";
import MarketBanner from "../components/MarketBanner";
import NewsCarousel from "../components/NewsCarousel";




export default function LandingPage() {


  return (
    <>

      <MarketBanner />
      <NewsCarousel />
      <NewsTable />

    </>
  );

}

