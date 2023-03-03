import logoImage from '../../../assets/img/logo.svg'

const Header = () => {
  return (
    <header className='flex justify-between container mt-[24px]' >
      <ul className=' md-max:mt-[100px] flex items-center' >
        <li><a className='font-semibold py-[10px] px-[32px] bg-primary text-white rounded-[35px] block ml-[41px]' href="#">سجِّل رغبتك الآن</a></li>
        <li><a className='font-semibold text-lightPrimary' href="#">تسجيل الدخول</a></li>
      </ul>
      <img src={logoImage} alt="logo" />
    </header>
  )
}


export default Header