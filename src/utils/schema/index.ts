import {date, object} from 'yup';

import {
  email,
  gender,
  password,
  passwordConfirmation,
  text,
  nullablePassword,
} from './fields';

export const signInSchema = object().shape({
  email: email('emailIsRequired'),
  password: password('passwordIsRequired'),
});

export const signUpSchema = object().shape({
  email: email('emailIsRequired'),
  name: text().required('nameIsRequired'),
  password: password('passwordIsRequired'),
  passwordConfirmation: passwordConfirmation('password'),
});

export const redeemSchema = object().shape({
  email: email('emailIsRequired'),
  name: text().required('nameIsRequired'),
});

export const forgotPassSchema = object().shape({
  email: email('emailIsRequired'),
});

export const changePasswordSchema = object().shape({
  password: password('passwordIsRequired'),
  passwordConfirmation: passwordConfirmation('password'),
});

export const settingsSchema = object().shape({
  date_of_birth: date()
    .typeError('invalidDate')
    .required('birthDateIsRequired'),
  full_name: text().required('nameIsRequired'),
  gender: gender('genderIsRequired'),
  email: email('emailIsRequired'),
  country: text().required('countryIsRequired'),
  password: nullablePassword(),
  passwordConfirmation: passwordConfirmation('password', false),
});

export const socialSignupSchema = object().shape({
  referral: text(),
});
