import React, { forwardRef } from 'react';
import styled from 'styled-components';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
	id: string;
	label: React.ReactNode;
	type?: 'checkbox' | 'radio';
}

const Checkbox = forwardRef<HTMLInputElement, Props>((props: Props, ref) => {
	const { id, label, type = 'checkbox', ...restProps } = props;

	return (
		<Wrapper>
			<input ref={ref} type={type} id={id} {...restProps} />
			<StyledLabel htmlFor={id}>{label}</StyledLabel>
		</Wrapper>
	);
});

const Wrapper = styled.div`
  margin-bottom: 24px;
  font-size: 1.5em;
`;

const StyledLabel = styled.label`
  margin-left: 8px;
`;

export default Checkbox;
