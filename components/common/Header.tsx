import React, { useEffect, useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core';
import Head from 'next/head'
import { siteTitle } from '../layout'


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
}));

interface HeaderProps {
    onMenuBottomClick: (open: boolean) => void;
  }

export const Header= (props: HeaderProps) => {
    const { onMenuBottomClick} = props;
    const [open, setOpen] = useState<boolean>(false);
    const classes = useStyles();
    useEffect(() => {
    }, [open]);
    return (
        <>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar variant="dense">
                        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                            <MenuIcon onClick={() => {setOpen(!open);onMenuBottomClick(!open)}} />
                        </IconButton>
                        <Typography variant="h6" color="inherit">
                            Cases Tracker
                        </Typography>
                    </Toolbar>
                </AppBar>
            </div>
        </>
    );
};
