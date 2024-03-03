'use client';

import { Tooltip as ShadcnTooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@radix-ui/react-tooltip';
import { PropsWithChildren } from 'react';

type Props = {
	title: string;
} & PropsWithChildren;

const CustomTooltip = ({ title, children }: Props) => {
	return (
		<TooltipProvider delayDuration={125} skipDelayDuration={0}>
			<ShadcnTooltip>
				<TooltipTrigger asChild>{children}</TooltipTrigger>
				<TooltipContent
					sideOffset={10}
					className='bg-purple-950/70 text-purple-100 text-xs px-2 py-1 rounded-md backdrop-blur-md'
				>
					<p>{title}</p>
				</TooltipContent>
			</ShadcnTooltip>
		</TooltipProvider>
	);
};

export default CustomTooltip;
