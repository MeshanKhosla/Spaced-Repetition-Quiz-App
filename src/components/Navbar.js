import React from "react";
import { Link } from "react-router-dom";
import {
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    Button,
    makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

const Navbar = () => {
    const classes = useStyles();

    return (
        <AppBar position="sticky">
            <Toolbar>
                <IconButton
                    edge="start"
                    className={classes.menuButton}
                    aria-label="menu"
                ></IconButton>
                 <Typography variant="h6" className={classes.title}>
                    <Link to="/">Spaced Repetition Quiz App</Link>
                </Typography> 
                <Button>
                    <Link to="/">Quiz</Link>
                </Button>
                <Button>
                    <Link to="/add">Add Questions</Link>
                </Button>
                <Button>
                    <Link to="/info">Info</Link>
                </Button>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
