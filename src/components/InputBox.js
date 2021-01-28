import React, { useContext } from 'react';
import './css/inputbox.css';
import clsx from 'clsx';
import { ThemeContext } from '../context/ThemeContext';

const InputBox = ({ label, value, onChange, hasError }) => {
	const theme = useContext(ThemeContext);
	const css = clsx('title-input input', hasError && 'required');
	const textBox = clsx('text-box', theme);
	const labelBox = clsx('label-box', theme);
	return (
		<div className={css}>
			<label htmlFor={label} className={labelBox}>
				{label}
			</label>
			<input id={label} type="text" className={textBox} value={value} onChange={onChange} />
		</div>
	);
};

export default InputBox;
