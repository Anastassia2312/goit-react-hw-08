import { useSelector } from "react-redux";
import { selectError } from "../../redux/contacts/selectors";

export default function ErrorMessage() {
  const error = useSelector(selectError);
  return (
    error && (
      <div>
        <p>Ooops! Error, please reload the page...</p>
      </div>
    )
  );
}
