import {
  AppBar, Box, Button, Divider, Drawer, Hidden, IconButton, List, ListItem,
  ListItemIcon, ListItemText, makeStyles, Toolbar, Typography, useTheme
 } from '@material-ui/core';
import { AccountCircle,ChevronLeft,ChevronRight,Inbox,Mail,Menu,ExitToApp
} from '@material-ui/icons';
import React from 'react';
import clsx from 'clsx';


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    paddingLeft: 25,
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  grow: {
    flexGrow: 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 2 ,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 10,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(6),
  },
  icon: {
    fontSize: 'large',
    border: 'none',
    height: 10,
  },
  logo: {
    height: 30,
    border: 'none',
  },
}));

const DashBoard = () => {

  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

    return (
      
    <div className={classes.root}>

      <AppBar
        position="fixed"
        color='primary'
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <Menu />
          </IconButton>

          <Button 
            variant="outlined"
            color='inherit'
            startIcon= {<img src="/images/logo.png" alt="logo" className={classes.logo} />}
            className={classes.logo}
            >
          </Button>
          
          
          <div className={classes.grow} />

          <Button 
            variant="outlined"
            color='inherit'
            startIcon={<ExitToApp />}
            className={classes.icon}
            >
          </Button>

          <Button 
            variant="outlined"
            color='inherit'
            startIcon={<AccountCircle />}
            className={classes.icon}
            >
          </Button>
          
          
        </Toolbar>
      </AppBar>

      <Drawer
        variant="permanent" 
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRight /> : <ChevronLeft />}
          </IconButton>
        </div>
        <Divider />
        <List>
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <Inbox /> : <Mail />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>

      
      <main className={classes.content}>
        {/* Colocar aqui as outras paginas dentro do dashboard */}
      </main>
    
    </div>
    );
}
 
export default DashBoard;
