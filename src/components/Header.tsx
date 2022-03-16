import * as React from "react";
import {Link} from "react-router-dom";
import {makeStyles} from "@mui/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import {Theme} from "@mui/material";

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        textDecoration: "none",
        color: "white",
    },
    menu: {
        [theme.breakpoints.down("md")]: {
            textAlign: "center",
        },
    },
}));

type HeaderProps = {
    id?: number,
}

export default function Header({id}: HeaderProps) {
    const classes = useStyles();

    return (
        <Box className={classes.menu} pb={4}>
            <AppBar position="static">
                <Toolbar>
                    <Link to="posts" className={classes.root}>
                        <Button color="inherit">Posts</Button>
                    </Link>
                    <Link to="albums" className={classes.root}>
                        <Button color="inherit">Albums</Button>
                    </Link>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
