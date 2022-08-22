import React from 'react';
import CustomSelect from './CustomSelect';
import Input from './Input';
const FormikControl = (props) => {
  const { control, ...res } = props;
  if (control === 'input') return <Input {...res} />;
  if (control === 'select') return <CustomSelect {...res} />;
};
export default FormikControl;
