import { useSelector } from "react-redux";
import LoginForm from "../../components/LoginForm/LoginForm";
import { selectError, selectIsLoading } from "../../redux/auth/selectors";
import Loading from "../../components/Loading/Loading";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";

export default function LoginPage() {
  const loading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  return (
    <div>
      {loading && <Loading />}
      {error && <ErrorMessage />}
      <LoginForm />
    </div>
  );
}
