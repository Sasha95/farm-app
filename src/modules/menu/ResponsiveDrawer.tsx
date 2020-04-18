import React, { useState } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Hidden } from '@material-ui/core';
import classnames from "classnames";
import { ItemListDrawer } from '../../components/itemDrawer/ItemListDrawer';
import { ItemDrawer } from '../../components/itemDrawer/ItemDrawer';
import { IDictionary } from '../../utils/interfaces';
import { Profile } from '../../components/profile/Profile';
import { Sales } from '../sales/Sales';
const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    drawer: {
      [theme.breakpoints.up('sm')]: {
        width: drawerWidth,
        flexShrink: 0,
      },
    },
    appBar: {
      [theme.breakpoints.up('sm')]: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
      },
    },
    menuButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.up('sm')]: {
        display: 'none',
      },
    },
    toolbar: theme.mixins.toolbar,
    toolbarLogo: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    drawerPaper: {
      width: drawerWidth,
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
    profile: {
      marginLeft: 'auto',
      display: 'flex',
    },
  }),
);
interface ResponsiveDrawerProps {
  container?: any;
}

export const ResponsiveDrawer = (props: ResponsiveDrawerProps) => {
  const { container } = props;
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };


  const directories: IDictionary<string>[] = [
    { 'pharmacy': 'Аптеки' },
    { 'preparations': 'Препараты' },
    { 'code': 'Код АТН' },
    { 'produced': 'Производители' },
    { 'region': 'Регионы' },
    { 'types_region': 'Типы регионов' }]
  const administration: IDictionary<string>[] = [
    { 'users': 'Пользователи' },
    { 'roles': 'Роли' },
    { 'methods': 'Методы' },
    { 'access': 'Доступ по ролям' },
    { 'logs': 'Логи' }]
  const reports: IDictionary<string>[] = [{ 'charts': 'Графики' }]

  const drawer = (
    <div>
      <div className={classnames(classes.toolbar, classes.toolbarLogo)}>ЛОГО</div>
      <Divider />
      <ItemDrawer
        title={"Главная"}
        link={"main"}
      />
      <ItemDrawer
        title={"Продажи"}
        link={"sales"}
      />
      <ItemDrawer
        title={"Склады"}
        link={"warehouse"}
      />
      <ItemListDrawer title={"Отчеты"} listItems={reports} />
      <ItemListDrawer title={"Справочники"} listItems={directories} />
      <ItemListDrawer title={"Администрирование"} listItems={administration} />
    </div>
  );

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Responsive drawer
          </Typography>
          <Typography className={classes.profile}>
            <Profile />
          </Typography>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true,
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Typography paragraph>
          <Sales />
        </Typography>
      </main>
    </div>
  );
}