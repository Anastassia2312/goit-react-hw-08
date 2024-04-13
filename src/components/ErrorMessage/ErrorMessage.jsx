import css from "./ErrorMessage.module.css";

export default function ErrorMessage() {
  return (
    <div>
      <p className={css.error}>Ooops! Error, please reload the page...</p>
    </div>
  );
}
