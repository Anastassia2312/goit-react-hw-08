import css from "./HomePage.module.css";
export default function HomePage() {
  return (
    <div className={css.wrapper}>
      <h1 className={css.header}>Contacts</h1>
      <p className={css.text}>
        Application for creating your personal{" "}
        <span className={css.span}>Phonebook</span>
      </p>
    </div>
  );
}
