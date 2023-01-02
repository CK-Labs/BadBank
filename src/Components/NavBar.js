import { Nav, Container, Navbar, Placeholder } from 'react-bootstrap';
import NavBarTooltip from './NavBarTooltip';
import { Link } from 'react-router-dom';

function CustomNavBar(){ 
  return (
    <Navbar bg="success" variant="dark" expand="lg">
        <Navbar.Brand href="Home">Bad Bank</Navbar.Brand>
        <Navbar.Toggle aria-controls="navBarNav" />
        <Navbar.Collapse id="Toggle navigation" >
          <Nav
            variant="pills"
            defaultActiveKey="Home"
            className="me-auto"
          >
              <NavBarTooltip
                pageName="Home"
                description="This is the bank's welcome page!"
              />
              <NavBarTooltip
                pageName="Create Account"
                description="Join us and sign up for an account!" 
              />

              <NavBarTooltip
                pageName="Withdraw"
                description="Withdraw your funds!" 
              />

              <NavBarTooltip
                pageName="Deposit"
                description="Deposit your funds!" 
              />

              <NavBarTooltip
                pageName="All Data"
                description="See the data from all users!"
              />
          </Nav>
        </Navbar.Collapse>
      </Navbar>
  );
}

export default CustomNavBar;