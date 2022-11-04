import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';

import TerminalIcon from '@mui/icons-material/Terminal';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import GoogleIcon from '@mui/icons-material/Google';
import Paper from '@mui/material/Paper';

const Skills = () => {

  const styleListItems = {paddingLeft: '55px', margin: '-5px'};

  return(
  <Paper sx={{margin: '2.5rem'}}>
  <div className="content-container">
  <div className="content-title">My Skills:</div>
  <div>
  <List>
  <ListItem>
  <ListItemIcon>
  <TerminalIcon />
  </ListItemIcon>
  <ListItemText primary='Programming Languages:' primaryTypographyProps={{fontSize: '1.25rem'}} />
  </ListItem>
  <ListItem><ListItemText secondary='-  HTML' sx={styleListItems} secondaryTypographyProps={{fontSize: '1rem'}}/></ListItem>
  <ListItem><ListItemText secondary='-  CSS' sx={styleListItems} secondaryTypographyProps={{fontSize: '1rem'}}/></ListItem>
  <ListItem><ListItemText secondary='-  JavaScript' sx={styleListItems} secondaryTypographyProps={{fontSize: '1rem'}}/></ListItem>
  <ListItem><ListItemText secondary='-  MERN Stack(MongoDB, Express, React, Node.js)' sx={styleListItems} secondaryTypographyProps={{fontSize: '1rem'}}/></ListItem>
  <ListItem><ListItemText secondary='-  Firebase' sx={styleListItems} secondaryTypographyProps={{fontSize: '1rem'}}/></ListItem>
  <ListItem><ListItemText secondary='-  A bit of python for (automating tests of a website)' sx={styleListItems} secondaryTypographyProps={{fontSize: '1rem'}}/></ListItem>

  <Divider variant="inset" component="li" sx={{padding: '1rem'}}/>

  <ListItem>
  <ListItemIcon>
  <MenuBookIcon />
  </ListItemIcon>
  <ListItemText primary='Others:' primaryTypographyProps={{fontSize: '1.25rem'}}/>
  </ListItem>
  <ListItem><ListItemText secondary='-  Passion for all things IT, building own PC and troubleshooting problems encountered' sx={styleListItems} secondaryTypographyProps={{fontSize: '1rem'}}/></ListItem>
  <ListItem><ListItemText secondary='-  Familiar with Unix-like operating system such as Linux' sx={styleListItems} secondaryTypographyProps={{fontSize: '1rem'}}/></ListItem>
  <ListItem><ListItemText secondary='-  Frequent user of Microsoft Word, PowerPoint, Excel and Google Docs' sx={styleListItems} secondaryTypographyProps={{fontSize: '1rem'}}/></ListItem>
  <ListItem><ListItemText secondary='-  Understanding of SDLC, Agile (Scrum Methodology)' sx={styleListItems} secondaryTypographyProps={{fontSize: '1rem'}}/></ListItem>
  <ListItem><ListItemText secondary='-  Demonstrated ability to create and present reports for various stakeholders' sx={styleListItems} secondaryTypographyProps={{fontSize: '1rem'}}/></ListItem>
  <ListItem><ListItemText secondary='-  Demonstrated ability to manage schedules and adhering to deadlines' sx={styleListItems} secondaryTypographyProps={{fontSize: '1rem'}}/></ListItem>
  <ListItem><ListItemText secondary='-  Well-developed communication skills (written and spoken) from working in many group assignments during my studies' sx={styleListItems} secondaryTypographyProps={{fontSize: '1rem'}}/></ListItem>
  <ListItem><ListItemText secondary='-  Proven management capability through leading and solving problems encountered during the DFI Project (University project)' sx={styleListItems} secondaryTypographyProps={{fontSize: '1rem'}}/></ListItem>


  <Divider variant="inset" component="li" sx={{padding: '1rem'}}/>

  <ListItem>
  <ListItemIcon>
  <GoogleIcon />
  </ListItemIcon>
  <ListItemText primary='Proficient at using GOOGLE to solve any problem I encounter.' primaryTypographyProps={{fontSize: '1.25rem'}}/>
  </ListItem>
  </List>
  </div>

  </div>
  </Paper>
  )
}

export default Skills;
