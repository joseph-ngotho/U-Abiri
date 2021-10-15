import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import {
    Nav,
    NavLogo,
    NavLink,
    MobileIcon,
    NavMenu,
    NavIcon,
    NavItem,
    NavbarContainer,
} from "./NavbarElements";

const Navbar = () => {
    const [click, setClick] = useState(false)

    const handleClick = () => setClick(!click)


    return (
        <>
            <IconContext.Provider value={{ color: '#fff' }}>
                <Nav>
                    <NavbarContainer>
                        <NavLogo to="/index">
                            <NavIcon />
                            U-Abiri
                        </NavLogo>
                        <MobileIcon onClick={handleClick}>
                            {click ? <FaTimes /> : <FaBars />}
                        </MobileIcon>

                        <NavMenu onClick={handleClick} click={click}>
                            <NavItem>
                                <NavLink to="/index" >
                                    Home
                                </NavLink>
                            </NavItem>

                            <NavItem>
                                <NavLink to="/addSystemUser">
                                    Add System User
                                </NavLink>
                            </NavItem>

                            <NavItem>
                                <NavLink to="/addVehicle">
                                    Add Vehicle
                                </NavLink>
                            </NavItem>

                            <NavItem>
                                <NavLink to="/editRoute" >
                                    Edit Route
                                </NavLink>
                            </NavItem>

                            <NavItem>
                                <NavLink to="/addRoute" >
                                    Add Route
                                </NavLink>
                            </NavItem>
                        </NavMenu>
                    </NavbarContainer>
                </Nav>
            </IconContext.Provider>
        </>
    );
};

export default Navbar;