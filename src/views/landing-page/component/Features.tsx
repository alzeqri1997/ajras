import Card from "./Card"
import featureImg1 from '../../../assets/svg/landing-page/featureImage1.svg'
import featureImg2 from '../../../assets/svg/landing-page/featureImage2.svg'
import featureImg3 from '../../../assets/svg/landing-page/featureImage3.svg'


const Features = () => {
  return (
    <section className="container mt-[104px]" >
      <span className="font-semibold text-[20px] leading-[24px] block text-center text-[#24754F]" >فوائد المنصة</span>
      <h2 className="font-bold text-[44px] leading-[52.8px] text-center text-[#0E2E1F]" >أنواع مختلفة من الفوائد لدينا!</h2>
      <div className="flex justify-between gap-[19px] mt-[60px]" >
        <Card img={featureImg1} alt={"ajras features platform"} topic={'تمكين أصحاب الأعمال من إدارة التدفق النقدي بفعالية'} />
        <Card img={featureImg2} alt={"ajras features platform"} topic={'تقليل الضغط المالي على الشركات الناجمة عن دفع دفق دقيض كبير في التأجير'} />
        <Card img={featureImg3} alt={"ajras features platform"} topic={'قلل من النفقات للبدء وتوسيع الأعمال التجارية'} />
      </div>
    </section>
  )
}

export default Features