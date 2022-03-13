import useCollapse from 'react-collapsed';
import ExpandItem from '../../models/expandItem';
import { Button, ButtonContainer, Collapsible, SectionContent, SectionHeader, Title } from '../../styles/section'

const Section: React.FC<{
	title: string;
	defaultExpanded: ExpandItem;
	handleNext: (object: ExpandItem) => void;
}> = (props) => {
	const config = {
		defaultExpanded: props.defaultExpanded.isExpanded || false,
		isExpanded: props.defaultExpanded.isExpanded,
	};
	const { getCollapseProps, getToggleProps } = useCollapse(config);
	const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		event.preventDefault();

		props.handleNext(props.defaultExpanded);
	};
	return (
		<Collapsible>
			<SectionHeader {...getToggleProps()}>
				<Title data-testid="title">
					{props.title}
				</Title>
			</SectionHeader>
			<div {...getCollapseProps()}>
				<SectionContent data-testid="content">
					{props.children}
					<ButtonContainer>
						<Button onClick={handleButtonClick}>Next &gt;</Button>
					</ButtonContainer>
				</SectionContent>
			</div>
		</Collapsible>
	);
};

export default Section;
