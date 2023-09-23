
import localFont from '@next/font/local'


const clashDisplayBold = localFont({ src: '../public/fonts/ClashDisplay-Bold.woff2' })
// const clashDisplayLight = localFont({ src: '../public/fonts/ClashDisplay-Light.woff2'})
// const clashDisplayXtraLight = localFont({ src: '../public/fonts/ClashDisplay-Extralight.woff2'})

const Headings = ({ title, isLogo = false, isHero = false, spanText, className, isForm = false }) => {
  return (
    isLogo && (<h2 className={`${clashDisplayBold.className} ${className} text-white `}>{...title}<span className='text-custom-pink'>{spanText}</span></h2>) ||
    isHero && (<h2 className={`${clashDisplayBold.className} ${className} text-white`}>{...title}</h2>) ||
    isForm && (<h2 className={`${clashDisplayBold.className} ${className} text-custom-pink`}>{...title} <br /> <span className='text-custom-pink'>{spanText}</span></h2>)
    ||
    (<h2 className={`${clashDisplayBold.className} ${className} text-white`}>{...title} <br /> <span className='text-custom-pink'>{spanText}</span></h2>)
  )
}

export default Headings