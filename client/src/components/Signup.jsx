import { useForm } from "react-hook-form";

function Signup() {
	const { register, handleSubmit, watch } = useForm({
		mode: "onChange",
	});

	const watchUserType = watch("userType");

	function handleRegistration(data) {
		console.log(data);
	}

	function handleError(errors) {
		console.log(errors);
	}

	const registerOptions = {
		name: { required: "Name is required" },
		email: {
			required: "Email is required",
			pattern: "[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$",
		},
		aadhaarNo: {
			required: "Aadhaar No is required",
			minLength: {
				value: 12,
				message: "Aadhaar No must have 12 numbers",
			},
			maxLength: {
				value: 12,
				message: "Aadhaar No must have 12 numbers",
			},
		},
		Password: {
			required: "Password is required",
			minLength: {
				value: 8,
				message: "Password must have at least 8 characters",
			},
		},
		aadhaarPhoto: { required: "Aadhaar photo is required" },
		userPhoto: { required: "User photo is required" },
		userType: { required: "User type is required" },
		partyName: { required: "Party name is required" },
	};

	return (
		<>
			<div className="bg-gradient-to-r from-blue-900 via-blue-700 to-blue-500 h-screen min-h-screen p-6 bg-gray-100 flex items-center justify-center">
				<div className="container max-w-screen-lg mx-auto">
					<form
						onSubmit={handleSubmit(handleRegistration, handleError)}
					>
						<div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
							<div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
								<div className="text-gray-600 font-bold">
									<p className="font-medium text-lg">
										Personal Details
									</p>
									<p>Please fill out all the fields.</p>
								</div>

								<div className="lg:col-span-2">
									<div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
										<div className="md:col-span-5">
											<label htmlFor="name">
												Full Name *
											</label>
											<input
												type="text"
												name="name"
												id="name"
												className="h-10 border border-blue-gray-400 mt-1 rounded px-4 w-full bg-gray-50"
												placeholder="Enter your name"
												required
												{...register(
													"name",
													registerOptions.name
												)}
											/>
										</div>

										<div className="md:col-span-3">
											<label htmlFor="email">
												Email *
											</label>
											<input
												type="email"
												name="email"
												id="email"
												className="h-10 border border-blue-gray-400 mt-1 rounded px-4 w-full bg-gray-50"
												placeholder="email@domain.com"
												required
												{...register(
													"email",
													registerOptions.email
												)}
											/>
										</div>

										<div className="md:col-span-2">
											<label htmlFor="aadhaarNo">
												Aadhaar No *
											</label>
											<input
												type="number"
												name="aadhaarNo"
												id="aadhaarNo"
												className="h-10 border border-blue-gray-400 mt-1 rounded px-4 w-full bg-gray-50"
												required
												{...register(
													"aadhaarNo",
													registerOptions.aadhaarNo
												)}
											/>
										</div>

										<div className="md:col-span-3">
											<label htmlFor="password">
												Password *
											</label>
											<input
												type="password"
												name="password"
												id="password"
												className="h-10 border border-blue-gray-400 mt-1 rounded px-4 w-full bg-gray-50"
												required
												{...register(
													"password",
													registerOptions.password
												)}
											/>
										</div>

										<div className="md:col-span-2">
											<label htmlFor="dateOfBirth">
												Birth Date
											</label>
											<input
												type="date"
												name="dateOfBirth"
												id="dateOfBirth"
												className="h-10 border border-blue-gray-400 mt-1 rounded px-4 w-full bg-gray-50"
												{...register("dateOfBirth")}
											/>
										</div>

										<div className="md:col-span-3">
											<label htmlFor="address">
												Address
											</label>
											<input
												type="text"
												name="address"
												id="address"
												className="h-10 border border-blue-gray-400 mt-1 rounded px-4 w-full bg-gray-50"
												placeholder=""
												{...register("address")}
											/>
										</div>

										<div className="md:col-span-2">
											<label htmlFor="zipcode">
												Pincode
											</label>
											<input
												type="text"
												name="zipcode"
												id="zipcode"
												className="transition-all flex items-center h-10 border border-blue-gray-400 mt-1 rounded px-4 w-full bg-gray-50"
												placeholder=""
												{...register("pincode")}
											/>
										</div>

										<div className="md:col-span-2">
											<label htmlFor="aadhaarPhoto">
												Aadhaar Photo *
											</label>
											<input
												type="file"
												accept="image/png, image/jpg, image/jpeg"
												name="aadhaarPhoto"
												id="aadhaarPhoto"
												className="transition-all flex items-center h-10 border border-blue-gray-400 mt-1 rounded px-2 py-2 w-full bg-gray-50"
												placeholder=""
												required
												{...register(
													"aadhaarPhoto",
													registerOptions.aadhaarPhoto
												)}
											/>
										</div>

										<div className="md:col-span-2">
											<label htmlFor="userPhoto">
												User Photo *
											</label>
											<input
												type="file"
												accept="image/png, image/jpg, image/jpeg"
												name="userPhoto"
												id="userPhoto"
												className="transition-all flex items-center h-10 border border-blue-gray-400 mt-1 rounded px-2 py-2 w-full bg-gray-50"
												placeholder=""
												required
												{...register(
													"userPhoto",
													registerOptions.userPhoto
												)}
											/>
										</div>

										<div className="md:col-span-5">
											<label htmlFor="userType">
												User Type *
											</label>
											<select
												id="userType"
												name="userType"
												className="h-full rounded-md border border-blue-gray-400 bg-transparent py-2 pl-2 pr-7  mx-4 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
												required
												{...register(
													"userType",
													registerOptions.userType
												)}
											>
												<option name="voters">
													Voters
												</option>
												<option name="candidates">
													Candidates
												</option>
											</select>
										</div>

										{watchUserType === "Candidates" ? (
											<>
												<div className="md:col-span-2">
													<label htmlFor="partyName">
														Party Name *
													</label>
													<input
														type="text"
														name="partyName"
														id="partyName"
														className="transition-all flex items-center h-10 border border-blue-gray-400 mt-1 rounded px-2 py-2 w-full bg-gray-50"
														placeholder="party name"
														required
														{...register(
															"partyName",
															registerOptions.partyName
														)}
													/>
												</div>

												<div className="md:col-span-3">
													<label htmlFor="partyLogo">
														Party Logo{" "}
													</label>
													<input
														type="file"
														accept="image/png, image/jpg, image/jpeg"
														name="partyLogo"
														id="partyLogo"
														className="transition-all flex items-center h-10 border border-blue-gray-400 mt-1 rounded px-2 py-2 w-full bg-gray-50"
														placeholder=""
														{...register(
															"partyLogo"
														)}
													/>
												</div>
											</>
										) : null}

										<div className="md:col-span-5 text-right mt-4 md:items-center sm:items-center">
											<div className="inline-flex items-end">
												<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mr-4 rounded">
													Submit
												</button>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</form>
				</div>
			</div>
		</>
	);
}

export default Signup;
