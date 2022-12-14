import styled from 'styled-components';
import { Div, P, Img } from '../../styles';
import { NavLink } from 'react-router-dom';

const NavbarContainer = styled(Div)`
    display: flex; 
    justify-content: center;
`;

const NavbarLink = styled(NavLink)`
    color: #808080;
    padding: 5px; 
    cursor: pointer;
    text-decoration: none;
`;

const ImageContainer = styled(Div)`
    display: flex; 
    align-items: center;
    justify-content: center;
    width: 90%;
   
`;

const NavLinkContainer = styled(Div)`
    display: flex; 
    align-items: center;
    min-width: 150px; 
`;

const NavText = styled(P)`
   color: #5a5a5a;
`;

const Image = styled(Img)`

`;

export {Image, ImageContainer, NavbarContainer, NavLinkContainer, NavbarLink, NavText};
