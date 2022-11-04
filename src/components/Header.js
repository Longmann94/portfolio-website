import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

const Header = ({ handleClick }) => {

  return (
    <div className="header">
      <div className="title">Long Mann</div>
      <ButtonGroup size='large' variant="text" aria-label="text button group">
        <Button onClick={handleClick} id='showcase' sx={{fontSize: '1.5rem', fontWeight: 'bold'}}>Showcase</Button>
        <Button onClick={handleClick} id='aboutme' sx={{fontSize: '1.25rem'}}>About me</Button>
        <Button onClick={handleClick} id='skills' sx={{fontSize: '1.25rem'}}>Skills</Button>
        <Button onClick={handleClick} id='contacts' sx={{fontSize: '1.25rem'}}>Contact details</Button>
      </ButtonGroup>
    </div>
  );
}


export default Header;
