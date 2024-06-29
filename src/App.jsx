import React from "react"
import Navigation from "./components/Navigation"
import "./App.css"
import HeroSection from "./components/Hero"
import Popular from "./components/popular"
import HotDealsPage from "./components/HotDeals"



function App() {

  return (
    <>
      <Navigation />
      <HeroSection />
      <Popular />
      <HotDealsPage />
     
    </>
  )
}
export default App
