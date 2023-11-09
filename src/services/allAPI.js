// api to upload video

import Video from "../components/Video"
import { commonAPI } from "./commonAPI"
import { serverURL } from "./serverURL"

//Api to upload video 
export const uploadALLVideo = async(reqbody)=>{
    return await commonAPI('POST',`${serverURL}/videos`,reqbody)
}

//api to get all video

export const getAllVideos = async()=>{
   return await commonAPI('GET',`${serverURL}/videos`,"")
}

//to delete a video

export const deleteVideos = async(id)=>{
    return await commonAPI('DELETE',`${serverURL}/videos/${id}`,{})
 }

 //Add Watch History

 export const addToHistory = async(videoDetails)=>{
    return await commonAPI('POST',`${serverURL}/history`,videoDetails)
 }

 //api to get history

 export const ViewHistory = async()=>{
    return await commonAPI('GET',`${serverURL}/history`,"")
}

//api to delete history

export const deleteHistory = async(id)=>{
    return await commonAPI('DELETE',`${serverURL}/history/${id}`,{})
}

//api to add category

export const AddCategory =  async(addDetails)=>{
    return await commonAPI('POST',`${serverURL}/category`,addDetails)
}

//api to view category 

export const ViewCategory = async()=>{
    return await commonAPI('GET',`${serverURL}/category`,"")
}

//api to delete category 

export const deleteCategory = async(id)=>{
    return await commonAPI('DELETE',`${serverURL}/category/${id}`,{})
}


//api to get a video into category

export const getAVideo = async(id)=>{
    return await commonAPI('GET',`${serverURL}/videos/${id}`,"")
}

//api to update allvideos in the backend to update the category
export const updateCategory = async(id,body)=>{
    return await commonAPI('PUT',`${serverURL}/category/${id}`,body)
}