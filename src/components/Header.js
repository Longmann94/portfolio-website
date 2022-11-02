import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

const Header = () => {

  return (
    <div className="header">
      <div className="title">Long Mann</div>
      <ButtonGroup size='large' variant="text" aria-label="text button group">
        <Button>Showcase</Button>
        <Button>About me</Button>
        <Button>Skills</Button>
        <Button>Contact details</Button>
      </ButtonGroup>
    </div>
  );
}


export default Header;
