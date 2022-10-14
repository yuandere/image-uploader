const Upload = ({ onFileChange, isDragging, handleDrag, handleDrop }) => {
	return (
		<form
			className={isDragging ? 'container dragging' : 'container'}
			onDragEnter={handleDrag}
		>
			{isDragging && (
				<div
					id="dragscreen"
					onDragEnter={handleDrag}
					onDragLeave={handleDrag}
					onDragOver={handleDrag}
					onDrop={handleDrop}
				></div>
			)}
			<h3>Upload your image</h3>
			<p className="textsm">(File should be jpg, png etc...)</p>
			<div className="uploadBox">
				<img src="./image.svg"></img>
				<p>Drag & Drop your image here</p>
			</div>
			<p>Or</p>
			<label htmlFor="upload" className="blueBtn">
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
