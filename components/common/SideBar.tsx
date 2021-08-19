import { useEffect, useState } from 'react';
import Box from '@material-ui/core/Box';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';
import { useRouter } from 'next/router';
import Link from 'next/link'

const useStyles = makeStyles({
    list: {
        width: 250,
    },
});

interface SideBarProps {
    open: boolean;
    onClose?: () => void;

}

export const SideBar = (props: SideBarProps) => {
    const { open, onClose } = props;
    const classes = useStyles();
    const router = useRouter();
    useEffect(() => {
    }, [open, onClose]);

    return (
        <div>
            <SwipeableDrawer
                anchor="left"
                open={open}
                onClose={() => onClose()}
                onOpen={() => { }}
            >
                <div className={classes.list}>
                    <Box textAlign="center" p={2}>
                        Components
                    </Box>
                    <Divider />
                    <List>
                        <ListItem button>
                            <Link href="/">
                                <a>Home</a>
                            </Link>
                        </ListItem>
                        <ListItem button>
                            <Link href="/cases/cases">
                                <a>Infections</a>
                            </Link>
                        </ListItem>
                    </List>
                </div>
            </SwipeableDrawer>
        </div>
    );
}