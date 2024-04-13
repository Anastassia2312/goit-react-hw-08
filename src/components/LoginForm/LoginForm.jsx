import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import { login } from "../../redux/auth/operations";
import * as Yup from "yup";
import Box from "@mui/system/Box";
import { Button, TextField } from "@mui/material";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";

const validationSchema = Yup.object().shape({
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

export default function LoginForm() {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values, actions) => {
      dispatch(login(values));
      actions.resetForm();
    },
  });

  return (
    <Box className={css.box} display="flex">
      <LockOpenOutlinedIcon />
      <form onSubmit={formik.handleSubmit} autoComplete="off">
        <TextField
          fullWidth
          required
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
        />
        <TextField
          fullWidth
          required
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
        />
        <Button variant="outlined" type="submit">
          Log In
        </Button>
      </form>
    </Box>
  );
}

/*<TextField
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
/>;*/
