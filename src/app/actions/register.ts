'use server'

import { redirect } from 'next/navigation'
import * as yup from 'yup'
import prisma from '../../lib/prisma'
import { hash } from 'bcrypt'

const signupSchema = yup.object({
  name: yup.string().required('Le nom est requis'),
  username: yup.string().required('Le nom d\'utilisateur est requis'),
  profession: yup.string(),
  email: yup.string().email('Email invalide').required('Email requis'),
  password: yup.string().min(6, 'Le mot de passe doit faire au moins 6 caractères').required(),
})

type State = {
  success: boolean;
  errors: Record<string, string>;
};

export async function registerUser(prevState: State, formData: FormData) {

    const name = formData.get('name') as string | null
    const username = formData.get('username') as string | null
    const profession = formData.get('profession') as string | null
    const email = formData.get('email') as string | undefined
    const password = formData.get('password') as string

    try {
        await signupSchema.validate(
            { name, email, username, profession, password },
            { abortEarly: false }
        );

        if (!email) {
            throw new Error('Email requis');
        }
        const existingUser = await prisma.user.findUnique({
            where: { email }
        });

        if (existingUser) {
            throw new Error('Email already exists');
        }
        const hashedPassword = await hash(password, 10);

        await prisma.user.create({ data: { name, username, profession, email, password: hashedPassword } })

        redirect('/signin')
        
        return { success: true, errors: {} }

    } catch (error) {

        if (error instanceof yup.ValidationError) {
            const fieldErrors: Record<string, string> = {}

            error.inner.forEach(err => {
                if (err.path && !fieldErrors[err.path]) {
                fieldErrors[err.path] = err.message
                }
            })

            return { success: false, errors: fieldErrors }
        }

        throw error

    }
}