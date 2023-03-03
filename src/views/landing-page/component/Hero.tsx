import Button from "../../../component/Button"
import Form from "./Form"


const Hero = () => {
  return (
    <section className="container mt-[60px] flex mb-[10000px] " >
      <Form />
      <div className="mr-[76px] basis-full relative z-10 " >
        <h1 className="font-semibold text-[42px] leading-[67.2px] text-primary " >نحن نقدم حلولًا لمواجهة تحديات التأجير من خلال خطط الدفع المرنة والمستدامة لاستئجار الشركات</h1>
        <p className=" font-medium text-[18px] leading-[30px] mt-[19px] text-[#011F1F]" >AJRAS تساعد المؤسسات الصغيرة والمتوسطة على التغلب على مشاكل التأجير من خلال كسر الدفع المقدم في المقدمة إلى أقساط شهرية تناسب القدرات المالية التجارية</p>
        <div className="flex gap-[12px] mt-[40px]">
          <Button text="سجِّل رغبتك الآن" classes=" px-[38px] bg-primary text-white" />
          <Button text="تسجيل الدخول" classes=" px-[28px] bg-[#F8FAEA] text-[#556F21] border border-[#D3E173] bg-[#F8FAEA]" />
        </div>
      </div>
    </section>
  )
}

export default Hero