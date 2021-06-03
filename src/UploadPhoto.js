import React from 'react'


function UploadPhoto({setPhoto}) {
    let myWidget = window.cloudinary.createUploadWidget({
      cloudName: process.env.REACT_APP_CLOUDINARY_CLOUD_NAME, uploadPreset: 'o1dsquje', cropping: false},
      (error, result) => { handleUpload(error, result) })
  
    function openWidget(){
      myWidget.open()
    }  
  
    function handleUpload(error, result){
      if(result.event === "success"){
        removeBackground(result.info.url)
      }
    }

    function removeBackground(url){
        fetch("https://background-removal.p.rapidapi.com/remove", {
	    "method": "POST",
	    "headers": {
		"content-type": "application/x-www-form-urlencoded",
		"x-rapidapi-key": process.env.REACT_APP_BG_REMOVAL,
		"x-rapidapi-host": "background-removal.p.rapidapi.com"
	    },
	    "body":`image_url=${url}` 
        })
        .then(res=> res.json())
        .then( data => setPhoto(data.response.image_url))
    }
    return (
      <div >
        <button onClick={openWidget}>upload</button>
      </div>
    );
  }
  
  export default UploadPhoto;
