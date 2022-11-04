import Paper from '@mui/material/Paper';

const Contacts = () => {

  return(
    <Paper className="contacts-container">
    <div className="content-title">Contact Details </div>
  <div>
    <p>Name: Long Mann</p>
    <p>Mobile Phone: 04 1200 8018</p>
    <p>Email: longmnn@gmail.com</p>
    <p>Github Repositories: <a href="https://github.com/Longmann94?tab=repositories">Linked here</a></p>
  </div>
  </Paper>
  )
}

export default Contacts;
