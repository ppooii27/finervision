import React from 'react';
import CommentModel from '../../models/comment';
import { FlexboxRow, FlexboxColumn } from '../../styles/comment';

const Comment: React.FC<{comment: CommentModel}> = (props) => {
	return (
		<FlexboxRow>
			<FlexboxColumn data-testid="firstname">{props.comment.firstname}</FlexboxColumn>
			<FlexboxColumn data-testid="surname">{props.comment.surname}</FlexboxColumn>
			<FlexboxColumn data-testid="gender">{props.comment.gender}</FlexboxColumn>
			<FlexboxColumn data-testid="email">{props.comment.email}</FlexboxColumn>
			<FlexboxColumn data-testid="telephone">{props.comment.telephone}</FlexboxColumn>
			<FlexboxColumn data-testid="dob">{props.comment.dob}</FlexboxColumn>
			<FlexboxColumn data-testid="comment">{props.comment.comments}</FlexboxColumn>
		</FlexboxRow>
	);
};

export default Comment;
