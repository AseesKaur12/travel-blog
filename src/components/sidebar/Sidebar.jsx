import './Sidebar.css'
import sideimg from './avatar.jpg'

export default function Sidebar() {
  return (
    <div className='sidebar'>
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img className='sidebarImg' src={sideimg} alt="" />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem magni sit molestias sunt quas minima velit omnis eaque neque, numquam, rerum quo iusto dolor incidunt officiis eius sint in! Commodi!</p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">life</li>
          <li className="sidebarListItem">music</li>
          <li className="sidebarListItem">style</li>
          <li className="sidebarListItem">sports</li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
            <i className="sidebarIcon fa-brands fa-square-facebook"></i>
            <i className="sidebarIcon fa-brands fa-linkedin"></i>
            <i className="sidebarIcon fa-brands fa-instagram"></i>
            <i className="sidebarIcon fa-brands fa-twitter"></i>
        </div>
      </div>
    </div>
  )
}
