const Uploaded = ({ selectedFile, fileURL, setIsFileChanged, setIsUploadSuccess }) => {
  return (
    <div className="container">
      <div className="statusicon">
        <span className="material-icons">
          done
        </span>
      </div>
      <h3>Uploaded Successfully!</h3>
      <div id='imagepreview'>
        <img src={fileURL}></img>
      </div>
      {/* <p>Filename: {selectedFile.name}</p>
      <p>Filetype: {selectedFile.type}</p>
      <p>Size in bytes: {selectedFile.size}</p> */}
      <div className="linkBar">
        <input type='text' className="url" value={fileURL} readOnly></input>
        <button>Copy Link</button>
      </div>
      <button id="uploadBtn" 
        onClick={ ()=> {
          setIsFileChanged(false);
          setIsUploadSuccess(null)}
        }>
        Do It Again!
      </button>
    </div>
  )
}

export default Uploaded