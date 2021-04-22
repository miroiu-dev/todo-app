import './css/themebutton.css';
import clsx from 'clsx';
import React, { useRef } from 'react';
import { useFocus } from './useFocus';

export const ToggleThemeButton: React.FC<{
	theme: string;
	onClick: () => void;
}> = ({ theme, onClick }) => {
	const ref = useRef<HTMLDivElement | null>(null);
	const { isFocused, addFocus } = useFocus(ref);
	const thumb = clsx(
		'thumb',
		isFocused && 'focused',
		theme === 'dark' && 'toggled'
	);
	return (
		<div
			className="wrapper"
			onClick={() => {
				onClick();
				addFocus();
			}}
			ref={ref}
		>
			<div className="moon-wrapper">
				<span className="moon">🌜</span>
			</div>
			<div className="sun-wrapper">
				<span className="sun">🌞</span>
			</div>
			<div className={thumb}></div>
		</div>
	);
};
