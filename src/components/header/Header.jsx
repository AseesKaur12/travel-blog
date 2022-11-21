import './Header.css'
import  mainImage from './travel-blog1.jpg'

export default function Header() {
  return (
    <div className='header'>
      <div className="headerTitles">
        <span className='headerTitlesm'>Travel Blog</span>
        {/* <span className='headerTitlesm'>Blog</span> */}
      </div>
      <img className='headerImg' src={mainImage} alt="" />
    </div>
  )
}
