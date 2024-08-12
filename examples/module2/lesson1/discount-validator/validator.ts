export function formValidator(
  firstName: string,
  lastName: string,
  age: number
) {
  const errors: string[] = [];

  if (firstName.length < 1) {
    errors.push('First name has to be at least 1 characters long');
  }

  if (lastName.length < 1) {
    errors.push('Last name has to be at least 1 characters long');
  }

  if (age < 0) {
    errors.push('Age must be a positive number');
  }

  return errors;
}
