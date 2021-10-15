import { FaBars,FaShuttleVan } from "react-icons/fa"; 
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";
import { Container } from "../../globalStyles";

export const Nav = styled.nav`
    background: #101522;
    height: 85px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.2rem calc((100vw - 1000px) / 2);
    z-index: 12;
`;
export const NavLogo = styled(Link)`
  color:#fff;
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  display: flex;
  align-items: center;
`;

export const NavIcon = styled(FaShuttleVan)`
  margin-right: 0.5rem;

`;

export const MobileIcon = styled.div`
display: none;

@media screen and (max-width: 960px) {
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(-100%, 60%);
  font-size: 1.8rem;
  cursor: pointer;
}
`;

export const NavbarContainer = styled(Container)`
display: flex;
justify-content: space-between;
height: 80px;

&{Container}
`;

export const NavLink = styled(Link)`
color: #fff;
display: flex;
align-items: center;
text-decoration: none;
padding: 0.5rem 1rem;
height: 100%;
cursor: pointer;
&.active {
  color:red;
}
&:hover {
  color: red;
  transition: all 0.3s ease;
}
`;


export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;

  @media screen and (max-width: 960px){
    display: flex;
    flex-direction: column;
    height:90vh;
    width: 100%;
    position: absolute;
    top: 80px;
    left: ${({click}) => (click ? 0 : '-100%')};
    opacity: 1;
    transition: all 0.5s ease;
    background: #101522;
  }
`;

export const NavItem = styled.li`
height: 80px;
border-bottom: 2px solid transparent;

&:hover {
  border-bottom: 2px solid #4b59f7;
}

@media screen and (max-width: 960px){
  width: 100%;

  &:hover {
    border: none;
  }
}
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;
  background-color: red;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(Link)`
  border-radius: 4px;
  background: transparent;
  padding: 10px 22px;
  color: #fff;
  outline: none;
  border: 1px solid #fff;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  margin-left: 24px;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #808080;
  }
`;



