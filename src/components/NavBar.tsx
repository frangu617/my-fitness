import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  useTheme,
  useMediaQuery,
  Drawer,
  List,
  ListItem,
  IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const NavBar: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }
      setDrawerOpen(open);
    };

  return (
    <nav className="nav-bar">
      {!isMobile ? (
        <>
          <div className="title">
            <img className="logo" src="./fitnessLogo.svg" alt="Fitness Logo" />

            <h2 className="outlined-text">My Fitness</h2>
          </div>
          <div className="links" style={{ width: "70vw" }}>
            <NavLink to="/">
              <button>Home</button>
            </NavLink>
            <NavLink to="/user">
              <button>User</button>
            </NavLink>
            <NavLink to="/today-workout">
              <button>New Workout</button>
            </NavLink>
          </div>
        </>
      ) : (
        <>
          <div className="title">
            <img className="logo" src="./fitnessLogo.svg" alt="Fitness Logo" />

            <h2 className="outlined-text">My Fitness</h2>
          </div>
          <div className="links">
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="left"
              open={drawerOpen}
              onClose={toggleDrawer(false)}
            >
              <List
                style={{
                  background: "linear-gradient(to bottom, #017eb0, #0dd4fc)",
                  height: "100vh",
                }}
              >
                <ListItem>
                  <NavLink to="/">
                    <button onClick={toggleDrawer(false)}>Home</button>
                  </NavLink>
                </ListItem>
                <ListItem>
                  <NavLink to="/user">
                    <button onClick={toggleDrawer(false)}>User</button>
                  </NavLink>
                </ListItem>
                <ListItem>
                  <NavLink to="/login">
                    <button onClick={toggleDrawer(false)}>Login</button>
                  </NavLink>
                </ListItem>
                <ListItem>
                  <NavLink to="/logout">
                    <button onClick={toggleDrawer(false)}>Logout</button>
                  </NavLink>
                </ListItem>
                <ListItem>
                  <NavLink to="/past-workout">
                    <button onClick={toggleDrawer(false)}>Past Workouts</button>
                  </NavLink>
                </ListItem>
                <ListItem>
                  <NavLink to="/today-workout">
                    <button onClick={toggleDrawer(false)}>Today Workout</button>
                  </NavLink>
                </ListItem>
              </List>
            </Drawer>
          </div>
        </>
      )}
    </nav>
  );
};

export default NavBar;
