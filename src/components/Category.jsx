import React, { useEffect } from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AddCategory, ViewCategory, deleteCategory, getAVideo, updateCategory } from '../services/allAPI';
import { Row,Col } from 'react-bootstrap';
import Video from './Video';

function Category() {
  const[Category, setCategory]=useState({
    id:"",
    categoryname:"",
    allVideos:[]
  
  })
  const[ListCategory,setlistCategory]=useState([])
  const[deletelistcategory, setdeletelistcategory]= useState(false)

  const getAllCategory= async()=>{
    const response = await ViewCategory()

    const {data}=response
    setlistCategory(data)
  }
  console.log(ListCategory);

  useEffect(()=>{
    getAllCategory()
    setdeletelistcategory(false)
  },[Category,deletelistcategory])

  const removeCatgeory= async(id)=>{
    const response =await deleteCategory(id)
    setdeletelistcategory(true)
  }


  const handleUpload = async()=>{
    const {categoryname}=Category
    if(!categoryname){
      let body ={
        categoryname,
        allVideos:[]
      }
      toast.warning('Please Fill the form completely')
    }
    else{
      const response = await AddCategory(Category)
      console.log(response);
      if (response.status>=200 && response.status<300){
        toast.success(`${response.data.categoryname} Category is successfully Added`)

     

        //making the state value none
        setCategory({
          id:"",
          categoryname:"",
          allVideos:[]
        
        })

        //to close the chat
        handleClose()
      }
      else{
        console.log(response);
        toast.error('Something went Wrong Try Again(Try again Later)')
      }
    }
  }
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    //dragover evnetlistener
    const dragover =(e)=>{
      //this will prevent reload so that data that we send from video.jsx wont be lost
      e.preventDefault()
      /* console.log('inside dragover'); */

    }

    const videoDrop= async(e,id)=>{
      console.log(`dropped inside the ${id}`);
          
      //to get the videoid that is send from video component
      const videoid = e.dataTransfer.getData('VideoID')
      console.log(videoid);

      //api to get the particular video that is dragged
      const {data} = await getAVideo(videoid)
      console.log(data)

      //to find the particular category with the specified id 
      let selectedCategory = ListCategory?.find(item=>item.id===id)
      console.log(selectedCategory);

      //data is added to the allvideos array in the particular category with specified id
      selectedCategory.allVideos.push(data)
      console.log(selectedCategory);

      await updateCategory(id,selectedCategory)

    }



  return (
    <>
      <div className='d-grid w-25 p-3 h-100 ms-5 '>
          <button onClick={handleShow} className='btn btn-warning '> <i class="fa-solid fa-plus fa-sm fa-beat-fade"></i> &nbsp;Add New category </button>

  {ListCategory.length>0?
    ListCategory?.map((List) =>(
            <div className='me-5 border border-secondary rounded w-100 mt-3 p-3'>
              <div className=' d-flex justify-content-between align-items-center' droppable onDragOver={(e)=>dragover(e)} onDrop={(e)=>videoDrop(e,List?.id)}>
                <h6 className='text-center'>{List.categoryname}</h6>
                <button onClick={()=> removeCatgeory(List?.id)} className='btn btn-outline-danger'><i class="fa-solid fa-trash-can " ></i></button>


              </div>
              <Row>
                <Col sm={12}>
                 {
                  List.allVideos?.length>0?
                  List.allVideos.map(card=>(<Video displayVideo={card}/>))
                  : <p>Nothing to display</p>
                  }
                </Col>
              </Row>
            </div>
            ))
            :
            <tr colspan='4'>NO DATA</tr>
          }


      </div>
      <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false} 
          >
            <Modal.Header closeButton>
              <Modal.Title className='text-warning'><i class="fa-solid fa-folder-plus fa-sm"></i> Add New Category </Modal.Title>
            </Modal.Header>
          <Modal.Body>
            <p>Please fill the form completely</p>
            
            <form className='border border-secondary p-4 rounded'>
           
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control onChange={(e)=>setCategory({...Category,categoryname:e.target.value})} type="text" placeholder="Enter Category Name" />
              </Form.Group>
           
            </form>

          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
            <Button onClick={handleUpload} variant="warning">Add</Button>
          </Modal.Footer>
        </Modal>
        <ToastContainer position='bottom-center' theme='colored' autoClose={2000}/>
    </>
  )
}

export default Category