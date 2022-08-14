import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Component } from 'react';
import { GoSearch } from 'react-icons/go';
import * as yup from 'yup';

const mySchema = yup.object().shape({
  search: yup.string().required('Required'),
});

export class SearchForm extends Component {
  render() {
    return (
      <Formik
        initialValues={{ search: '' }}
        validationSchema={mySchema}
        onSubmit={this.props.onSubmit}
      >
        <Form>
          <button type="submit">
            <GoSearch />
          </button>

          <Field name="search" />
          <ErrorMessage name="search" />
        </Form>
      </Formik>
    );
  }
}
