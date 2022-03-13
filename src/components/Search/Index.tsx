import React, { useRef } from 'react';
import Comment from '../../models/comment';
import { SearchContainer, SearchInput, Searchbutton } from '../../styles/search'

const Index: React.FC<{ setComments: (array: Comment[]) => void; }> = (props) => {
	const searchRef = useRef<HTMLInputElement>(null);

	const searchHandler = async (event: React.FormEvent) => {
		event.preventDefault();

		const search = searchRef.current!.value;
		await getComments(search)
			.then((res: Response) => res.json())
			.then((data: Comment[]) => props.setComments(data));
	};

	const getComments = async (keyword: string) => {
		const comments = await fetch(
			`http://127.0.0.1:8000/getCommentsByFirstname/${keyword}`
		);

		return comments;
	};
	return (
		<SearchContainer>
			<form onSubmit={searchHandler}>
				<SearchInput type="search" name="search" ref={searchRef} placeholder="Search by first name"/>
				<Searchbutton type="submit">Search</Searchbutton>
			</form>
		</SearchContainer>
	);
};

export default Index;
