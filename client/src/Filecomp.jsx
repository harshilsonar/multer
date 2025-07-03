import React, { useState } from 'react'
import axios from 'axios'

//http://localhost:8080/api/file/upload
const Filecomp = ({getdatafromserver}) => {
    const [file, setFile] = useState(null);
  const handlesubmit = async () => {
    try {
      const res= await axios.post("http://localhost:8080/api/file/upload",{file}, {
            
            headers: {
                "Content-Type": "multipart/form-data",
            },
           
        });
        getdatafromserver()
        if (!res.ok) {
            
            throw new Error("response stauts is not ok");
        }
    } catch (error) {
        
        console.error(error);
    }
       
    };
    return (
        <div>
            <input type="file" onChange={(e) => setFile(e.target.files[0])} />
            <button onClick={handlesubmit}>Submit</button>
        </div>
    )
}

export default Filecomp