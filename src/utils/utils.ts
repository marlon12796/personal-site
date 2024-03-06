import type { Dispatch, SetStateAction } from 'react';

export const kebabCase = (str: string) =>
	str
		.replace(/([a-z])([A-Z])/g, '$1-$2')
		.replace(/[\s_]+/g, '-')
		.toLowerCase();

export const kebabArray = (arr: string[]) => arr.map(kebabCase);

export const randomNumberText = (finalNum: string, setNumber: Dispatch<SetStateAction<string>>) => {
	let count = 0;
	const interval = setInterval(() => {
		count++;
		const newNum = Array.from({ length: finalNum.length }, () => Math.floor(Math.random() * 10)).join('');
		setNumber(newNum);
		if (count === 20) {
			clearInterval(interval);
			setNumber('404');
		}
	}, 80);
};
