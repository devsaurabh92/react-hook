import React,{useState,useEffect} from 'react'

import axios from 'axios'
function DataFetchingTwo() {
  const [post, setPost] = useState({});
  const [id, setId] = useState(1);
  const [idFromBtn,setIdFrmBtn] = useState(1);

  const getPost = ()=>{
    setIdFrmBtn(id);
  }
  useEffect(() => {
   axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
   .then(res=>{
     console.log(res)
     setPost(res.data)
   })
   .catch(err=>{
     console.log(err)
   })
  }, [idFromBtn])
  return (
    <div>
    <input type="text" value={id} onChange={e=>setId(e.target.value)} />
    <button type="button" onClick={getPost}>Fetch Post</button>
  <div>{post.title}</div>
    </div>
  )
}

export default DataFetchingTwo
