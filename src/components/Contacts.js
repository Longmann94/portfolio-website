import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';

import ContactPageIcon from '@mui/icons-material/ContactPage';

const Contacts = () => {

  return(
    <Paper className="content-container">
    <div className="content-title">My Contacts:</div>
    <div>
    <List>
    <ListItem>
    <ListItemIcon>
    <ContactPageIcon />
    </ListItemIcon>
    <ListItemText primary='Here are some ways you can reach me:' primaryTypographyProps={{fontSize: '1.75rem', marginLeft: '-1rem'}} />
    </ListItem>
    <ListItem><ListItemText secondary='Email: longmnn@gmail.com' secondaryTypographyProps={{fontSize: '1.25rem'}} sx={{paddingLeft: '2.5rem'}}/></ListItem>
    <ListItem><ListItemText secondary='Phone: 04 1200 8018' secondaryTypographyProps={{fontSize: '1.25rem'}} sx={{paddingLeft: '2.5rem'}}/></ListItem>
    </List>
    <Divider />
    <p><b>Github Repositories:</b> <Link href='https://github.com/Longmann94?tab=repositories' target="_blank" rel="noopener noreferrer" underline="hover">https://github.com/Longmann94?tab=repositories</Link></p>
    <p><b>LinkedIn:</b> <Link href='www.linkedin.com/in/long-mann-84076b150' target="_blank" rel="noopener noreferrer" underline="hover">www.linkedin.com/in/long-mann-84076b150</Link></p>
  </div>
  </Paper>
  )
}

export default Contacts;