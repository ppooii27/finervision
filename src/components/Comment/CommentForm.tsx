import React, { useState, useRef } from 'react';
import moment from 'moment';
import Section from '../Section/Section';
import ExpandItem from '../../models/expandItem';
import { FormContainer, Card, InputContainer } from '../../styles/comment';

const initState: Array<ExpandItem> = [
	{ id: 1, isExpanded: true },
	{ id: 2, isExpanded: false },
	{ id: 3, isExpanded: false },
];

const CommentForm: React.FC = () => {
	const [isExpanded, setExpanded] = useState<ExpandItem[]>(initState);
	const formRef = useRef<HTMLFormElement>(null);
	const firstnameRef = useRef<HTMLInputElement>(null);
	const surnameRef = useRef<HTMLInputElement>(null);
	const emailRef = useRef<HTMLInputElement>(null);
	const telephoneRef = useRef<HTMLInputElement>(null);
	const genderRef = useRef<HTMLSelectElement>(null);
	const dayRef = useRef<HTMLInputElement>(null);
	const monthRef = useRef<HTMLInputElement>(null);
	const yearRef = useRef<HTMLInputElement>(null);
	const commentRef = useRef<HTMLTextAreaElement>(null);
	const currentYear = new Date().getFullYear();

	const handleNext = (section: ExpandItem) => {
		if ([...isExpanded].pop()?.id === section.id) {
			addCommentHandler();
			return;
		}

		if (!validation(section.id)) return;

		const currentIdx = section.id - 1;
		const nextIdx = section.id;
		setExpanded((currentState) => {
			const tempState = [...currentState];
			tempState[currentIdx] = {
				...tempState[currentIdx],
				isExpanded: !tempState[currentIdx].isExpanded,
			};
			tempState[nextIdx] = {
				...tempState[nextIdx],
				isExpanded: !tempState[nextIdx].isExpanded,
			};

			return [...tempState];
		});
	};

	const addCommentHandler = async () => {
		if (!validation()) return;

		const comments = {
			firstname: firstnameRef.current!.value,
			surname: surnameRef.current!.value,
			email: emailRef.current!.value,
			telephone: telephoneRef.current!.value,
			gender: genderRef.current!.value,
			dob: `${dayRef.current!.value}-${monthRef.current!.value}-${
				yearRef.current!.value
			}`,
			comments: commentRef.current!.value,
		};
		const response = await fetch('http://127.0.0.1:8000/comments', {
			method: 'POST',
			body: JSON.stringify(comments),
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		});

		await response.json().then((data) => {
			if ('id' in data && typeof data.id === 'number') {
				alert('New comment has been inserted');
				clearup();
			}
		});
	};

	const validation = (sectionIdx = isExpanded.length) => {
		let isValid = false;
		if (sectionIdx === 1) {
			const firstname = firstnameRef.current!.value;
			const surname = surnameRef.current!.value;
			const email = emailRef.current!.value;

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
			const telephone = telephoneRef.current!.value;
			const selectedGender =
				genderRef.current!.options[genderRef.current!.selectedIndex]
					.value;
			const day = (+dayRef.current!.value).toLocaleString('en-US', {
				minimumIntegerDigits: 2,
				useGrouping: false,
			});
			const month = (+monthRef.current!.value).toLocaleString('en-US', {
				minimumIntegerDigits: 2,
				useGrouping: false,
			});
			const year = yearRef.current!.value;
			const dob = `${day}-${month}-${year}`;

			if (
				telephone.trim().length === 0 ||
				selectedGender.trim().length === 0 ||
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
			const comments = commentRef.current!.value;

			if (comments.trim().length === 0) {
				alert('Please enter a valid comment (non-empty values)');
				return;
			}
			isValid = true;
		}
		return isValid;
	};

	const clearup = () => {
		formRef.current!.reset();
		setExpanded([...initState]);
	};
	return (
		<>
			<FormContainer ref={formRef}>
				<Card>
					<Section
						title="Step 1: Your details"
						defaultExpanded={isExpanded[0]}
						handleNext={handleNext}
					>
						<InputContainer>
							<div>
								<label htmlFor="firstname">First Name</label>
								<input
									type="text"
									id="firstname"
									ref={firstnameRef}
								/>
							</div>
							<div>
								<label htmlFor="surname">Surname</label>
								<input
									type="text"
									id="surname"
									ref={surnameRef}
								/>
							</div>
							<div>
								<label htmlFor="email">Email Address:</label>
								<input type="email" id="email" ref={emailRef} />
							</div>
						</InputContainer>
					</Section>
					<Section
						title="Step 2: More comments"
						defaultExpanded={isExpanded[1]}
						handleNext={handleNext}
					>
						<InputContainer>
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
									<option value="">Select Gender</option>
									<option value="male">Male</option>
									<option value="female">Female</option>
								</select>
							</div>
							<div>
								<label>Date of birth</label>
								<input
									type="number"
									min="1"
									max="31"
									ref={dayRef}
								/>
								<input
									type="number"
									min="1"
									max="12"
									ref={monthRef}
								/>
								<input
									type="number"
									min="1900"
									max={currentYear}
									ref={yearRef}
								/>
							</div>
						</InputContainer>
					</Section>
					<Section
						title="Step 3: Final comments"
						defaultExpanded={isExpanded[2]}
						handleNext={handleNext}
					>
						<InputContainer>
							<div>
								<label>Comments</label>
								<textarea
									rows={8}
									cols={30}
									ref={commentRef}
								></textarea>
							</div>
						</InputContainer>
					</Section>
				</Card>
			</FormContainer>
		</>
	);
};

export default CommentForm;
