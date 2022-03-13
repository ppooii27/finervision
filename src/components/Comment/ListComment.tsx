import React from 'react';
import Comment from './Comment';
import CommentModel from '../../models/comment';
import { FlexboxHeader, FlexboxColumn, CommentList } from '../../styles/comment';

const ListComment: React.FC<{comments: CommentModel[]}> = (props) => {
	const { comments } = props;
	return (
		<CommentList>
			<FlexboxHeader>
				<FlexboxColumn>First Name</FlexboxColumn>
				<FlexboxColumn>Last Name</FlexboxColumn>
				<FlexboxColumn>Gender</FlexboxColumn>
				<FlexboxColumn>Email</FlexboxColumn>
				<FlexboxColumn>Telephone</FlexboxColumn>
				<FlexboxColumn>Date of birth</FlexboxColumn>
				<FlexboxColumn>Comment</FlexboxColumn>
			</FlexboxHeader>
			{comments?.map((comment) => (
				<Comment comment={comment} key={comment.id} />
			))}
		</CommentList>
	);
};

export default ListComment;
