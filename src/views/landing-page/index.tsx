
// import components
import Header from "./component/Header"
import Hero from "./component/Hero"

// import styles
import '../../assets/css/landingPage.css'
import BgGradient from "./component/BgGradient"
import Features from "./component/Features"


const LandingPage = () => {
  return (
    <>
      <BgGradient>
        <Header />
        <Hero />
      </BgGradient>
      <Features/>
    </>
  )
}

export default LandingPage