import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Component } from 'react';
import { GoSearch } from 'react-icons/go';
import * as yup from 'yup';

const mySchema = yup.object().shape({
  search: yup.string().required('This field is required'),
});

export class SearchForm extends Component {
  render() {
    return (
      <Formik
        initialValues={{ search: '' }}
        validationSchema={mySchema}
        onSubmit={this.props.onSubmit}
      >
        {props => {
          return (
            <Form>
              <button type="submit" disabled={props.isSubmitting}>
                <GoSearch />
              </button>

              <Field name="search" />
              <ErrorMessage name="search" />
            </Form>
          );
        }}
      </Formik>
    );
  }
}
