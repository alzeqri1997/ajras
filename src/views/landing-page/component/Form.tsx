import logo from '../../../assets/img/logo-sm.svg'
import avatar from '../../../assets/img/landing-page/avatar.png'

const Form = () => {
  return (
    <div className='w-[569px] lg-max:w-full min-[855]: relative z basis-full border pr-[28px] pl-[33px] py-[26px] rounded-t-[15px] border-secondary bg-[#FCFEFA] '>
      <div className='flex' >
        <img src={avatar} alt="avatar" />
        <span className=' font-semibold text-[24px] sm-max:text-[18px] leading-[24px] block w-full text-center text-primary ' >اشتر الآن وادفع لاحقًا</span>
        <img src={logo} alt="avatar" />
      </div>

      {/* form */}
      <div className=' mt-[46px] '>
        <span className='block text-center text-[14px] leading-[24px] font-semibold text-primary' >قم بإنشاء التطبيق الخاص بك</span>
        <form className='max-w-[327px] mx-auto mt-[18px] ' action="">
          <input className='text-[12px] py-[10px] border border-opacity-30 focus:border-opacity-100 border-secondary w-full text-center outline-none rounded-[5px] placeholder:text-[#8FA8AB]' placeholder='أدخل رقم السجل التجاري الخاص بك' type="text" name="number" id="number " />
          <button className='text-white text-[14px] font-semibold bg-primary mt-[13px] py-[10px] w-full rounded-[5px]' type='submit' >ابدأ التطبيق الخاص بك</button>
        </form>
      </div>

      <div className='mt-[44px] flex gap-[16px] mb-[61px] [@media(max-width:862px)]:mb-[30px] sm-max:flex-wrap  '>
        <div className=' bg-[#FCFFF6] w-full py-[14px] px-[16px] border rounded-[10px] border-secondary shadow-[0_4px_14px_0px_rgba(0,0,0,0.06)]'>
          <span className=' block text-[18px] leading-[24px] font-semibold text-primary '>9,000 الريال السعودي</span>
          <span className='mt-[3px] block font text-[12px] leading-[24px] text-primary'>المبنى 13</span>
          <span className='mt-[3px] block font text-[12px] leading-[24px] text-primary'>طريق أنس بن مالك ، الملقا 13338 NS</span>
          <a href="#" className='font-semibold text-[14px] leading-[24px] text-primary'>قم بالدفع</a>
        </div>
        <div className=' py-[14px] w-full px-[16px] rounded-[10px] bg-white scale-125 [@media(max-width:862px)]:scale-100 origin-top-right shadow-[0_4px_94px_0px_rgba(0,0,0,0.13)]'>
          <span className=' block text-[18px] leading-[24px] font-semibold text-primary '>9,000 الريال السعودي</span>
          <span className='mt-[3px] block font text-[12px] leading-[24px] text-primary'>المبنى 13</span>
          <span className='mt-[3px] block font text-[12px] leading-[24px] text-primary'>طريق أنس بن مالك ، الملقا 13338 NS</span>
          <a href="#" className='font-semibold text-[14px] leading-[24px] text-primary'>قم بالدفع</a>
        </div>
      </div>
    </div>
  )
}

export default Form