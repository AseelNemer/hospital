import axios from 'axios';
import React, { useState, useRef } from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';


export default function Editpat() {
    const [file, setFile] = useState(null); // state for storing actual image
    const [previewSrc, setPreviewSrc] = useState(''); // state for storing previewImage
    const [state, setState] = useState({
      title: '',
      description: ''
    });
    const [errorMsg, setErrorMsg] = useState('');
    const [isPreviewAvailable, setIsPreviewAvailable] = useState(false); // state to show preview only for images
    const dropRef = useRef(); // React ref for managing the hover state of droppable area
  
    const handleInputChange = (event) => {
      setState({
        ...state,
        [event.target.name]: event.target.value
      });
    };
  
    const handleOnSubmit = async (event) => {
      event.preventDefault();
    };
  
    return (
    
        <form class="mt-4"
        action="/upload"
        method="POST"
        enctype="multipart/form-data"
      >
        <div class="form-group">
          <input
            type="file"
            name="file"
            id="input-files"
            class="form-control-file border"
          />
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    )
  };