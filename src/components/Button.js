import React from 'react';
import clsx from 'clsx';

const Button = ({ children, outline, className, ...rest }) => {
	const css = clsx('button', className, outline && 'outline');
	return (
		<button {...rest} className={css}>
			{children}
		</button>
	);
};

export default Button;
