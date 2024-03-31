import { useDispatch, useSelector } from "react-redux";
import css from "./SearchBox.module.css";
import { changeFilter, selectNameFilter } from "../../redux/filtersSlice";
export default function SearchForm() {
  const filter = useSelector(selectNameFilter);
  const dispatch = useDispatch();
  return (
    <div className={css.wrapper}>
      <p className={css.text}>Find contacts by name</p>
      <input
        className={css.input}
        type="text"
        value={filter}
        onChange={(e) => dispatch(changeFilter(e.target.value))}
      />
    </div>
  );
}
