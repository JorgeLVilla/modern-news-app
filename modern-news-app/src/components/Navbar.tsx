import sports from '../assets/sports.png';
import entertainment from '../assets/entertainment.png';
import business from '../assets/business.png';
import health from '../assets/health.png';
import world from '../assets/world.png';
import icon from '../assets/magazine.png';
import styled from 'styled-components';

const NavBarStyle = styled.nav`
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 4em 6em;
    width: 100%;

    & div{
        font-size: 4em;
    }
`
export const NavButtonsStyle = styled.nav`
    display: flex;
    justify-content: flex-end;
    align-items: center;
`
 const NavButton = styled.button`
    height: 60px;
    width: 60px;
    background-color: black;
    color: white;
    margin-left: 5vw;
    border: none;
    border-radius: 50%;
    box-shadow: 0 0 7px white;

    &:active{
        background-color: #191919;
        box-shadow: 0 0 10px white;
        & img{
            opacity: 0.5;
        }
    }

    & img{
        height: 75%;
        width: 80%;
    }
`


interface NavProps {
    getNewsData: Function;
}

const Navbar: React.FC<NavProps> = ({ getNewsData }) => {

    return (
        <NavBarStyle>
            <div>ModernNews<img src={icon} alt="A magazine icon"/></div>
            <NavButtonsStyle>
                <NavButton>
                    <img onClick={() => getNewsData("sports")} src={sports} alt="button link for sports search" />
                </NavButton>
                <NavButton>
                    <img onClick={() => getNewsData("entertainment")} src={entertainment} alt="button link for entertainment search" />
                </NavButton>
                <NavButton>
                    <img onClick={() => getNewsData("business")} src={business} alt="button link for business search" />
                </NavButton>
                <NavButton>
                    <img onClick={() => getNewsData("health")} src={health} alt="button link for health search" />
                </NavButton>
                <NavButton>
                    <img onClick={() => getNewsData("world")} src={world} alt="button link for world search" />
                </NavButton>
            </NavButtonsStyle>
        </NavBarStyle>
    )
}

export default Navbar;