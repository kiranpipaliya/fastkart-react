import React from 'react';
import { Field, ErrorMessage } from 'formik';
import TextError from './TextError';
const CustomSelect = (props) => {
  const { name, option, ...res } = props;
  return (
    <div>
      <Field as='select' id={name} name={name} {...res}>
        {option.map((option) => {
          return (
            <option key={option.value} value={option.value}>
              {option.key}
            </option>
          );
        })}
      </Field>{' '}
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};
export default CustomSelect;
