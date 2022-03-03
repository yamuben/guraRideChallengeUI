import { NavLink } from "react-router-dom";
import { useNavStyles } from "./dashboard.style";
import NotificationsIcon from "@material-ui/icons/Notifications";
import SettingsIcon from "@material-ui/icons/Settings";
import DashboardIcon from "@material-ui/icons/Dashboard";

const SideNav = () => {
  const classes = useNavStyles();

  return (
    <nav>
      <ul className={classes.list}>
        <li className={`${classes.listItem} ${classes.mg1}`}>
          <DashboardIcon className={classes.linkIcon} />
          <NavLink className={classes.linkItem} to="/">
            Dashboard
          </NavLink>
        </li>
        <li className={`${classes.listItem} ${classes.mg1}`}>
          <DashboardIcon />
          <NavLink className={classes.linkItem} to="/">
            Sections
          </NavLink>
        </li>
        <li className={`${classes.listItem} ${classes.mg1}`}>
          <SettingsIcon />
          <NavLink className={classes.linkItem} to="/">
            Bonds
          </NavLink>
        </li>
        <li className={`${classes.listItem} ${classes.mg1}`}>
          <NotificationsIcon />
          <NavLink className={classes.linkItem} to="/">
            Notifications
          </NavLink>
        </li>
        <li className={`${classes.listItem} ${classes.mg1}`}>
          <SettingsIcon />
          <NavLink className={classes.linkItem} to="/">
            Settings
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default SideNav;
