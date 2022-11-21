import './Post.css'
import { Link } from 'react-router-dom'
import amritsar from './amritsar.jpg'

export default function Post() {
  return (
    <>
    <div className='post'>
     <img className='postImg' src={amritsar} alt="" />
    <div className="postInfo">
        <div className="postCats">
            {/* <span className="postCat">AMRITSAR</span> */}
            <Link className="postCat" to="/amritsar">AMRITSAR</Link>
        </div>
        <span className="postTitle">Lorem ipsum dolor sit amet</span>
        <hr/>
        <span className="postDate">1 hour ago</span>
    </div>
    <p className='postDesc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam error assumenda voluptas in officiis mollitia eius numquam temporibus delectus, beatae perspiciatis omnis expedita nam hic, sequi cupiditate cumque et aliquam minima natus, perferendis quidem nostrum fugit quisquam. Beatae aliquam explicabo impedit nobis magni quod laboriosam optio voluptates corporis sint culpa voluptatum rerum quo, libero voluptatibus ea recusandae ipsam voluptate est? Vero aliquid sint unde?</p>
    </div>
    </>
    
  )
}
