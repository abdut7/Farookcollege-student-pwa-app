import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router'
import classNames from 'classnames';
import { Link } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { mainListItems, secondaryListItems } from './listItems';
import SimpleLineChart from './SimpleLineChart';
import SimpleTable from './SimpleTable';
import Grid from '@material-ui/core/Grid';
import Profile from './Profile';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';

import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import AssignmentIcon from '@material-ui/icons/Assignment';
import Lock from '@material-ui/icons/Lock';
import Book from '@material-ui/icons/Book';
import Edit from '@material-ui/icons/Edit';
import Examapp from '../Pages/Examapp';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from "react-router-dom";
let indexpage=require('../index')


const drawerWidth = 240;
const routes = [
  {
    path: "../Pages/Examapp",
    
    
    main: () => <Examapp/>
  },
  
];

const styles = theme => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
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
    marginLeft: 12,
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing.unit * 7,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing.unit * 9,
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    height: '100vh',
    overflow: 'auto',
  },
  chartContainer: {
    marginLeft: -22,
  },
  tableContainer: {
    height: 320,
  },
  h5: {
    marginBottom: theme.spacing.unit * 2,
  },
});

class Dashboard extends React.Component {
  handleClicked() {
    console.log("firstList Clicked")
    ReactDOM.render(<Dashboard />, this.document.getElementById('root'));
    
   

  
}
gradeClicked() {
  console.log("2nd")
}
halltkicketClicked() {
  console.log("2nd")
}
timetableClicked() {
  console.log("2nd")
}
sem1Clicked() {
  console.log("2nd")
}
sem2Clicked() {
  console.log("2nd")
}
sem3Clicked() {
  console.log("2nd")
}
sem4Clicked() {
  console.log("2nd")
}
sem5Clicked() {
  console.log("2nd")
}
sem6Clicked() {
  console.log("2nd")
}
  state = {
    open: true,
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };


  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position="absolute"
          className={classNames(classes.appBar, this.state.open && classes.appBarShift)}
        >
          <Toolbar disableGutters={!this.state.open} className={classes.toolbar}>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.handleDrawerOpen}
              className={classNames(
                classes.menuButton,
                this.state.open && classes.menuButtonHidden,
              )}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              className={classes.title}
            >
              Farook college
            </Typography>
            <IconButton color="inherit">
              <Badge badgeContent={4} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          classes={{
            paper: classNames(classes.drawerPaper, !this.state.open && classes.drawerPaperClose),
          }}
          open={this.state.open}
        >
          <div className={classes.toolbarIcon}>
            <IconButton onClick={this.handleDrawerClose}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
          <Divider />
          <List><div>
          
    <ListItem  button  onClick={this.handleClicked} >
      <ListItemIcon>
        <DashboardIcon/>
      </ListItemIcon>
      <ListItemText primary="Exam Application" />
    </ListItem>
  
    <ListItem button onClick={this.gradeClicked}>
      <ListItemIcon>
        <Book />
      </ListItemIcon>
      <ListItemText primary="Grade card" />
    </ListItem>
    <ListItem button onClick={this.halltkicketClicked}>
      <ListItemIcon>
        <Edit />
      </ListItemIcon>
      <ListItemText primary="HallTicket" />
    </ListItem>
    <ListItem button onClick={this.timetableClicked}>
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="TimeTable" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <Lock />
      </ListItemIcon>
      <ListItemText primary="Log Out" />
    </ListItem>
  </div>

  <div>
    <ListSubheader inset>Result</ListSubheader>
    <ListItem button onClick={this.sem1Clicked}>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Sem 1" />
    </ListItem>
    <ListItem button onClick={this.sem2Clicked}>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="sem 2" />
    </ListItem>
    <ListItem button onClick={this.sem3Clicked}>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="sem 3" />
    </ListItem>
    <ListItem button onClick={this.sem4Clicked}>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="sem 4" />
    </ListItem>
        <ListItem button onClick={this.sem5Clicked}>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="sem 5" />
    </ListItem>
      <ListItem button onClick={this.sem6Clicked}>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="sem 6" />
    </ListItem>
  </div></List>
         
        </Drawer>
        <div id="bodys">
        <main className={classes.content}>
          <div className={classes.appBarSpacer} />
          <Grid direction='column' >
          <Grid item xs={12} sm={6} lg={6} md={6}>
         <Typography variant="h4" gutterBottom component="h2">
            Personal Status
          </Typography>
          <Typography component="div" className={classes.chartContainer}>
            <SimpleLineChart />
            </Typography>
        
        </Grid>
        <Grid item xs={12} sm={6} lg={6} md={6}>
       <Profile />
       
        
        </Grid>
          </Grid>
          <Typography variant="h4" gutterBottom component="h2">
           Attendence
          </Typography>
      <div className={classes.tableContainer}>
            <SimpleTable />
          </div>
        </main>
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Dashboard);
