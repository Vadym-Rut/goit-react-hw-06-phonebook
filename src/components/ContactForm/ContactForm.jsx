// import PropTypes from 'prop-types';
import { FormEl } from './ContactForm.styled';
import { Formik, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contactsSlice';
import { getContacts } from 'redux/selectors';

const {
  validName: { checkName, messageName },
  validNum: { checkNum, messageNum },
} = {
  validName: {
    checkName: /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
    messageName: 'Name may contain only letters',
  },
  validNum: {
    checkNum:
      /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
    messageNum: 'Phone number must be digits',
  },
};

const schema = yup.object().shape({
  name: yup
    .string()
    .matches(checkName, messageName)
    .required('Name is required'),
  number: yup
    .string()
    .matches(checkNum, messageNum)
    .required('Number is required'),
});

const initialValues = {
  name: '',
  number: '',
};

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const handleSubmit = (values, { resetForm }) => {
    const isIncludes = contacts.some(
      ({ name, number }) =>
        name.toLowerCase() === values.name.toLowerCase() ||
        number === values.number
    );
    if (isIncludes) {
      alert('A contact with the same name or number is already in contacts');
      return;
    }

    dispatch(addContact(values));
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <FormEl>
        <label htmlFor="name">
          Name
          <Field type="text" name="name" />
          <ErrorMessage name="name" component="div" />
        </label>
        <label htmlFor="number">
          Number
          <Field type="tel" name="number" />
          <ErrorMessage name="number" component="div" />
        </label>
        <button type="submit">Add contact</button>
      </FormEl>
    </Formik>
  );
};

export default ContactForm;
