import { FaUser } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import css from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
import { Button } from "@mui/material";
export default function Contact({ info }) {
  const dispatch = useDispatch();
  return (
    <div className={css.box}>
      <div>
        <p className={css.string}>
          <FaUser className={css.icon} />
          {info.name}
        </p>
        <p className={css.string}>
          <FaPhoneAlt className={css.icon} />
          {info.number}
        </p>
      </div>
      <Button
        variant="contained"
        className={css.button}
        onClick={() => dispatch(deleteContact(info.id))}
      >
        Delete
      </Button>
    </div>
  );
}
