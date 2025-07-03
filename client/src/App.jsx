import { useState } from 'react'

import './App.css'
import Filecomp from './Filecomp'
import axios from 'axios'
import { useEffect } from 'react'

function App() {
  const [files, setFiles] = useState([])
  const getdatafromserver=async()=>{
    const res = await axios.get("http://localhost:8080/api/file/get")
    setFiles(res.data)
  }

  useEffect(()=>{
    getdatafromserver()
  },[])
  return (
    <>
      <div>
       <Filecomp getdatafromserver={getdatafromserver}/>
      </div>
     
        {files.map((el)=>(
      <div key={el._id}>
        <img src={`http://localhost:8080/${el.filename}`} alt={el._id} />
      </div>
        ))}
    
    </>
  )
}

export default App
