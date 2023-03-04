import React from 'react'
import Button from '../../../component/Button'

const Banner = () => {
  return (
    <section className='container mt-[94px] ' >
      <div className='bg-pattern bg-cover rounded-[52.5px] bg-[#005F60] py-[116px] px-[20px] '>
        <div >
          <h2 className='h1 text-white text-center' >اشتر الآن وادفع لاحقًا</h2>
          <span className=' font-medium text-[30px] leading-[50px] text-center text-white block mt-[20px]' >لا داعي للانتظار بعد الآن لشراء أحد الأصول</span>
          <Button classes='text-primary bg-white px-[30px] mt-[53px] mx-auto w-fit !block !py-[15px]' text='سجِّل رغبتك الآن' />
        </div>
      </div>

    </section>
  )
}

export default Banner