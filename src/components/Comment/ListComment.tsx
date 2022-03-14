import React from 'react';
import Comment from './Comment';
import CommentModel from '../../models/comment';
import { FlexboxHeader, FlexboxColumn, CommentList } from '../../styles/comment';

const ListComment: React.FC<{comments: CommentModel[]}> = (props) => {
	const { comments } = props;
	return (
		<CommentList>
			<FlexboxHeader>
				<FlexboxColumn data-testid="header-firstname">First Name</FlexboxColumn>
				<FlexboxColumn data-testid="header-surname">Surname</FlexboxColumn>
				<FlexboxColumn data-testid="header-gender">Gender</FlexboxColumn>
				<FlexboxColumn data-testid="header-email">Email</FlexboxColumn>
				<FlexboxColumn data-testid="header-telephone">Telephone</FlexboxColumn>
				<FlexboxColumn data-testid="header-dob">Date of birth</FlexboxColumn>
				<FlexboxColumn data-testid="header-comment">Comment</FlexboxColumn>
			</FlexboxHeader>
			{comments?.map((comment) => (
				<Comment comment={comment} key={comment.id} />
			))}
		</CommentList>
	);
};

export default ListComment;
