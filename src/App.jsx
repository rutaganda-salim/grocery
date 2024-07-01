import React from "react"
import Navigation from "./components/Navigation"
import "./App.css"
import HeroSection from "./components/Hero"
import Popular from "./components/popular"
import HotDealsPage from "./components/HotDeals"
import SummerSaleBanner from "./components/SummerBanner"
import ClientTestimonials from "./components/ClientsTestimonials"



function App() {

  return (
    <>
      <Navigation />
      <HeroSection />
      <Popular />
      <HotDealsPage />
      <SummerSaleBanner />
      <ClientTestimonials />
     
    </>
  )
}
export default App
