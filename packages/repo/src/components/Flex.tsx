import React, {createElement, ElementType} from 'react';

interface FlexProps extends React.CSSProperties {
	as?: ElementType;
	children: React.ReactNode | string;
};

const Flex = ({
	as = 'div',
	display = 'flex',
	flexDirection = 'row',
	justifyContent = 'flex-start',
	alignItems = 'stretch',
	flexWrap = 'nowrap',
	children,
	...props
}: FlexProps) => {

	return (
		createElement(
			as,
			{
				...props,
				style: {flexDirection, display, justifyContent, alignItems, flexWrap}
			},
			children
		)
	)
};

export default Flex;