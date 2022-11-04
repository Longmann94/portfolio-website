import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';

const Contacts = () => {

  return(
    <Paper className="content-container">
    <div className="content-title">Contact Details </div>
  <div>
  <p>Here are my contact details, I thank you for having a look and can't wait to hear from you soon.</p>
    <p><b>Name:</b> Long Mann</p>
    <p><b>Mobile:</b> 04 1200 8018</p>
    <p><b>Email:</b> longmnn@gmail.com</p>
    <p><b>Github Repositories:</b> <Link href='https://github.com/Longmann94?tab=repositories' target="_blank" rel="noopener noreferrer" underline="hover">https://github.com/Longmann94?tab=repositories</Link></p>
  </div>
  </Paper>
  )
}

export default Contacts;
