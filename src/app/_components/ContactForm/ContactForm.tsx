'use client';

import { useActionState } from 'react';
import { addContactAction } from '@/app/_actions';
import { ContactFormState } from '@/app/_types';

const initialState: ContactFormState = {
  success: false,
  message: '',
};

export default function ContactForm() {
  const [state, action, isPending] = useActionState(
    addContactAction,
    initialState,
  );
  console.log('HERE IS SOME STATE', state);
  return (
    <div className="h-screen flex justify-center items-center">
      <form
        action={action}
        className="w-1/2 flex flex-col gap-4 text-black bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        autoComplete="off">
        <span className="text-xl text-center">Contact Us</span>

        <div>
          <label
            htmlFor="firstName"
            className="block mb-2 text-sm font-medium text-black">
            First Name
          </label>
          <input
            className={`shadow appearance-none border ${state?.errors?.firstName ? 'border-red-500' : ''} rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
            name="firstName"
            type="text"
            placeholder="First Name"
            defaultValue={state?.inputs?.firstName as string}
            required
          />
          {state?.errors?.firstName && (
            <span className="text-red-500">{state?.errors?.firstName}</span>
          )}
        </div>
        <div>
          <label
            htmlFor="lastName"
            className="block mb-2 text-sm font-medium text-black">
            Last Name
          </label>
          <input
            className={`shadow appearance-none border rounded ${state?.errors?.lastName ? 'border-red-500' : ''} w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
            name="lastName"
            type="text"
            placeholder="Last Name"
            defaultValue={state?.inputs?.lastName as string}
            required
          />
          {state?.errors?.lastName && (
            <span className="text-red-500">{state?.errors?.lastName}</span>
          )}
        </div>
        <div>
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-black">
            Email
          </label>
          <input
            className={`shadow appearance-none border ${state?.errors?.email ? 'border-red-500' : ''} rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
            name="email"
            type="email"
            placeholder="Email Address"
            defaultValue={state?.inputs?.email as string}
            required
          />
          {state?.errors?.email && (
            <span className="text-red-500">{state?.errors?.email}</span>
          )}
        </div>
        <div>
          <label
            htmlFor="subject"
            className="block mb-2 text-sm font-medium text-black">
            Subject
          </label>
          <textarea
            className={`shadow appearance-none border ${state?.errors?.subject ? 'border-red-500' : ''} rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
            name="subject"
            placeholder="Subject"
            rows={4}
            defaultValue={state?.inputs?.subject as string}
            required
          />
          {state?.errors?.subject && (
            <span className="text-red-500">{state?.errors?.subject}</span>
          )}
        </div>
        <div className="flex flex-col gap-1">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold w-1/2 py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
            disabled={isPending}>
            {isPending ? 'Submitting' : 'Submit'}
          </button>
          {!state?.success && (
            <span className="text-red-500">{state?.message}</span>
          )}
        </div>
      </form>
    </div>
  );
}
