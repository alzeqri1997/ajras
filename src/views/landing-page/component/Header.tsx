import logoImage from '../../../assets/img/logo.svg'

const Header = () => {
  return (
    <header className='flex justify-between container mt-[24px] relative z-10' >
      <ul className=' md-max:mt-[100px] flex items-center' >
        <li><a href="#" className='font-semibold py-[10px] px-[32px] bg-primary text-white rounded-[35px] block ml-[41px]' >سجِّل رغبتك الآن</a></li>
        <li><a  href="#" className='font-semibold text-lightPrimary'>تسجيل الدخول</a></li>
      </ul>
      <a href="/"><img src={logoImage} alt="logo" /></a>
    </header>
  )
}


export default Header