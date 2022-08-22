import React from 'react';
import { Field, ErrorMessage } from 'formik';
import TextError from './TextError';
const Input = (props) => {
  const { name, ...res } = props;
  return (
    <div>
      <Field id={name} name={name} {...res} />
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};
export default Input;
