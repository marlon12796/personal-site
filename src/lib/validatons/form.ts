import { z } from 'zod';

export const formSchema = z.object({
	email: z.string().min(1, { message: 'This field has to be filled.' }).email('This is not a valid email.'),
	message: z
		.string()
		.min(10, { message: 'This field must be at least 10 characters.' })
		.max(500, { message: 'The message cannot be longer than 500 characters.' }),
});
export type formSchemaType = z.infer<typeof formSchema>;
