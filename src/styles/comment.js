import styled from 'styled-components';

export const CommentList = styled.section`
	margin: 5px;
`;

export const FlexboxRow = styled.div`
	display: flex;
	border: 1px solid;
	flex-wrap: wrap;
	margin: 0 0 0.7em 0;
	padding: 0;
	border-radius: 0px;
	border: 1px solid #999;
	box-shadow: 1px 1px 6px 2px #6d6d6d;
	background: #d6d6d6;;
`;

export const FlexboxHeader = styled.header`
	display: flex;
	border: 1px solid;
	background-color: #fdbd0f;
    background-image: linear-gradient(#fdbd0f,#df8c0e);
    color: #fff;
`;

export const FlexboxColumn = styled.div`
	flex: 1;
	width: 100%;
	padding: 0.8em 1.2em;
	overflow: hidden;
	list-style: none;
	border: solid @bw white;

	box-sizing: border-box;
`;

export const FormContainer = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
	height: 100vh;
	width: 100vw;
`;

export const Card = styled.div`
	padding: 5px;
	background-color: #fff;
	border-radius: 10px;
	box-shadow: 2px 1px 45px -7px #000;
`;

export const InputContainer = styled.div`
	align-self: flex-start;
	display: flex;
	flex-wrap: wrap;
	row-gap: 10px;

	& div {
		flex: 50%;

		& label {
			display: block;
			font-weight: bold;
		}
	}

	& input {
		line-height: 25px;
	}

	& select {
		width: 120px;
		height: 30px;
	}

	& input,
	& textarea,
	& select {
		border-radius: 10px;
		border: 1px solid #999;
		box-shadow: inset 1px 1px 16px -4px #6d6d6d;
		background: #fff;
	}
`;
