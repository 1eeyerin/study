/** @jsxImportSource @emotion/react */
import React from 'react';

interface FlexProps {
	onClick?: void;
	children: React.ReactNode | string;
	display?: 'flex' | 'inline-flex';
	flexDirection?: React.CSSProperties['flexDirection'];
	justifyContent?: React.CSSProperties['justifyContent'];
	alignItems?: React.CSSProperties['alignItems'];
	flexWrap?: React.CSSProperties['flexWrap'];
}

const Flex = ({
	display = 'flex',
	flexDirection = 'row',
	justifyContent = 'flex-start',
	alignItems = 'stretch',
	flexWrap = 'nowrap',
	children
}: FlexProps) => {

	return (
		<div css={{display, flexDirection, justifyContent, alignItems, flexWrap}}>{children}</div>
	)
};

export default Flex;