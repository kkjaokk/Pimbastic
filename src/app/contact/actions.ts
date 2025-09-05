'use server';

import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().min(2, { message: "O nome deve ter pelo menos 2 caracteres." }),
  email: z.string().email({ message: "Por favor, insira um e-mail válido." }),
  company: z.string().optional(),
  subject: z.string().min(3, { message: "O assunto deve ter pelo menos 3 caracteres." }),
  message: z.string().min(10, { message: "A mensagem deve ter pelo menos 10 caracteres." }),
});

export async function submitContactForm(prevState: any, formData: FormData) {
  const validatedFields = contactSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    company: formData.get('company'),
    subject: formData.get('subject'),
    message: formData.get('message'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Erro: Verifique os campos do formulário.',
    };
  }

  try {
    // Here you would typically send an email, save to a database, etc.
    console.log('Contact form submitted:', validatedFields.data);
    // This is a simulation of a successful submission.
    return { message: 'Mensagem enviada com sucesso!' };
  } catch (error) {
    console.error('Contact form submission error:', error);
    return { message: 'Erro: Não foi possível enviar sua mensagem. Tente novamente mais tarde.' };
  }
}
