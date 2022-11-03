import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

const Header = ({ handleClick }) => {

  return (
    <div className="header">
      <div className="title">Long Mann</div>
      <ButtonGroup size='large' variant="text" aria-label="text button group">
        <Button onClick={handleClick} id='showcase'>Showcase</Button>
        <Button onClick={handleClick} id='aboutme'>About me</Button>
        <Button onClick={handleClick} id='skills'>Skills</Button>
        <Button onClick={handleClick} id='contacts'>Contact details</Button>
      </ButtonGroup>
    </div>
  );
}


export default Header;
