import css from "./ContactList.module.css";
import Contact from "../Contact/Contact";
import { selectFilteredContacts } from "../../redux/contacts/selectors";
import { useSelector } from "react-redux";
import Box from "@mui/system/Box";

export default function ContactList() {
  const contacts = useSelector(selectFilteredContacts);
  return (
    <ul>
      <Box className={css.box}>
        {contacts.map((contact) => (
          <li key={contact.id}>
            <Contact info={contact} />
          </li>
        ))}
      </Box>
    </ul>
  );
}
