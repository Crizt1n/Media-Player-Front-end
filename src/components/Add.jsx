import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { uploadALLVideo } from '../services/allAPI';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Add({setUploadVideoStatus}) {
  const [video, setVideo]  = useState({
    id:"",
    caption:"",
    url:"",
    embedLink:""
  })

  const embedVideoLink =(e)=>{
    const {value}=e.target
    console.log(value.slice(-11));
    const link = `https://www.youtube.com/embed/${value.slice(-11)}`
    setVideo({...video,embedLink:link})
  }

  console.log(video);

  const handleUpload = async()=>{
    const {id,caption,url,embedLink}=video
    if(!id || !caption || !url || !embedLink){
      toast.warning('Please Fill the form completely')
    }
    else{
      const response = await uploadALLVideo(video)
      console.log(response);
      if (response.status>=200 && response.status<300){
        toast.success(`${response.data.caption} is successfully Uploaded`)

        //to change the value of uploadVideoStatus
        setUploadVideoStatus(response.data)

        //making the state  value none
        setVideo({
          id:"",
          caption:"",
          url:"",
          embedLink:""
        })

        //to close the chat
        handleClose()
      }
      else{
        console.log(response);
        toast.error('Something went Wrong Try Again')
      }
    }
  }


  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  

  return (
    <div>
        <div> <h4 onClick={handleShow} className='fs-5 btn btn-outline-warning '>Upload New Video  <i class="fa-solid fa-sm fa-cloud-arrow-up "></i></h4>
        </div>

        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false} 
          >
            <Modal.Header closeButton>
              <Modal.Title className='text-warning'>Upload Video <i class="fa-solid fa-sm fa-film"></i></Modal.Title>
            </Modal.Header>
          <Modal.Body>
            
            <form className='border border-secondary p-4 rounded'>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="text" placeholder="Enter Video ID" onChange={(e)=>setVideo({...video,id:e.target.value})} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="text" placeholder="Enter Video Caption" onChange={(e)=>setVideo({...video,caption:e.target.value})}  />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="text" placeholder="Enter Video Image URL" onChange={(e)=>setVideo({...video,url:e.target.value})} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="text" placeholder="Enter YouTube Video URL" onChange={embedVideoLink}/>
              </Form.Group>
              
            </form>

          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
            <Button onClick={handleUpload} variant="warning">Upload</Button>
          </Modal.Footer>
        </Modal>
        <ToastContainer position='bottom-center' theme='colored' autoClose={2000}/>
    </div>
  )
}

export default Add


//https://www.youtube.com/watch?v=e8B0AzmXPV8&list=RDe8B0AzmXPV8&start_radio=1

// <iframe width="1046" height="588" src="https://www.youtube.com/embed/e8B0AzmXPV8?list=RDe8B0AzmXPV8" title="First Class - Full Video | Kalank | Varun Dhawan, Alia Bhatt, Kiara | Arijit Singh | Pritam| Amitabh" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

//https://www.youtube.com/embed/e8B0AzmXPV8