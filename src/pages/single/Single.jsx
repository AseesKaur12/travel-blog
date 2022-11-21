import Post from '../../components/post/Post'
import Sidebar from '../../components/sidebar/Sidebar'
import SinglePost from '../../components/singlePost/SinglePost'
import Hemkund from '../../components/singlePost/Hemkund'
import './Single.css'

export default function Single() {
  return (
    <div className='single'>
        <SinglePost/>
        {/* <Hemkund/> */}
      {/* <Post/> */}
      <Sidebar/>
    </div>
  )
}
