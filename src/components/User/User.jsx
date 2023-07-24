import { Formik, Field, Form } from 'formik';

const User = () => {
  return (
    <div className='user-form'>
        <Formik
        initialValues={{
            firstName: '',
            lastName: '',
            email: '',
        }}
        onSubmit={async (values) => {
            await new Promise((r) => setTimeout(r, 500));
            alert(JSON.stringify(values, null, 2));
        }}
        >
        <Form>
            <div>
                <label htmlFor="firstName">First Name</label>
                <Field id="firstName" name="firstName" placeholder="First Name" />
            </div>
            <div>
                <label htmlFor="lastName">Last Name</label>
                <Field id="lastName" name="lastName" placeholder="Last Name" />
            </div>
            <div>
                <label htmlFor="age">Age</label>
                <Field
                id="age"
                name="age"
                placeholder="Age"
                />
            </div>
            <label>
                <span id="employed">Employed</span>
                <Field type="checkbox" name="employed" />
            </label>
            <div id="checkbox-group">Checked</div>
            <div role="group" aria-labelledby="checkbox-group">
                <label>
                    <Field type="checkbox" name="checked" value="One" />
                    One
                </label>
                <label>
                    <Field type="checkbox" name="checked" value="Two" />
                    Two
                </label>
                <label>
                    <Field type="checkbox" name="checked" value="Three" />
                    Three
                </label>
          </div>
          <div id="my-radio-group">Picked</div>
          <div role="group" aria-labelledby="my-radio-group">
            <label>
              <Field type="radio" name="picked" value="One" />
              One
            </label>
            <label>
              <Field type="radio" name="picked" value="Two" />
              Two
            </label>
          </div>
            <button type="submit">Submit</button>
            <button type="">Reset</button>
        </Form>
        </Formik>
    </div>
    );
}

export default User