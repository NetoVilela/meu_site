import React, { useState } from 'react';
import './style.css';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';



const NavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="" id={props.id}>
      <Navbar color="" light expand="md" className="" >
       
        <NavbarToggler onClick={toggle} className="text-light bg-light" />
        <Collapse isOpen={isOpen} navbar className="row"  >
    
                <Nav className="justify-content-around" navbar>
                    <NavItem>
                      <NavLink href="/" className="text-light li-item">Início</NavLink>
                    </NavItem>

                    <NavItem>
                      <NavLink href="#formacoes" className="text-light li-item">Formações</NavLink>
                    </NavItem>

                    <NavItem>
                      <NavLink href="#conhecimentos" className="text-light li-item">Conhecimentos</NavLink>
                    </NavItem>

                    <NavItem>
                      <NavLink href="#projetos" className="text-light li-item">Projetos</NavLink>
                    </NavItem>

                    <NavItem>
                        <NavLink href="#contatos" className="text-light li-item">Contato</NavLink>
                    </NavItem>
                </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;