import './SinglePost.css'
import hemkund from './hemkundsahib.jpg'

export default function Hemkund() {
  return (
    <>
    <div className='singlePost'>
     <div className="singlePostWrapper">
        <img src={hemkund} alt="" className="singlePostImg" />
        <h1 className='singlePostTitle'>
            Lorem ipsum dolor, sit amet .
            <div className="singlePostEdit">
            <i class="singlePostIcon fa-solid fa-pen-to-square"></i>
            <i class="singlePostIcon fa-solid fa-trash"></i>
            </div>
        </h1>
        <div className="singlePostInfo">
            <span className="singlePostAuthor">
                Author: <b>Safak</b>
            </span>
            <span className="singlePostDate">1 hour ago</span>
        </div>
        <p className='singlePostDesc'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem, earum cumque fuga hic ad inventore animi autem cum consequuntur laboriosam error provident ea nihil quo modi soluta perspiciatis voluptates reprehenderit possimus unde quis asperiores facilis! Corporis, dolorum totam. Nobis, commodi optio magni dolorem praesentium sunt eius vel libero maiores ipsum quis doloremque quasi soluta tenetur, cupiditate id repellat officiis modi recusandae numquam doloribus a amet dolore deleniti! Perferendis, corporis vitae! Ipsam ipsa quas iste dolorum magni mollitia optio in iure!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, accusamus asperiores. Possimus iste nesciunt dolore labore fugiat ratione consequuntur molestiae! Distinctio labore aperiam ipsa asperiores repellat ipsam, repudiandae facilis quibusdam dolorum, recusandae tempore. Maiores.
        </p>
     </div>
    </div>
    </>
  )
}

