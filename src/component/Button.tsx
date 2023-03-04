

// types
type propTypes = {
  classes?: string,
  link?: string,
  text:string
}

const Button = ({classes, link = "#", text}: propTypes) => {
  return (
    <a href={link} className={ `${classes} inline-block text-center font-semibold py-[20px] rounded-[35px] text-[18px] leading-[24px] shadow-[0_8px_50px,rgba(0,0,0,0.06)]` } >{text}</a>
  )
}

export default Button