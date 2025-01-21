'use server';

import { ContactFormState, FieldMap } from '@/app/_types';
import validateEmail from '@/app/_utils/validateEmail';

export async function addContactAction(
  prevState: ContactFormState | null, // since we're using the useActionState hook we have to update our action params to inclide a value for state!
  formData: FormData,
): Promise<ContactFormState> {
  const errors: FieldMap = {};

  // Example validation for a required text field
  const firstName = formData.get('firstName') as string;
  if (!firstName || firstName.trim().length === 0) {
    errors.firstName = 'First name is required.';
  }

  const lastName = formData.get('lastName') as string;
  if (!lastName || lastName.trim().length === 0) {
    errors.lastName = 'Last name is required.';
  }

  // Example validation for an email field
  const email = (formData.get('email') as string) || '';
  if (!validateEmail(email)) {
    errors.email = 'Valid email is required.';
  }

  const subject = formData.get('subject') as string;
  if (!subject || subject.trim().length === 0) {
    errors.subject = 'Subject is required.';
  }

  // Add more validations as needed...
  if (Object.keys(errors).length !== 0) {
    return {
      success: false,
      message: 'Please enter all required fields!',
      errors,
      inputs: Object.fromEntries(formData),
    };
  }

  // On successful validation do something...
  return { success: true, message: 'Contact submitted successfully!' };
}
