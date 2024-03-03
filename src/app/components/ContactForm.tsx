'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/Form';
import { Input } from '@/components/ui/Input';
import { Textarea } from '@/components/ui/Textarea';
import { getData } from '@/actions/contactForm';
import { formSchema, type formSchemaType } from '@/lib/validatons/form';
import { useState } from 'react';
import { toast } from 'sonner';

export const ContactForm = () => {
	const [contactStatus, setContactStatus] = useState<'success' | 'pending' | 'initial'>('initial');
	const form = useForm<formSchemaType>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			email: '',
			message: '',
		},
	});

	const onSubmit = async (values: formSchemaType) => {
		try {
			setContactStatus('pending');
			const response = await getData(values);
			if (response.status === 200) {
				toast.success('Message sent successfully!', {});
				setContactStatus('success');
				return;
			}
			if (response.status === 422) {
				const errorMessages = response?.errors?.map((error) => error.detail).join(', ');
				toast.error('Error in validation fields', { description: errorMessages ?? 'Failed to send message.' });
				return;
			}
		} catch (error) {
			toast.error('An unexpected error occurred.');
		} finally {
			setContactStatus('success');
		}
	};

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className='space-y-5 [padding-block:1.5em]'>
				<FormField
					control={form.control}
					name='email'
					render={({ field }) => (
						<FormItem>
							<FormLabel className='text-slate-400'>Email:</FormLabel>
							<FormControl>
								<Input placeholder='marc@gmail.com' className='placeholder:text-slate-700' {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name='message'
					render={({ field }) => (
						<FormItem>
							<FormLabel className='text-slate-400'>Message:</FormLabel>
							<FormControl>
								<Textarea
									placeholder='Enter a message'
									className='resize-none [form-sizing:content] placeholder:text-slate-700'
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<button type='submit' disabled={contactStatus === 'pending'}>
					<div className='relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold shadow text-indigo-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-slate-200 dark:bg-gray-700 dark:text-white dark:hover:text-gray-200 dark:shadow-none group'>
						<span className='absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-indigo-600 group-hover:h-full'></span>
						<span className='absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 24 24'
								stroke='currentColor'
								fill='none'
								className='w-5 h-5 text-green-400'
							>
								<path d='M14 5l7 7m0 0l-7 7m7-7H3' strokeWidth='2' strokeLinejoin='round' strokeLinecap='round'></path>
							</svg>
						</span>
						<span className='absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 24 24'
								stroke='currentColor'
								fill='none'
								className='w-5 h-5 text-green-400'
							>
								<path d='M14 5l7 7m0 0l-7 7m7-7H3' strokeWidth='2' strokeLinejoin='round' strokeLinecap='round'></path>
							</svg>
						</span>
						<span className='relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white dark:group-hover:text-gray-200'>
							Submit
						</span>
					</div>
				</button>
			</form>
		</Form>
	);
};
