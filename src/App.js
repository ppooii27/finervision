import React, { useState, useRef } from 'react';
import moment from 'moment';
import Section from './components/Section'

function App() {
	const [isExpanded, setExpanded] = useState([
		{ id: 1, isExpanded: true },
		{ id: 2, isExpanded: false },
		{ id: 3, isExpanded: false },
	]);
	const firstnameRef = useRef();
	const surnameRef = useRef();
	const emailRef = useRef();
	const telephoneRef = useRef();
	const genderRef = useRef();
	const dayRef = useRef();
	const monthRef = useRef();
	const yearRef = useRef();
	const commentRef = useRef();
	const currentYear = new Date().getFullYear();

	const handleNext = (section) => {
		if (isExpanded.length === section.id) {
			addCommentHandler();
			return;
		}

		if (!validation(section.id)) return;

		const currentIdx = section.id - 1;
		const nextIdx = section.id;
		setExpanded((currentState) => {
			currentState[currentIdx] = {
				...currentState[currentIdx],
				isExpanded: !currentState[currentIdx].isExpanded,
			};
			currentState[nextIdx] = {
				...currentState[nextIdx],
				isExpanded: !currentState[nextIdx].isExpanded,
			};

			return [...currentState];
		});
	};

	const addCommentHandler = async () => {
		if (!validation()) return;

		const comments = {
			firstname: firstnameRef.current.value,
			surname: surnameRef.current.value,
			email: emailRef.current.value,
			telephone: telephoneRef.current.value,
			gender: genderRef.current.value,
			dob: `${dayRef.current.value}-${monthRef.current.value}-${yearRef.current.value}`,
			comments: commentRef.current.value,
		};
		const response = await fetch('http://127.0.0.1:8000/comments', {
			method: 'POST',
			body: JSON.stringify(comments),
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		});

		const data = await response
			.json()
			.then(alert('New comment has been inserted'));
	};

	const validation = (sectionIdx = isExpanded.length) => {
		let isValid = false;
		if (sectionIdx === 1) {
			const firstname = firstnameRef.current.value;
			const surname = surnameRef.current.value;
			const email = emailRef.current.value;

			if (
				firstname.trim().length === 0 ||
				surname.trim().length === 0 ||
				email.trim().length === 0
			) {
				alert(
					'Please enter a valid first name and surname and email (non-empty values)'
				);
				return;
			}

			console.log(
				email,
				email.search(
					/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/
				)
			);
			if (
				email.search(
					/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/
				) < 0
			) {
				alert('Please enter a valid email (john@abc.com)');
				return;
			}
			isValid = true;
		}

		if (sectionIdx === 2) {
			const telephone = telephoneRef.current.value;
			const gender = genderRef.current.value;
			const day = (+dayRef.current.value).toLocaleString('en-US', {
				minimumIntegerDigits: 2,
				useGrouping: false,
			});
			const month = (+monthRef.current.value).toLocaleString('en-US', {
				minimumIntegerDigits: 2,
				useGrouping: false,
			});
			const year = yearRef.current.value;
			const dob = `${day}-${month}-${year}`;

			if (
				telephone.trim().length === 0 ||
				gender.trim().length === 0 ||
				day.trim().length === 0 ||
				month.trim().length === 0 ||
				year.trim().length === 0
			) {
				alert(
					'Please enter a valid telephone number and gender and date of birth (non-empty values)'
				);
				return;
			}

			if (
				telephone.search(
					/^(?:0|\(?\+44\)?\s?|0044\s?)[1-79](?:[\.\-\s]?\d\d){4}$/
				) < 0
			) {
				alert('Please enter a valid UK telephone number');
				return;
			}

			if (!moment(dob, 'DD-MM-YYYY', true).isValid()) {
				alert('Please enter a valid date of birth (DD-MM-YYYY)');
				return;
			}
			isValid = true;
		}

		if (sectionIdx === isExpanded.length) {
			const comments = commentRef.current.value;

			if (comments.trim().length === 0) {
				alert('Please enter a valid comment (non-empty values)');
				return;
			}
			isValid = true;
		}
		return isValid;
	};
	return (
		<>
			<Section
				title="Step 1: Your details"
				defaultExpanded={isExpanded[0]}
				handleNext={handleNext}
			>
				<div className="input-container">
					<div>
						<label htmlFor="firstname">First Name</label>
						<input type="text" id="firstname" ref={firstnameRef} />
					</div>
					<div>
						<label htmlFor="surname">Surname</label>
						<input type="text" id="surname" ref={surnameRef} />
					</div>
					<div>
						<label htmlFor="email">Email Address:</label>
						<input type="email" id="email" ref={emailRef} />
					</div>
				</div>
			</Section>
			<Section
				title="Step 2: More comments"
				defaultExpanded={isExpanded[1]}
				handleNext={handleNext}
			>
				<div className="input-container">
					<div>
						<label>Telephone number</label>
						<input
							type="tel"
							pattern="^(?:0|\(?\+44\)?\s?|0044\s?)[1-79](?:[\.\-\s]?\d\d){4}$"
							ref={telephoneRef}
						/>
					</div>
					<div>
						<label>Gender</label>
						<select name="gender" ref={genderRef}>
							<option value="male">Male</option>
							<option value="female">Female</option>
						</select>
					</div>
					<div>
						<label>Date of birth</label>
						<input type="number" min="1" max="31" ref={dayRef} />
						<input type="number" min="1" max="12" ref={monthRef} />
						<input
							type="number"
							min="1900"
							max={currentYear}
							ref={yearRef}
						/>
					</div>
				</div>
			</Section>
			<Section
				title="Step 3: Final comments"
				defaultExpanded={isExpanded[2]}
				handleNext={handleNext}
			>
				<div className="input-container">
					<div>
						<label>Comments</label>
						<textarea
							rows="8"
							cols="30"
							ref={commentRef}
						></textarea>
					</div>
				</div>
			</Section>
		</>
	);
}

export default App;
