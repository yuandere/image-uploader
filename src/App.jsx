import { useState } from 'react'
import reactLogo from './assets/react.svg'
import axios from 'axios'
import Upload from './Upload'
import './App.css'

function App() {
  const [selectedFile, setSelectedFile] = useState(null);

  const onFileChange = event => {
    setSelectedFile({ selectedFile: event.target.files[0] });
  };

  // const onFileUpload = () => {
  //   const formData = new FormData();

  //   formData.append(
  //     'myFile',
  //     selectedFile,
  //     selectedFile.name
  //   );

  // console.log(selectedFile);



  return (
    <div className="App">
        <Upload
          onFileChange={onFileChange}
        ></Upload>
    </div>
  )
}

export default App
