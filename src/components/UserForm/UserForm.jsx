import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import { cleanEmptyValues } from './userFormHelpers';

import './userForm.css'

const UserForm = () => {
    const initialFormValues = {
        stooge: "larry",
        employed: false,
        firstName: '',
        lastName: '',
        age: '',
        favoriteColor: '',
        notes: ''
      }

      const validationSchema = Yup.object().shape({
        firstName: Yup.string().matches(/^[A-Za-z\s]+$/, 'Invalid first name').required('Field is required'),
        lastName: Yup.string().matches(/^[A-Za-z\s]+$/, 'Invalid last name').required('Field is required'),
        age: Yup.number().typeError('Age must be a number').required('Field is required'),
        notes: Yup.string().max(100, 'Notes must not exceed 100 characters'),
      });

  return (
    <div className='contenedor'>
        <Formik
        initialValues={initialFormValues}
        onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
        }}
        validationSchema={validationSchema}
        >
        {({ values, resetForm, dirty, touched, errors }) => (
        <Form className='user-form'>
            <div className='row'>
                <label htmlFor="firstName">First Name</label>
                <Field className='Field' id="firstName" name="firstName" placeholder="First Name" />
            </div>
            {touched.firstName && errors.firstName && <ErrorMessage name='firstName' component='div' className='error-message' />}
            <div className='row'>
                <label htmlFor="lastName">Last Name</label>
                <Field className='Field' id="lastName" name="lastName" placeholder="Last Name" />
            </div>
            {touched.lastName && errors.lastName && <ErrorMessage name='lastName' component='div' className='error-message' />}
            <div className='row'>
                <label htmlFor="age">Age</label>
                <Field
                className='Field'
                id="age"
                name="age"
                placeholder="Age"
                />
            </div>
            {touched.age && errors.age && <ErrorMessage name='age' component='div' className='error-message' />}

            <label className='row'>
                <span id="employed">Employed</span>
                <Field className='Field' type="checkbox" name="employed" />
            </label>

            <div className='row'>
                <label htmlFor="favoriteColor">Favorite Color</label>
                <Field className='Field' as="select" name="favoriteColor">
                    <option key="none" value="" disabled>
                    </option>
                    <option key="blue" value="#0000FF">
                        Blue
                    </option>
                    <option key="green" value="#00FF00">
                        Green
                    </option>
                    <option key="red" value="#FF0000">
                        Red
                    </option>
                    <option key="yellow" value="#FFFF00">
                        Yellow
                    </option>
                </Field>
            </div>

            <div className='row'>
                <div id="checkbox-group">Sauces</div>
                <div className='col Field' role="group" aria-labelledby="checkbox-group">
                    <label className='gap-10'>
                        <Field type="checkbox" name="sauces" value="ketchup" />
                        Ketchup
                    </label>
                    <label className='gap-10'>
                        <Field type="checkbox" name="sauces" value="mustard" />
                        Mustard
                    </label>
                    <label className='gap-10'>
                        <Field type="checkbox" name="sauces" value="mayonnaise" />
                        Mayonnaise
                    </label>
                    <label className='gap-10'>
                        <Field type="checkbox" name="sauces" value="guacamole" />
                        Guacamole
                    </label>
                </div>
            </div>

            <div className='row'>
                <div id="my-radio-group">Best Stooge</div>
                <div className='col Field' role="group" aria-labelledby="my-radio-group">
                    <label className='gap-10'>
                    <Field type="radio" name="stooge" value="larry" />
                    Larry
                    </label>
                    <label className='gap-10'>
                    <Field type="radio" name="stooge" value="moe" />
                    Moe
                    </label>
                    <label className='gap-10'>
                    <Field type="radio" name="stooge" value="curly" />
                    Curly
                    </label>
                </div>
            </div>

            <div className='row'>
                <label htmlFor="notes">Notes:</label>
                <Field className='Field' as="textarea" name="notes" id="notes"  rows={2} placeholder='Notes' />
                {touched.notes && errors.notes && <ErrorMessage name='notes' component='div' className='error-message' />}
            </div>

            <div className='buttons'>
                <button 
                    className='button button-submit'
                    type="submit"
                    disabled={!dirty}
                >
                    Submit
                </button>
                <button
                    className='button'
                    type="button"
                    onClick={() => resetForm({ values: initialFormValues  })}
                    disabled={!dirty}
                >
                    Reset
                </button>
            </div>
            <pre className='pre'>{JSON.stringify(cleanEmptyValues(values), null, 2)}</pre>
        </Form>
        )}
        </Formik>
    </div>
    );
}

export default UserForm