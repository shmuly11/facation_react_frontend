import React, {useState} from 'react'
import UploadPhoto from './UploadPhoto'
import './App.css';
// import { WidgetLoader, Widget } from 'react-cloudinary-upload-widget'

function App() {
  
  const [photo, setPhoto] = useState(null)
  
  return (
    <div >
      <UploadPhoto setPhoto={setPhoto} photo={photo}/>
    </div>
  );
}

export default App;
