import { useState } from 'react'
import logoImage from '../../../assets/img/logo.svg'

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  return (
    <header className=' container mt-[24px] relative z-50' >
      <div className='flex items-center justify-between'>
        <button onClick={()=> setShowMobileMenu(!showMobileMenu)} className=' sm:hidden'>
          <div id='nav-icon' >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
        <ul className=' sm-max:hidden flex items-center' >
          <li className='ml-[41px]'><a href="#" className='font-semibold py-[10px] px-[32px] bg-primary text-white rounded-[35px] block ' >سجِّل رغبتك الآن</a></li>
          <li><a href="#" className='font-semibold text-lightPrimary'>تسجيل الدخول</a></li>
        </ul>
        <a href="/"><img src={logoImage} alt="logo" /></a>
      </div>

      {/* Mobile Menu */}
      <div className={` ${showMobileMenu ? '' : 'hidden'} w-full absolute z-50 left-0 top-[-24px] py-[24px] bg-white`} >
        <div className='container'>
          <div className='flex justify-between items-center'>
            <button onClick={()=> setShowMobileMenu(!showMobileMenu)} >
              <div id='nav-icon' className={`open-icon`} >
                <span></span>
                <span></span>
                <span></span>
              </div>
            </button>
            <a href="/"><img src={logoImage} alt="logo" /></a>
          </div>
          <ul className=' flex flex-col items-center mt-[24px] justify-center' >
            <li>
              <a href="#" className='font-semibold text-lightPrimary'>تسجيل الدخول</a>
            </li>
            <li className='mt-[21px] w-full text-center'>
              <a href="#" className='font-semibold py-[10px] px-[32px] bg-primary text-white rounded-[35px] block ' >سجِّل رغبتك الآن</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}


export default Header