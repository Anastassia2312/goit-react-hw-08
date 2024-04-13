import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts/operations";
import { Button, TextField } from "@mui/material";
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
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      name: "",
      number: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values, actions) => {
      dispatch(
        addContact({
          name: values.name,
          number: values.number,
        })
      );
      actions.resetForm();
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <TextField
        fullWidth
        sx={{
          marginBottom: "16px",
        }}
        variant="outlined"
        required
        color="secondary"
        id="name"
        name="name"
        label="Name"
        type="text"
        value={formik.values.name}
        onChange={formik.handleChange}
      />
      <TextField
        fullWidth
        sx={{
          marginBottom: "16px",
        }}
        variant="outlined"
        required
        color="secondary"
        id="name"
        name="number"
        label="Number"
        type="number"
        value={formik.values.number}
        onChange={formik.handleChange}
      />
      <Button variant="outlined">Add contact</Button>
    </form>
  );
}
