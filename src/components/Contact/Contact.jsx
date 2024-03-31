import { FaUser } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import css from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";
export default function Contact({ info }) {
  const dispatch = useDispatch();
  return (
    <div className={css.box}>
      <div>
        <p className={css.string}>
          <FaUser />
          {info.name}
        </p>
        <p className={css.string}>
          <FaPhoneAlt />
          {info.number}
        </p>
      </div>
      <button
        className={css.button}
        onClick={() => dispatch(deleteContact(info.id))}
      >
        Delete
      </button>
    </div>
  );
}
