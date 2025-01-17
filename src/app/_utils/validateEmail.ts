/**
 * Simple helper function to validate emails
 * @param email
 * @constructor
 */
export default function ValidateEmail(email: string) {
  if (!email) return false;
  const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
  return emailRegex.test(email);
}
