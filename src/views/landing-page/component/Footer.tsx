import logoImage from '../../../assets/img/logo.svg'
import facebook from '../../../assets/svg/social-media/facebook.svg'
import twitter from '../../../assets/svg/social-media/twitter.svg'
import google from '../../../assets/svg/social-media/google.svg'
import instagram from '../../../assets/svg/social-media/instagram.svg'
import Copyright from '../../../component/Copyright'


const Footer = () => {
  return (
    <footer className='container mt-[95px]'>
      <div className='flex justify-between items-center mb-[32px] '>
        <ul className='flex items-center gap-[12px]'>
          <li><a className='bg-[#BB6BD9] bg-opacity-10 hover:bg-opacity-20 w-[48px] h-[48px] rounded-full flex justify-center items-center' href="#"><img src={instagram} alt="instagram" /></a></li>
          <li><a className='bg-[#EBEBEB] bg-opacity-50 hover:bg-opacity-100 w-[48px] h-[48px] rounded-full flex justify-center items-center' href="#"><img src={google} alt="google" /></a></li>
          <li><a className='bg-[#E7F7FD] bg-opacity-50 hover:bg-opacity-100 w-[48px] h-[48px] rounded-full flex justify-center items-center' href="#"><img src={twitter} alt="twitter" /></a></li>
          <li><a className='bg-[#E7F7FD] bg-opacity-50 transition-opacity hover:bg-opacity-100 w-[48px] h-[48px] rounded-full flex justify-center items-center' href="#"><img src={facebook} alt="facebook" /></a></li>
        </ul>
        <ul className='flex'>
          <li><a href="#" className='text-[18px] leading-[24px] text-[#404040] ml-[72px]' >سياسة الخصوصية</a></li>
          <li><a href="#" className='text-[18px] leading-[24px] text-[#404040]' >الشروط والشرط</a></li>
        </ul>
        <a href="/"><img src={logoImage} alt="logo" /></a>
      </div>

      {/* divider */}
      <div className='h-[1px] w-full bg-[#404040] opacity-10 rounded-full'  ></div>
      

      <Copyright/>

    </footer>
  )
}

export default Footer