
// import components
import Header from "./component/Header"
import Hero from "./component/Hero"

// import styles
import '../../assets/css/landingPage.css'
import BgGradient from "./component/BgGradient"


const LandingPage = () => {
  return (
    <>
      <BgGradient>
        <Header />
        <Hero />
      </BgGradient>
    </>
  )
}

export default LandingPage