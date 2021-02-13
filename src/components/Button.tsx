import React from 'react';
import clsx from 'clsx';

type Props = {
	outline?: boolean;
	className: string;
	onClick: () => void;
};

const Button: React.FC<Props> = ({ children, outline, className, ...rest }) => {
	const css = clsx('button', className, outline && 'outline');
	return (
		<button {...rest} className={css}>
			{children}
		</button>
	);
};

export default Button;
