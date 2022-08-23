import React, { useContext } from 'react';
import { Formik, Form } from 'formik';
import FormikControl from './FormikControll';
import AddressContext from '../../context/addressContext/addressContext';
import * as Yup from 'yup';

const AddressForm = (props) => {
  const addressCtx = useContext(AddressContext);
  const cityOption = [
    {
      key: 'City',
      value: '',
    },
    {
      key: 'option 1',
      value: 'option 1',
    },
    {
      key: 'option 2',
      value: 'option 2',
    },
    {
      key: 'option 3',
      value: 'option 3',
    },
  ];
  const stateOption = [
    {
      key: 'State',
      value: '',
    },
    {
      key: 'option 1',
      value: 'option 1',
    },
    {
      key: 'option 2',
      value: 'option 2',
    },
    {
      key: 'option 3',
      value: 'option 3',
    },
  ];
  const addressType = [
    {
      key: 'Address Type',
      value: '',
    },
    {
      key: 'work',
      value: 'work',
    },
    {
      key: 'home',
      value: 'home',
    },
    {
      key: 'other',
      value: 'other',
    },
  ];

  const initialValues = {
    name: '',
    address1: '',
    address2: '',
    city: '',
    state: '',
    zip: '',
    type: '',
  };

  const validationSchema = Yup.object({
    name: Yup.string().required('Required'),
    address1: Yup.string().required('Required'),
    address2: Yup.string().required('Required'),
    city: Yup.string().required('Required'),
    state: Yup.string().required('Required'),
    zip: Yup.number().required('Required'),
    type: Yup.string().required('Required'),
  });

  const formSubmitHandler = (value) => {
    addressCtx.addAddress(value);
  };

  return (
    <>
      <Formik initialValues={initialValues} onSubmit={formSubmitHandler} validationSchema={validationSchema}>
        {(formik) => (
          <Form className='custom-form'>
            <div className='overflow-y-auto'>
              <div className='input-box'>
                <FormikControl control='input' name='name' type='text' placeholder='Name' className='form-control' />
              </div>
              <div className='input-box'>
                <FormikControl control='input' name='address1' type='text' placeholder='1234 Main St' className='form-control' />
              </div>
              <div className='input-box'>
                <FormikControl control='input' name='address2' type='text' placeholder='Apartment,studio, or floor' className='form-control' />
              </div>
              <div className='input-box'>
                <FormikControl control='select' name='city' option={cityOption} className='select form-control' />
              </div>

              <div className='input-box'>
                <FormikControl control='select' name='state' option={stateOption} className='select form-control' />
              </div>

              <div className='input-box'>
                <FormikControl control='input' name='zip' type='number' placeholder='Zip' className='form-control' />
              </div>
              <div className='input-box  mb-0'>
                <FormikControl control='select' name='type' option={addressType} className='select form-control' />
              </div>
            </div>
            <div className='offcanvas-footer'>
              <div className='btn-box'>
                <button onClick={props.toggleFun} className='btn-outline font-md'>
                  Close
                </button>
                <button type='submit' onClick={props.toggleFun} className='btn-solid font-md'>
                  Add
                </button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};
export default AddressForm;
