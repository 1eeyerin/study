/** @jsxImportSource @emotion/react */
import React from 'react';
import {css} from '@emotion/react';

const style = (disabled: boolean) => css`
  border: 1px solid transparent;
	border-radius: 4px;
	cursor: pointer;
	
	${disabled && css`
    pointer-events: none;
	`}
`;

interface ButtonProps {
	onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
	type: "button" | "submit" | "reset";
	className?: string;
	size: "small" | "medium" | "large";
	theme: "primary" | "secondary" | "tertiary";
	strokeMode?: boolean;
	disabled?: boolean;
	fullWidth: boolean;
	children: string;
}

const Button = ({
	onClick,
	type = "button",
	strokeMode = false,
	disabled = false,
	fullWidth = false,
	size = 'medium',
	theme = 'primary',
	className,
	children
}: ButtonProps) => {
	const mode = strokeMode ? 'stroke' : 'fill';
	const bgColorStyle = {backgroundColor: backgroundColor[theme][mode]};
	const borderColorStyle = {borderColor: borderColor[theme][mode]};
	const colorStyle = {color: color[theme][mode]};
	const paddingStyle = {padding: padding[size]};
	const fontStyle = {fontSize: fontSize[size]};
	const widthStyle = fullWidth ? {width: '100%'} : '';
	return (
		<button
			type={type}
			css={[
				style(disabled),
				bgColorStyle,
				borderColorStyle,
				colorStyle,
				paddingStyle,
				fontStyle,
				widthStyle,
				strokeMode
			]}
			onClick={onClick}
			className={className}>
			{children}
		</button>
	)
};

const color = {
	primary: {
		fill: '#ffffff',
		stroke: '#fa2a2a',
	},
	secondary: {
		fill: '#ffffff',
		stroke: '#adadad',
	},
	tertiary: {
		fill: '#ffffff',
		stroke: '#5b7dbd',
	}
};

const backgroundColor = {
	primary: {
		fill: '#fa2a2a',
		stroke: '#ffffff',
	},
	secondary: {
		fill: '#adadad',
		stroke: '#ffffff',
	},
	tertiary: {
		fill: '#5b7dbd',
		stroke: '#ffffff',
	}
};

const borderColor = {
	primary: {
		fill: '#fa2a2a',
		stroke: '#fa2a2a',
	},
	secondary: {
		fill: '#adadad',
		stroke: '#adadad',
	},
	tertiary: {
		fill: '#5b7dbd',
		stroke: '#5b7dbd',
	}
};

const fontSize = {
	small: '14px',
	medium: '18px',
	large: '21px'
};

const padding = {
	small: '12px 20px',
	medium: '16px 25px',
	large: '20px 28px',
}

export default Button;