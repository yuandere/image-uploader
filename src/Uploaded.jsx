const Uploaded = ({ selectedFile,	fileURL,	setIsFileChanged,	setIsUploadSuccess }) => {
	return (
		<div className="container">
			<div className="statusicon">
				<span className="material-icons">done</span>
			</div>
			<h3>Uploaded Successfully!</h3>
			<div id="imagepreview">
				<img src={fileURL}></img>
			</div>
			{/* <p>Filename: {selectedFile.name}</p>
      <p>Filetype: {selectedFile.type}</p>
      <p>Size in bytes: {selectedFile.size}</p> */}
			<div className="linkBar">
				<input
					type="text"
					className="url"
					size="22"
					value={fileURL}
					readOnly
					onClick={(event) => event.target.select()}
				></input>
				<button
					className="blueBtn whiteBtn"
					onClick={(event) => {
						navigator.clipboard.writeText(fileURL).then(
							() => {
								// console.log('copied to clipboard');
								event.target.innerText = 'Copied!';
							},
							() => {
								// console.log('clipboard copy failed');
							}
						);
					}}
				>
					Copy Link
				</button>
			</div>
			<button
				className="blueBtn"
				onClick={() => {
					setIsFileChanged(false);
					setIsUploadSuccess(null);
				}}
			>
				Do it again!
			</button>
		</div>
	);
};

export default Uploaded;
