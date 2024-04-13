import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";
import { useSelector } from "react-redux";
import { selectError, selectIsLoading } from "../../redux/auth/selectors";
import Loading from "../../components/Loading/Loading";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import Container from "@mui/material/Container";

export default function RegisterPage() {
  const loading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  return (
    <Container maxWidth="sm">
      {loading && <Loading />}
      {error && <ErrorMessage />}
      <RegistrationForm />
    </Container>
  );
}
