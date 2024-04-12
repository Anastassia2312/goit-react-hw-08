import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import css from "./RegistrationForm.module.css";
import { Button, TextField } from "@mui/material";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too short!")
    .max(50, "Too long!")
    .required("Required"),
  email: Yup.string()
    .min(3, "Too short!")
    .max(50, "Too long!")
    .email("Must be a valid email")
    .required("Required"),
  password: Yup.string()
    .min(4, "Too short!")
    .max(50, "Too long!")
    .required("Required"),
});

export default function RegistrationForm() {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values, actions) => {
      dispatch(register(values));
      actions.resetForm();
    },
  });
  return (
    <Container maxWidth="sm">
      <Box
        className={css.box}
        display="flex"
        sx={{
          gap: "16px",
        }}
      >
        <form onSubmit={formik.handleSubmit}>
          <TextField
            fullWidth
            className={css.input}
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
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
          />
          <TextField
            fullWidth
            required
            className={css.input}
            variant="outlined"
            id="email"
            sx={{
              marginBottom: "16px",
            }}
            name="email"
            label="Email"
            type="email"
            color="secondary"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
          <TextField
            fullWidth
            required
            className={css.input}
            variant="outlined"
            id="password"
            sx={{
              marginBottom: "16px",
            }}
            name="password"
            label="Password"
            type="password"
            color="secondary"
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />

          <Button variant="contained" color="primary" type="submit">
            Register
          </Button>
        </form>
      </Box>
    </Container>
  );
}

/*<TextField
   fullWidth
   id="email"
   name="email"
   label="Email"
   value={formik.values.email}
   onChange={formik.handleChange}
   onBlur={formik.handleBlur}
   error={formik.touched.email && Boolean(formik.errors.email)}
   helperText={formik.touched.email && formik.errors.email}
 />;*/

/*<TextField required id="name-label" label="Name">
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
            </TextField>*/
