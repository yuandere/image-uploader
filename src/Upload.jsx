const Upload = ({ onFileChange }) => {
	return (
			<form className="container">
				<h3>Upload your image</h3>
				<p>File should be jpg, png etc...</p>
				<div className="uploadBox">
					<img src="./image.svg"></img>
					<p>Drag & Drop your image here</p>
				</div>
				<p>Or</p>
				<label htmlFor="upload" id="uploadBtn">
					Choose a file
				</label>
				<input
					type="file"
					name="upload"
          id="upload"
					accept=".jpg, .jpeg, .png, .gif"
					onChange={onFileChange}
				></input>
			</form>
	);
};

export default Upload;
