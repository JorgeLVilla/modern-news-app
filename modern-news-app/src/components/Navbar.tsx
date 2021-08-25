import { NavButton } from '../style/NavButton.style';
import { NavBarStyle } from '../style/NavBar.style'
import sports from '../assets/sports.png';
import entertainment from '../assets/entertainment.png';
import business from '../assets/business.png';
import health from '../assets/health.png';
import world from '../assets/world.png';

const Navbar = () => {
    return (
        <NavBarStyle>
            <NavButton>
                <img src={sports} alt="button link for sports search" />
            </NavButton>
            <NavButton>
                <img src={entertainment} alt="button link for entertainment search" />
            </NavButton>
            <NavButton>
                <img src={business} alt="button link for business search" />
            </NavButton>
            <NavButton>
                <img src={health} alt="button link for health search" />
            </NavButton>
            <NavButton>
                <img src={world} alt="button link for world search" />
            </NavButton>
        </NavBarStyle>
    )
}

export default Navbar;