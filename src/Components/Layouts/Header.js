import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  Typography,
  // Button,
  // IconButton,
} from "@material-ui/core";
// import MenuIcon from "@material-ui/icons/Menu";

/* const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
})); */

export default function Header() {
  /* const classes = useStyles(); */

  return (
    <div>
      <AppBar position="static">
        <Toolbar style={{ background: "purple" }}>
          <Typography variant="h3" color="inherit">
            Exercise Database
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
