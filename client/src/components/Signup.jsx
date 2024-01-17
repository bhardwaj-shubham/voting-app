import { useState, useRef } from "react";

const Signup = () => {
	const [formData, setFormData] = useState({
		aadharNo: "",
		password: "",
		name: "",
		dob: "",
		area: "",
		pincode: "",
		partyName: "",
		partyLogo: null,
		userPhoto: null,
		aadharCardPhoto: null,
	});

	const [webcamActive, setWebcamActive] = useState(false);
	const videoRef = useRef(null);
	const canvasRef = useRef(null);

	const handleChange = (e) => {
		const { name, value, files } = e.target;
		setFormData((prevData) => ({
			...prevData,
			[name]: files ? files[0] : value,
		}));
	};

	const startWebcam = async () => {
		try {
			const stream = await navigator.mediaDevices.getUserMedia({
				video: true,
			});
			setWebcamActive(true);

			if (videoRef.current) {
				videoRef.current.srcObject = stream;
			}
		} catch (error) {
			console.error("Error accessing webcam:", error);
		}
	};

	const stopWebcam = () => {
		setWebcamActive(false);
		if (videoRef.current && videoRef.current.srcObject) {
			const tracks = videoRef.current.srcObject.getTracks();
			tracks.forEach((track) => track.stop());
		}
	};

	const capturePhoto = () => {
		if (videoRef.current && canvasRef.current) {
			const video = videoRef.current;
			const canvas = canvasRef.current;
			canvas.width = video.videoWidth;
			canvas.height = video.videoHeight;
			canvas
				.getContext("2d")
				.drawImage(video, 0, 0, video.videoWidth, video.videoHeight);

			const userPhotoDataUrl = canvas.toDataURL("image/jpeg");
			setFormData((prevData) => ({
				...prevData,
				userPhoto: userPhotoDataUrl,
			}));

			stopWebcam();
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		// Add your form submission logic here
		console.log(formData);
	};

	return (
		<div>
			<h1>Signup Form</h1>
			<form onSubmit={handleSubmit}>
				<label>
					Aadhar No:
					<input
						type="text"
						name="aadharNo"
						value={formData.aadharNo}
						onChange={handleChange}
					/>
				</label>

				<label>
					Password:
					<input
						type="password"
						name="password"
						value={formData.password}
						onChange={handleChange}
					/>
				</label>

				<label>
					Name:
					<input
						type="text"
						name="name"
						value={formData.name}
						onChange={handleChange}
					/>
				</label>

				<label>
					Date of Birth:
					<input
						type="date"
						name="dob"
						value={formData.dob}
						onChange={handleChange}
					/>
				</label>

				<label>
					Address:
					<input
						type="text"
						name="area"
						value={formData.area}
						onChange={handleChange}
					/>
				</label>

				<label>
					Pincode:
					<input
						type="text"
						name="pincode"
						value={formData.pincode}
						onChange={handleChange}
					/>
				</label>

				<label>
					Party Name:
					<input
						type="text"
						name="partyName"
						value={formData.partyName}
						onChange={handleChange}
					/>
				</label>

				<label>
					Party Logo:
					<input
						type="file"
						name="partyLogo"
						onChange={handleChange}
					/>
				</label>

				<label>
					Aadhar Card Photo:
					<input
						type="file"
						name="aadharCardPhoto"
						onChange={handleChange}
					/>
				</label>

				<label>
					User Photo:
					{webcamActive ? (
						<div>
							<video ref={videoRef} autoPlay playsInline />
							<button type="button" onClick={capturePhoto}>
								Capture Photo
							</button>
							<button type="button" onClick={stopWebcam}>
								Stop Webcam
							</button>
						</div>
					) : (
						<button type="button" onClick={startWebcam}>
							Start Webcam
						</button>
					)}
				</label>

				<canvas ref={canvasRef} style={{ display: "none" }} />

				<label>
					Aadhar Card Photo:
					<input
						type="file"
						name="aadharCardPhoto"
						accept="image/*"
						onChange={handleChange}
						required
					/>
				</label>

				<button type="submit">Sign Up</button>
			</form>
		</div>
	);
};
export default Signup;
