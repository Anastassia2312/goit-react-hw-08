import { useDispatch, useSelector } from "react-redux";
import css from "./SearchBox.module.css";
import { changeFilter } from "../../redux/filters/slice";
import { selectNameFilter } from "../../redux/filters/selectors";
import { TextField } from "@mui/material";
import Box from "@mui/system/Box";
export default function SearchForm() {
  const filter = useSelector(selectNameFilter);
  const dispatch = useDispatch();
  return (
    <Box className={css.box}>
      <p className={css.text}>Find contacts by name</p>
      <TextField
        variant="filled"
        size="small"
        type="text"
        value={filter}
        onChange={(e) => dispatch(changeFilter(e.target.value))}
      />
    </Box>
  );
}
