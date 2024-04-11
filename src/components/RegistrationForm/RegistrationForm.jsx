import { Formik, Form, Field } from "formik";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import css from "./RegistrationForm.module.css";
import { FormControl } from "@mui/material";
import { Button, TextField } from "@mui/material";

export default function RegistrationForm() {
  const dispatch = useDispatch();
  const handleSubmit = (values, actions) => {
    dispatch(register(values));
    actions.resetForm();
  };
  return (
    <Container maxWidth="sm">
      <Box className={css.box}>
        <Formik
          initialValues={{
            name: "",
            email: "",
            password: "",
          }}
          onSubmit={handleSubmit}
        >
          <Form autoComplete="off">
            <TextField required id="name-label" label="Name">
              <Field type="text" name="name" as={TextField} />
            </TextField>
            <TextField required id="email-label" label="Email">
              <Field type="email" name="email" as={TextField} />
            </TextField>
            <TextField
              required
              id="password-label"
              label="Password"
              type="password"
            >
              <Field type="password" name="password" as={TextField} />
            </TextField>
            <button type="submit">Register</button>
          </Form>
        </Formik>
      </Box>
    </Container>
  );
}
