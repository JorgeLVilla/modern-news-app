import { NavButton } from '../style/NavButton.style';
import { NavBarStyle } from '../style/NavBar.style'
import sports from '../assets/sports.png';
import entertainment from '../assets/entertainment.png';
import business from '../assets/business.png';
import health from '../assets/health.png';
import world from '../assets/world.png';

interface NavProps {
    getNewsData: Function;
}

const Navbar: React.FC<NavProps> = ({ getNewsData }) => {

    return (
        <NavBarStyle>
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
        </NavBarStyle>
    )
}

export default Navbar;