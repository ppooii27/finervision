import styled from 'styled-components';

export const Menu = styled.div`
	display: inline-flex;
`;

export const MenuItem = styled.div`
	flex: 1;
	background-image: linear-gradient(#3134a6, #6049c7);
	color: #fff;
	border-radius: 6px;
	border: 1px solid #3134a6;
	padding: 5px 30px;
	cursor: pointer;
	margin: 5px;
	& a {
		color: #fff;
	}
`;
