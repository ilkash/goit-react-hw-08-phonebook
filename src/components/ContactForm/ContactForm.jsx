import { useDispatch } from 'react-redux';
import { Formik } from 'formik';
import * as yup from 'yup';
import 'yup-phone';

import 'react-toastify/dist/ReactToastify.css';

import { addContact } from 'Redux/operations';

import {
  Form,
  FormField,
  FieldFormik,
  ErrorMessage,
  Button,
  LabelWrapper,
  LabelSpan,
} from './ContactForm.styled';

const schema = yup.object().shape({
  name: yup
    .string()
    .trim()
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      'Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d`Artagnan'
    )
    .required(),
  number: yup.string().required(),
});

const initialValues = { name: '', number: '' };

export const ContactForm = () => {
  const dispatch = useDispatch();
  const onAddContact = data => {
    dispatch(addContact(data));
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, { resetForm }) => {
        onAddContact({ ...values });
        resetForm();
      }}
      validationSchema={schema}
    >
      <Form autoComplete="off">
        <FormField>
          <LabelWrapper>
            <LabelSpan>Name</LabelSpan>
          </LabelWrapper>
          <FieldFormik type="text" name="name" placeholder="Name" />
          <ErrorMessage name="name" component="span" />
        </FormField>
        <FormField>
          <LabelWrapper>
            <LabelSpan>Number</LabelSpan>
          </LabelWrapper>
          <FieldFormik
            type="tel"
            name="number"
            placeholder="+380 95 271 1000"
          />
          <ErrorMessage name="number" component="span" />
        </FormField>
        <Button type="submit">Add contact</Button>
      </Form>
    </Formik>
  );
};
