import {string, ref} from 'yup';

export const email = (requiredText: string) =>
  string().email('emailIsInvalid').required(requiredText);

export const password = (requiredText: string) =>
  string().min(8, 'passwordMinimumCharacters').required(requiredText);

export const passwordConfirmation = (
  passwordRef: string,
  isRequired = true,
) => {
  const field = string().oneOf([ref(passwordRef), null], 'passwordsMatchError');
  return isRequired ? field.required('passwordIsRequired') : field;
};

export const nullablePassword = () =>
  string().test(
    'null-or-min',
    'passwordMinimumCharacters',
    value => !value || value.length >= 8,
  );

export const gender = (requiredText: string) =>
  string()
    .required(requiredText)
    .oneOf(['male', 'female', 'other'], 'invalidGender');

export const text = () => string();
