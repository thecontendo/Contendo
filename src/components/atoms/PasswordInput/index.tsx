import React from 'react';
import PropTypes from 'prop-types';

import {Input} from '../Input';

interface ErrorObj {
  message: string;
}

type Props = {
  control: object;
  name: string;
  placeholder?: string;
  label?: string;
  error: ErrorObj;
};

export const PasswordInput = ({
  control,
  name,
  placeholder,
  error,
  label,
  ...props
}: Props) => {
  return (
    <Input
      control={control}
      placeholder={placeholder}
      name={name}
      label={label}
      isPassword={true}
      error={error}
      textContentType={'password'}
      {...props}
    />
  );
};

PasswordInput.propTypes = {
  control: PropTypes.instanceOf(Object).isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  error: PropTypes.instanceOf(Object),
};

PasswordInput.defaultProps = {
  placeholder: undefined,
  error: undefined,
};
