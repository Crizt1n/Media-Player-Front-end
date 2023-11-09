import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { CardBody } from 'react-bootstrap'
import { useState } from 'react';
import { addToHistory, deleteVideos } from '../services/allAPI';

function Video({displayVideo,setDeleteVideoStatus}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = async() =>{
    setShow(true)

    const {caption, embedLink}= displayVideo
    const today = new Date
    console.log(today);
    const timeStamp =new Intl.DateTimeFormat('en-GB',{
      year:'numeric',
      month:"2-digit",
      day:"2-digit",
      hour:"2-digit",
      minute:'2-digit',
      second:"2-digit"

    }).format(today)
    console.log(timeStamp);

    let videoDetails={
      caption,
      embedLink,
      timeStamp
    }
    await addToHistory(videoDetails)
  } 

  const removeVideo =async(id)=>{
    const response = await deleteVideos(id)
    console.log(response);
    setDeleteVideoStatus(true)
  }
  const dragStated=(e, id)=>{
    console.log(`card no:${id} started dragging`);
    
    //for data transfer
    e.dataTransfer.setData("VideoID", id)
  }

  return (
    <div >

        <div class="card card mt-3 justify
       -content-evenly" draggable onDragStart={(e)=>dragStated(e,displayVideo?.id)}  style={{ height:"300px"}}>
          <img src={displayVideo.url} style={{height:"285px"}}  class="card-img-top" alt="..." onClick={handleShow}/>
          <div class=" d-flex justify-content-between align-items-center p-2" style={{height:"50px"}} >
            <h6 className='card-title'>{displayVideo.caption}</h6>
            <button onClick={()=>removeVideo(displayVideo?.id)} class="btn btn-outline-danger"><i class="fa-solid fa-trash-can fa-sm" ></i></button>

          </div>
        </div>

       {/* <div className="card mt-3 justify
       -content-evenly w-100" draggable onDragStart={(e)=>dragStated(e,displayVideo?.id)}  style={{height:"300px"}}>
          <img src={displayVideo.url} style={{height:"285px"}} class="card-img-top" alt="..." onClick={handleShow}/>

          
         
          <CardBody >
          <div class="d-flex justify-content-between align-items-center" style={{height:"35px"}}>

                <h5 class="card-title">{displayVideo.caption}</h5>
                <button onClick={()=>removeVideo(displayVideo?.id)} class="btn btn-outline-danger" ><i class="fa-solid fa-trash-can fa-sm" ></i></button>
                </div>
          </CardBody>
         

        </div>
 */}
        <Modal
        show={show}
        onHide={handleClose}
        animation={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>{displayVideo.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <iframe width="100%" height="588" src={`${displayVideo.embedLink}?autoplay=1`} title="" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </Modal.Body>
       
      </Modal>
    </div>
  )
}

export default Video

