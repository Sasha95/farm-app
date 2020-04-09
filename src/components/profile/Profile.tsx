import React, { useState } from 'react';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { Typography, makeStyles, Theme, createStyles } from '@material-ui/core';

// const useStyles = makeStyles((theme: Theme) =>
//   createStyles({
//     card: {
//       display: 'flex',
//       justifyContent: 'center',
//     }
// }))

export const Profile = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const classes = useStyles();

    return (
        <div>
            <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
            >
            <Typography>Карточка пользователя</Typography>
            </IconButton>
            <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}
            >
                <AccountCircle fontSize={"large"} />
                <MenuItem onClick={handleClose}>ФИО</MenuItem>
                <MenuItem onClick={handleClose}>Роль</MenuItem>
            </Menu>
        </div>
    )
}