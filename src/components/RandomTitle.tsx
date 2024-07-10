'use client';

import { randomNumberText } from '@/utils/utils';
import { useEffect, useState } from 'react';

export const RandomTitle = () => {
	const [num404, setNum404] = useState('0000');

	useEffect(() => {
		randomNumberText('404', setNum404);
	}, []);
	return (
		<h1 className='[font-size:clamp(1.8rem,2vw_+_2rem,6rem)] text-white font-monospace font-bold opacity-100'>{`{ error: ${num404} }`}</h1>
	);
};
