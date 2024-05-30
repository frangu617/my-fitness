import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useTheme, useMediaQuery, Drawer, List, ListItem, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import "./NavBar.scss";
export default function NavBar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const toggleDrawer =
    (open: boolean | ((prevState: boolean) => boolean)) =>
    (event: { type: string; key: string }) => {
      if (
        event.type === "keydown" &&
        (event.key === "Tab" || event.key === "Shift")
      ) {
        return;
      }
      setDrawerOpen(open);
    }

  return (
    <nav className="nav-bar">
      {!isMobile ? (
        <>
          <div className="title" style={{ width: "30wv", height: "5rem" }}>
            <img src="./fitnessLogo.svg" alt="" style={{ height: "15rem" }} />
          </div>
          <h2 className="outlined-text" style ={{ minWidth: "240px" }}> My Fitness</h2>
          <div className="links" style={{ width: "70wv" }}>
            <NavLink to="/">
              <button>Home</button>
            </NavLink>
            <NavLink to="/user">
              <button>User</button>
            </NavLink>
            <NavLink to="/login">
              <button>Login</button>
            </NavLink>
            <NavLink to="/logout">
              <button>Logout</button>
            </NavLink>
            <NavLink to="/past-workout">
              <button>Past Workouts</button>
            </NavLink>
            <NavLink to="/today-workout">
              <button>Today Workout</button>
            </NavLink>
          </div>
        </>
      ) : (
        <>
          <div className="title">
            <img src="./fitnessLogo.svg" alt="" style={{ height: "5rem" }} />
            <h6 className="outlined-text"> My Fitness</h6>
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
              <List>
                <ListItem>
                  <NavLink to="/">
                    <button>Home</button>
                  </NavLink>
                </ListItem>
                <ListItem>
                  <NavLink to="/user">
                    <button>User</button>
                  </NavLink>
                </ListItem>
                <ListItem>
                  <NavLink to="/login">
                    <button>Login</button>
                  </NavLink>
                </ListItem>
                <ListItem>
                  <NavLink to="/logout">
                    <button>Logout</button>
                  </NavLink>
                </ListItem>
                <ListItem>
                  <NavLink to="/past-workout">
                    <button>Past Workouts</button>
                  </NavLink>
                </ListItem>
                <ListItem>
                  <NavLink to="/today-workout">
                    <button>Today Workout</button>
                  </NavLink>
                </ListItem>
              </List>
            </Drawer>
          </div>
          
        </>
      )}
    </nav>
  );
}
