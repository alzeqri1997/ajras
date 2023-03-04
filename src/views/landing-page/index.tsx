
// import components
import Header from "./component/Header"
import Hero from "./component/Hero"

// import styles
import '../../assets/css/landingPage.css'
import BgGradient from "./component/BgGradient"
import Features from "./component/Features"
import Banner from "./component/Banner"
import Footer from "./component/Footer"


const LandingPage = () => {
  return (
    <>
      <BgGradient>
        <Header />
        <Hero />
      </BgGradient>
      <Features/>
      <Banner />
      <Footer/>
    </>
  )
}

export default LandingPage