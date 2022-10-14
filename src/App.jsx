import { useState } from 'react';
import axios from 'axios';
import Upload from './Upload';
import Uploaded from './Uploaded';
import './App.css';

function App() {
	const [selectedFile, setSelectedFile] = useState(null);
	const [isFileChanged, setIsFileChanged] = useState(false);
	const [isUploadSuccess, setIsUploadSuccess] = useState(null);
	const [uploadError, setUploadError] = useState(null);
	const [fileURL, setFileURL] = useState('');
	const [isDragging, setIsDragging] = useState(false);

	const handleDrag = (event) => {
		event.preventDefault();
		event.stopPropagation();

		if (event.type === 'dragenter' || event.type === 'dragover') {
			setIsDragging(true);
		}	else if (event.type === 'dragleave') {
			setIsDragging(false);
		}
	};

	const handleDrop = (event) => {
		event.preventDefault();
		event.stopPropagation();
		setIsDragging(false);

		if (event.dataTransfer.files && event.dataTransfer.files[0]) {
			setSelectedFile(event.dataTransfer.files[0]);
			const formData = new FormData();
			formData.append('picture', event.dataTransfer.files[0]);
			handleUpload(formData);
		}
	};

	const onFileChange = (event) => {
		setSelectedFile(event.target.files[0]);
		const formData = new FormData();
		formData.append('picture', event.target.files[0]);
		handleUpload(formData);
	};

	const handleUpload = (formData) => {
		setIsFileChanged(true);
		axios
		// .post('http://localhost:5000/upload', formData, {
			.post('https://image-uploader-backend-production.up.railway.app/upload', formData, {
			headers: {
				'Content-Type': 'multipart/form-data',
			},
		})
		.then((res) => {
			// console.log(res);
			setIsUploadSuccess(true);
			setFileURL(res.data);
		})
		.catch((err) => {
			// console.log('error:', err);
			setIsUploadSuccess(false);
			setUploadError(err);
		});
	}

	return (
		<div className="App">
			{!isFileChanged ? (
				<Upload 
				onFileChange={onFileChange}
				isDragging={isDragging}
				handleDrag={handleDrag}
				handleDrop={handleDrop}
				></Upload>
			) : isUploadSuccess === null ? (
				  <div className="container containersm">
						<h3>Uploading...</h3>
						<img src="./loader.svg"></img>
					</div>
			) : isUploadSuccess ? (
				<Uploaded
					selectedFile={selectedFile}
					fileURL={fileURL}
					setIsFileChanged={setIsFileChanged}
					setIsUploadSuccess={setIsUploadSuccess}
				></Uploaded>
			) : (
				<div className='container error'>
					{uploadError.message}
					<p>Please use a valid file format (jpg/jpeg/png/gif) under 10mb</p>
					<button
						className="blueBtn"
						onClick={() => {
							setIsFileChanged(false);
							setIsUploadSuccess(null);
						}}
					>
						Go back
					</button>
				</div>
			)}
		</div>
	);
}

export default App;
