'use client';

import { useActionState } from 'react';
import { registerUser } from '@/app/actions/register';
import { SubmitButton } from "@/components/SubmitButton";

const initialState = {
    success: false,
    errors: {} as Record<string, string>
}

export default function Page() {
    const [state, formAction] = useActionState(registerUser, initialState);
    
    return (
    <div className="min-h-screen flex items-center justify-center">
        <div className="card bg-base-200 place-items-center w-96 shadow-sm">
            <div className="card-body">
                <form action = {formAction} className="max-w-sm w-full">
                    <div className="mb-5 w-full">
                        <input name="name" className="input input-bordered w-full" placeholder="Nom et Prénom" />
                        {state?.errors?.name && <p className="text-red-600 text-sm">{state.errors.name}</p>}
                    </div>
                    
                    <div className="mb-5 w-full">
                        <input name="username" type="username" className="input input-bordered w-full" placeholder="Nom d'utilisateur" />
                        {state?.errors?.username && <p className="text-red-600 text-sm">{state.errors.name}</p>}
                    </div>
                    <div className="mb-5 w-full">
                        <input name="profession" type="profession" className="input input-bordered w-full" placeholder="Profession" />
                        {state?.errors?.profession && <p className="text-red-600 text-sm">{state.errors.name}</p>}
                    </div>
                    
                    <div className="mb-5 w-full">
                        <input name="email" type="email" className="input input-bordered w-full" placeholder="Email" />
                        {state?.errors?.email && <p className="text-red-600 text-sm">{state.errors.name}</p>}
                    </div>
                    
                    <div className="mb-5 w-full">
                        <input name="password" type="password" className="input input-bordered w-full" placeholder="Password" />
                        {state?.errors?.password && <p className="text-red-600 text-sm">{state.errors.name}</p>}
                    </div>
                    
                    <div className="mt-5 w-full">
                        <SubmitButton />
                    </div>
                </form>
                <p className="mt-5 text-center text-sm/6 text-gray-500">
                    <span className="mr-2">
                        Déjà Inscrit?
                    </span> 
                    <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">Connectez-vous</a>
                </p>
            </div>
        </div>
    </div>

    )
}