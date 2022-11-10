import axios from 'axios';
 
import React,{Component} from 'react';


export default function Editpat() {
    const onFileChange = (e) => {
    
        // Create an object of formData
        let files = e.target.files
        console.warn("data file",files)
      
       
      };
    return (
        <>
            <h2>EDIT Patient</h2>
             <input type="file" name="file" onChange={(e)=>onFileChange(e)} />
            {/* <button onClick={onFileUpload} >Add file </button> */}
            </>
    )

}
