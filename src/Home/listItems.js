import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import AssignmentIcon from '@material-ui/icons/Assignment';
import Lock from '@material-ui/icons/Lock';
import Book from '@material-ui/icons/Book';
import Edit from '@material-ui/icons/Edit';



export const mainListItems = (
  
  <div>
    <ListItem  button  onClick={ console.log('clicked')}>
      <ListItemIcon>
        <DashboardIcon/>
      </ListItemIcon>
      <ListItemText primary="Exam Application" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <Book />
      </ListItemIcon>
      <ListItemText primary="Grade card" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <Edit />
      </ListItemIcon>
      <ListItemText primary="HallTicket" />
    </ListItem>
    <ListItem button>
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
);

export const secondaryListItems = (
  <div>
    <ListSubheader inset>Result</ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Sem 1" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="sem 2" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="sem 3" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="sem 4" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="sem 5" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="sem 6" />
    </ListItem>
  </div>
);