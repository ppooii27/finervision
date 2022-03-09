import useCollapse from 'react-collapsed';

function Section(props) {
	const config = {
		defaultExpanded: props.defaultExpanded.isExpanded || false,
		collapsedHeight: props.collapsedHeight || 0,
		isExpanded: props.defaultExpanded.isExpanded,
	};
	const { getCollapseProps, getToggleProps } = useCollapse(config);
	const handleButtonClick = (event) => {
		event.preventDefault();
		props.handleNext(props.defaultExpanded);
	};
	return (
		<div className="collapsible">
			<div className="header" {...getToggleProps()}>
				<div className="title" data-testid="title">{props.title}</div>
				<div className="icon">
					<i
						className={
							'fas fa-chevron-circle-' +
							(props.defaultExpanded.isExpanded ? 'up' : 'down')
						}
					></i>
				</div>
			</div>
			<div {...getCollapseProps()}>
				<div className="content" data-testid="content">
					{props.children}
					<div className="button">
						<button onClick={handleButtonClick}>Next &gt;</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Section