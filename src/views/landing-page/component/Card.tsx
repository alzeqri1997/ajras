type propsTypes = {
  img: string,
  alt?: string,
  topic: string
}

const Card = ({ img, alt, topic }: propsTypes) => {
  return (
    <div className="rounded-[20px] bg-[#FAFCF7] grow basis-full flex flex-col items-center justify-center py-[40px] px-[12px] " >
      <img className="w-fit" src={img} alt={alt} />
      <h3 className=" font-semibold text-[24px] text-center text-primary mt-[38px]" >{topic}</h3>
    </div>
  )
}

export default Card