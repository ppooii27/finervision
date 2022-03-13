import styled from 'styled-components';

export const Collapsible = styled.div`
	width: 50vw;
	margin: 0 auto;
`;

export const SectionHeader = styled.div`
	background-color: #fdbd0f;
	background-image: linear-gradient(#fdbd0f, #df8c0e);
	padding: 15px;
	cursor: pointer;
	display: flex;
	justify-content: space-between;
	border-bottom: 2px solid #fff;
	border-radius: 7px;

	&[aria-expanded='true'] {
		border-bottom: none;

		& + div {
			border-bottom: 2px solid #fff;
		}
	}
`;

export const Title = styled.div`
	font-weight: 400;
	color: #fff;
	font-size: 14px;
`;

export const SectionContent = styled.div`
	padding: 6px;
	background-color: #d6d6d6;
	font-size: 14px;
	display: flex;
	justify-content: start;
	flex-wrap: wrap;
	row-gap: 10px;
	align-items: flex-end;
	flex-direction: column;
	border-radius: 0 0 10px 10px;
	border: 1px solid #d6d6d6;
`;

export const ButtonContainer = styled.div`
	justify-self: flex-end;
`;
export const Button = styled.div`
	background-image: linear-gradient(#3134a6, #6049c7);
	color: #fff;
	border-radius: 6px;
	border: 1px solid #3134a6;
	padding: 5px 30px;
	cursor: pointer;
`;
