import React, { useRef, useState } from "react";
import Webcam from "react-webcam";

const WebcamCapture = () => {
	const webcamRef = useRef(null);
	const [imgSrc, setImgSrc] = useState(null);
	const [isWebcamOn, setIsWebcamOn] = useState(false);

	const capture = React.useCallback(() => {
		const imageSrc = webcamRef.current.getScreenshot();
		setImgSrc(imageSrc);
		stopWebcam();
	}, [webcamRef]);

	const confirmImage = () => {
		// Here you can handle the confirmed image (imgSrc)
		console.log(imgSrc);
	};

	const stopWebcam = () => {
		setIsWebcamOn(false);
	};

	return (
		<>
			{isWebcamOn && (
				<Webcam
					audio={false}
					ref={webcamRef}
					screenshotFormat="image/jpeg"
					videoConstraints={{
						width: 300,
						height: 300,
						facingMode: "user",
					}}
				/>
			)}
			<button onClick={capture}>Capture photo</button>
			{imgSrc && (
				<>
					<img src={imgSrc} width="250px" />
					<button onClick={confirmImage}>Confirm</button>
				</>
			)}
		</>
	);
};

export default WebcamCapture;
