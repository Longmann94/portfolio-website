import Link from '@mui/material/Link';

const Footer = () => {

  const year = new Date().getFullYear();

  return (
    <div className="footer">
      <div>Created by
      <Link href='https://github.com/Longmann94' target="_blank" rel="noopener noreferrer" underline="hover" sx={{padding: '0.5rem'}}>
        Long Mann
      </Link>{year} </div>
      </div>
  );
}

export default Footer;
