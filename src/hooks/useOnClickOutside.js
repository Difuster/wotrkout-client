import { useEffect, useRef, useState } from 'react';

export const useOnClickOutside = value => {
	const [isShown, setIsShown] = useState(value);
	const ref = useRef(null);

	const handleClickOutside = event => {
		if (ref.current && !ref.current.contains(event.target)) {
			setIsShown(false);
		}
	};

	useEffect(() => {
		document.addEventListener('click', handleClickOutside, true);

		return () => {
			document.addEventListener('click', handleClickOutside, true);
		};
	});

	return { isShown, setIsShown, ref };
};
