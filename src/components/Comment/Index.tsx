import React, { useState, useEffect } from 'react';
import ListComment from './ListComment';
import Search from '../Search/Index';
import Comment from '../../models/comment';

const Index: React.FC = () => {
	const [comments, setComments] = useState<Comment[]>([]);
	useEffect(() => {
		const fetchData = async () => {
			await fetch('http://127.0.0.1:8000/comments')
				.then((res: Response) => res.json())
				.then((json: Comment[]) => setComments(json));
		};
		fetchData();
	}, []);

	return (
		<>
			<Search setComments={setComments} />
			<ListComment comments={comments} />
		</>
	);
};

export default Index;