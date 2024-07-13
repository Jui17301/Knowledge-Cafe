import PropTypes from 'prop-types';
import { FaBookmark } from "react-icons/fa";



const Blog = ({blog,handleAddToBookmark,handleMarkAsRead}) => {
const {id,title, cover,author,author_img,posted_date,reading_time,hashtags}=blog;
  return (
    <div className='mb-20 mt-10 space-y-4'>
      <img className='w-full mb-8 rounded-3xl' src={cover} alt={`Cover picture of the ${title}`} />
      <div className='flex justify-between mb-4 '>
        <div className='flex '>
          <img className='w-14 ' src={author_img} alt="" />
          <div className='ml-6'>
            <h3 className='text-xl mb-3'>{author}</h3>
            <p>{posted_date} </p>
          </div>
        </div>
        <div  className='flex items-center justify-center '>
          <div>
          <span>{reading_time} min read</span></div>
          <button
          onClick={()=>handleAddToBookmark(blog)}
          className='ml-2 text-red-600 text-2xl'><FaBookmark /></button>
        </div>
      </div>
      <h2 className='text-4xl'>{title}</h2>
      <p>
        {
          hashtags.map((hash,index)=>
          <span key={index} className='mr-2'><a href="">#{hash}</a></span>)
        }
      </p>
      <button 
      onClick={()=>handleMarkAsRead(id,reading_time)}
      className='text-purple-800 font-bold underline'>Mark As Read</button>
    </div>
  )
}
Blog.propTypes={
  blog: PropTypes.object.isRequired,
  handleAddToBookmark : PropTypes.func,
  handleMarkAsRead : PropTypes.func
}

export default Blog
