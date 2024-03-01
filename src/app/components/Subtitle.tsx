type Props = {
	text: string;
};

const Subtitle = ({ text }: Props) => {
	return (
		<div className='flex items-center gap-4'>
			<h2 className='text-3xl font-bold text-slate-200'>{text}</h2>
			<hr className='grow border-dashed border-slate-600' />
		</div>
	);
};

export default Subtitle;
