import React from "react"
import Navigation from "./components/Navigation"
import "./App.css"
import HeroSection from "./components/Hero"
import Popular from "./components/popular"
import HotDealsPage from "./components/HotDeals"
import SummerSaleBanner from "./components/SummerBanner"
import ClientTestimonials from "./components/ClientsTestimonials"
import InstagramSection from "./components/InstagramSection"
import Footer from "./components/Footer"



function App() {

  return (
    <>
      <Navigation />
      <HeroSection />
      <Popular />
      <HotDealsPage />
      <SummerSaleBanner />
      <ClientTestimonials />
      <InstagramSection />
      <Footer />
     
    </>
  )
}
export default App
