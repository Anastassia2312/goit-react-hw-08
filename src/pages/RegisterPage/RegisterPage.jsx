import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";
import { useSelector } from "react-redux";
import { selectError, selectIsLoading } from "../../redux/auth/selectors";
import Loading from "../../components/Loading/Loading";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";

export default function RegisterPage() {
  const loading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  return (
    <div>
      {loading && <Loading />}
      {error && <ErrorMessage />}
      <RegistrationForm />
    </div>
  );
}
