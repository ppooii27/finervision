import React from 'react';
import CommentModel from '../../models/comment';
import { FlexboxRow, FlexboxColumn } from '../../styles/comment';

const Comment: React.FC<{comment: CommentModel}> = (props) => {
	return (
		<FlexboxRow>
			<FlexboxColumn>{props.comment.firstname}</FlexboxColumn>
			<FlexboxColumn>{props.comment.surname}</FlexboxColumn>
			<FlexboxColumn>{props.comment.gender}</FlexboxColumn>
			<FlexboxColumn>{props.comment.email}</FlexboxColumn>
			<FlexboxColumn>{props.comment.telephone}</FlexboxColumn>
			<FlexboxColumn>{props.comment.dob}</FlexboxColumn>
			<FlexboxColumn>{props.comment.comments}</FlexboxColumn>
		</FlexboxRow>
	);
};

export default Comment;
