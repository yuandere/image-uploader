const Upload = ({  }) => {
  return (
    <div className="container">
      <h3>Upload your image</h3>
      <p>File should be jpg, png etc...</p>
      <div className="uploadBox">
        <img src="./image.svg"></img>
        <p>Drag & Drop your image here</p>
      </div>
      <p>Or</p>
      <label htmlFor='upload' id="uploadBtn">Choose a file</label>
      <input type='file' id="upload" accept="image/*"></input>
    </div>
  )
}

export default Upload