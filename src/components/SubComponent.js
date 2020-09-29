import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CodeCommenting from "./Content/CodeCommenting";
import ScreenOptimization from "./Content/ScreenOptimization";
const drawerWidth = 350;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex"
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginRight: drawerWidth
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth,
    top: "64px"
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3)
  }
}));

export default function SubComponent(props) {
  const classes = useStyles();
  const { panelName } = props;
  return (
    <div className={classes.root}>
      <main className={classes.content}>
        {panelName === 0 ? (
          <CodeCommenting />
        ) : panelName === 6 ? (
          <ScreenOptimization />
        ) : (
          <p>hey2</p>
        )}
      </main>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper
        }}
        anchor="right"
        style={{ top: "64px" }}
      ></Drawer>
    </div>
  );
}
