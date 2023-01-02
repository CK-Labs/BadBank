import '../App.css';
import React from 'react';
import { Link } from 'react-router-dom';
import { OverlayTrigger, Tooltip, Nav, Container, NavDropdown, Navbar} from 'react-bootstrap';

function NavBarTooltip(props) { 
    const pageName = props.pageName; //string
    const description = props.description; // string

    return (
      <React.Fragment>
        <OverlayTrigger
            placement="bottom"
            delay={{ show: 10, hide:5 }}
            overlay={
                <Tooltip id={pageName.toLowerCase()}>
                  {description}
                </Tooltip>
            }
          >
            <Nav.Item>
              <Nav.Link   
                as={Link}
                id={`${pageName.toLowerCase()}-nav`}
                eventKey={pageName.replace(' ','')}
                to={pageName.replace(' ','')}
              >
                <strong>{pageName}</strong>
              </Nav.Link>
            </Nav.Item>
        </OverlayTrigger>
      </React.Fragment>
    );
};

export default NavBarTooltip;
