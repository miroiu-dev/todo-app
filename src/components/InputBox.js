import React from 'react';
import './css/inputbox.css';
import clsx from 'clsx';

const InputBox = ({ label, value, onChange, hasError, theme }) => {
	const css = clsx('title-input input', hasError && 'required');
	const textBox = clsx('text-box', theme);
	const labelBox = clsx('label-box', theme);
	return (
		<div className={css}>
			<label className={labelBox}>{label}</label>
			<input type="text" className={textBox} value={value} onChange={onChange} />
		</div>
	);
};

export default InputBox;
