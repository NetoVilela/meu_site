import React, { useState } from 'react';
import './style.css';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';



const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="">
      <Navbar color="" light expand="md" className="" >
       
        <NavbarToggler onClick={toggle} className="text-light bg-light" />
        <Collapse isOpen={isOpen} navbar className=" row "  >
    
                <Nav className="justify-content-around" navbar>
                    <NavItem>
                    <NavLink href="#inicio" className="text-light li-item">Início</NavLink>
                    </NavItem>

                    <NavItem>
                    <NavLink href="#formacoes" className="text-light li-item">Formações</NavLink>
                    </NavItem>

                    <NavItem>
                    <NavLink href="#conhecimentos" className="text-light li-item">Conhecimentos</NavLink>
                    </NavItem>

                    <UncontrolledDropdown nav inNavbar >

                    <DropdownToggle nav caret className="text-light li-item">
                        Projetos
                    </DropdownToggle>

                    <DropdownMenu right>

                        <DropdownItem>
                        projeto 1
                        </DropdownItem>

                        <DropdownItem>
                        projeto 2
                        </DropdownItem> 

                    </DropdownMenu>

                    </UncontrolledDropdown>

                    <NavItem>
                        <NavLink href="#contato" className="text-light li-item">Contato</NavLink>
                    </NavItem>
                </Nav>
        
          
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;