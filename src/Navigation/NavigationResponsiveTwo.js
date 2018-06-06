import React from 'react';
import ReactDOM from 'react-dom';
import NavbarHeader from './react-bootstrap/lib/NavHeader';
import Collapse from './recat-bootstrap/lib/Collapse';
import Navbar from './react-bootstrap/lib/Navbar';
import NavItem from './react-bootstrap/lib/NavItem';
//import MenuItem from './react-bootstrap/lib/MenuItem';
import Nav from './react-bootstrap/lib/Nav';
import NavDropdown from './react-bootstrap/lib/NavDropdown';

class NavigationResponsiveTwo extends React.Component {
    constructor(props) {
        super(props);
    }

    render () {
        return (
            <Navbar inverse collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        
                    </Navbar.Brand>
                    <Navbar.Toggle/>
                </Navbar.Header> 
                <Navbar.Collapse>
                    <Nav>
                        <NavItem eventKey= {1} href="#Tab1">
                            Tab 1
                        </NavItem>
                        
                        <NavItem eventKey= {2} href="#Tab2">
                            Tab 2
                        </NavItem>

                        <NavItem eventKey= {3} href="#Tab3">
                            Tab 3
                        </NavItem>

                        <NavItem eventKey= {4} href="#Tab4">
                            Tab 4
                        </NavItem>

                        <NavDropdown eventKey= {5} title= "Tab 5" id= "dropDownList">
                            <MenuItem evenKey= {5.1}> SubTab 1 </MenuItem>
                            <MenuItem evenKey= {5.2}> SubTab 2 </MenuItem>
                            <MenuItem evenKey= {5.3}> SubTab 3 </MenuItem>
                            <MenuItem evenKey= {5.4}> SubTab 4 </MenuItem>
                        </NavDropdown>
                    </Nav>

                    <Nav pullRight>
                        <NavItem eventKey= {1} href= "#">
                            Tab Right
                        </NavItem>

                        <NavItem eventKey= {2} href= "#">
                            Tab Right
                        </NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>      
        );
    }
}
