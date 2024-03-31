import { useId } from "react";
import { nanoid } from "nanoid";
import { Formik, Form, Field, ErrorMessage } from "formik";
import css from "./ContactForm.module.css";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsOps";

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too short!")
    .max(50, "Too long!")
    .required("Required"),
  number: Yup.string()
    .min(3, "Too short!")
    .max(50, "Too long!")
    .required("Required"),
});
export default function ContactForm() {
  const usernameId = useId();
  const numberId = useId();
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(
      addContact({
        name: values.name,
        number: values.number,
      })
    );
    actions.resetForm();
  };
  return (
    <Formik
      initialValues={{
        name: "",
        number: "",
      }}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <Form>
        <div className={css.wrapper}>
          <label className={css.label} htmlFor={usernameId}>
            Name
          </label>
          <Field
            className={css.input}
            type="text"
            name="name"
            id={usernameId}
          />
          <ErrorMessage className={css.error} name="name" component="span" />
        </div>
        <div className={css.wrapper}>
          <label htmlFor={numberId}>Number</label>
          <Field
            className={css.input}
            type="number"
            name="number"
            id={numberId}
          />
          <ErrorMessage className={css.error} name="number" component="span" />
        </div>
        <button className={css.button} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
