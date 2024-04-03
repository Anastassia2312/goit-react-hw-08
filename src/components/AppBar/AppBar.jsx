import Navigation from "../Navigation/Navigation";

import AuthNavigation from "../AuthNavigation/AuthNavigation";
import { useSelector } from "react-redux";
import {
  selectIsLoggedIn,
  selectIsRefreshing,
} from "../../redux/auth/selectors";
import UserMenu from "../UserMenu/UserMenu";

export default function AppBar() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  return (
    <header>
      <Navigation />
      {!isRefreshing && (
        <div>{isLoggedIn ? <UserMenu /> : <AuthNavigation />}</div>
      )}
    </header>
  );
}
