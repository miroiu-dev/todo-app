import { MutableRefObject, useCallback, useEffect, useState } from 'react';

export const useFocus = (ref: MutableRefObject<HTMLDivElement | null>) => {
	const [isFocused, setIsFocused] = useState(false);

	const addFocus = () => {
		if (isFocused) return;
		setIsFocused(true);
	};
	const removeFocus = () => {
		setIsFocused(false);
	};

	const unfocus = useCallback(
		(ev: Event) => {
			if (ref.current && !ref.current.contains(ev.target as Node)) {
				removeFocus();
			}
		},
		[ref]
	);

	useEffect(() => {
		document.addEventListener('click', unfocus);
		return () => {
			document.removeEventListener('click', unfocus);
		};
	}, [unfocus]);
	return { isFocused, addFocus };
};
