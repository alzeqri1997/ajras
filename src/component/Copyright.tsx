type propsTypes = {
  color?: string
}

const Copyright = ({ color = '#005F60' }: propsTypes) => {
  return (
    <div className={`text-[${color}] flex w-fit mx-auto mt-[20px] mb-[15px]`}>
      <span className="text-[14px] leading-[7px]">ajras.com</span>
      <span className="mx-[3px] self-center">
        <svg  width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path  d="M5.5 11C2.46735 11 0 8.53265 0 5.5C0 2.46735 2.46735 0 5.5 0C8.53265 0 11 2.46735 11 5.5C11 8.53265 8.53265 11 5.5 11ZM5.5 0.687503C2.84634 0.687503 0.687503 2.84634 0.687503 5.5C0.687503 8.15366 2.84634 10.3125 5.5 10.3125C8.15366 10.3125 10.3125 8.15366 10.3125 5.5C10.3125 2.84634 8.15366 0.687503 5.5 0.687503Z" fill="currentColor" />
            <path d="M5.50001 8.25003C3.98369 8.25003 2.75 7.01636 2.75 5.50001C2.75 3.98366 3.98366 2.75 5.50001 2.75C6.24558 2.75 6.94316 3.0434 7.46483 3.57614L6.97338 4.05684C6.58231 3.65736 6.0593 3.43748 5.50001 3.43748C4.36268 3.43748 3.4375 4.36265 3.4375 5.49999C3.4375 6.63732 4.36268 7.5625 5.50001 7.5625C6.05895 7.5625 6.58196 7.34262 6.97338 6.94313L7.46416 7.42453C6.94281 7.95695 6.24526 8.25 5.50001 8.25003Z" fill="currentColor" />
        </svg>
      </span>
      <span className="text-[14px] ing leading-[7px]">جميع الحقوق محفوظة </span>
    </div>
  )
}

export default Copyright