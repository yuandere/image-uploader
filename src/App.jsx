import { useState } from 'react';
import axios from 'axios';
import Upload from './Upload';
import Uploading from './Uploading';
import Uploaded from './Uploaded';
import './App.css';

function App() {
	const [selectedFile, setSelectedFile] = useState(null);
	const [isFileChanged, setIsFileChanged] = useState(false);
	const [isUploadSuccess, setIsUploadSuccess] = useState(null);
	const [uploadError, setUploadError] = useState(null);
	const [fileURL, setFileURL] = useState('');

	const onFileChange = (event) => {
		setSelectedFile(event.target.files[0]);
		setIsFileChanged(true);
		const formData = new FormData();
		formData.append('picture', event.target.files[0]);
		axios
			.post('http://localhost:5000/upload', formData, {
				headers: {
					'Content-Type': 'multipart/form-data',
				},
			})
			.then((res) => {
				console.log(res);
				res.status === 200
					? setIsUploadSuccess(true)
					: setIsUploadSuccess(false);
				setFileURL(res.data);
			})
			.catch((err) => {
				console.log('error:', err);
				setUploadError(err);
			});
	};

	return (
		<div className="App">
			{!isFileChanged ? (
				<Upload onFileChange={onFileChange}></Upload>
			) : isUploadSuccess === null ? (
				<Uploading></Uploading>
			) : isUploadSuccess ? (
				<Uploaded
					selectedFile={selectedFile}
					fileURL={fileURL}
					setIsFileChanged={setIsFileChanged}
					setIsUploadSuccess={setIsUploadSuccess}
				></Uploaded>
			) : (
				<div>
					<p>An error has occurred.</p>
					{uploadError ? (
						<div>{uploadError}</div>
					) : null}
					<button
						id="uploadBtn"
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
