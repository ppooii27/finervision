import React, { useState, useEffect } from 'react';
import ListComment from './ListComment';
import Search from '../Search/Index';
import Comment from '../../models/comment';
import configData from '../../config.json'

const Index: React.FC = () => {
	const [comments, setComments] = useState<Comment[]>([]);
	useEffect(() => {
		const fetchData = async () => {
			try {
				await fetch(configData.COMMENT.GET_API.URL)
					.then((res: Response) => res.json())
					.then((json: Comment[]) => setComments(json));
			} catch (error) {
				throw new Error('Fetching data failed!');
			}
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
