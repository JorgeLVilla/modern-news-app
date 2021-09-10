import { EverythingNewsResponse } from '../models/Articles';
import sports from '../assets/sports.png';
import entertainment from '../assets/entertainment.png';
import business from '../assets/business.png';
import health from '../assets/health.png';
import world from '../assets/world.png';
import icon from '../assets/magazine.png';
import styled from 'styled-components';

export const NavBarStyle = styled.nav`
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 4em 6em;
    width: 100%;
    
    & .header{
        padding-left: 1.2em;
        font-size: 4em;
        cursor: pointer;
    }
`

const ButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 2em;

    & div{
        padding-top: 0.5em;
        font-size: 1.5em;
        opacity: 0;
        transition: opacity 1s ease-in-out;
    }

    &:hover{
        & div{
            opacity: 1;
            transition: opacity .25s ease-in-out;
        }
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
        cursor:pointer;
    }
`


interface NavProps {
    getNewsData: Function;
    setNewsData: Function;
    setEnlargeArticle: Function;
}

const Navbar: React.FC<NavProps> = ({ getNewsData, setNewsData, setEnlargeArticle }) => {

    return (
        <NavBarStyle>
            <div className="header" onClick={() => setNewsData(new EverythingNewsResponse())}>ModernNews<img src={icon} alt="A magazine icon"/></div>
            <NavButtonsStyle>
                <ButtonContainer>
                    <NavButton>
                        <img onClick={() => {
                            setEnlargeArticle(null);
                            getNewsData("sports");
                        }} src={sports} alt="button link for sports search" />
                    </NavButton>
                    <div style={{ color : "#FFA55C"}}>Sports</div>
                </ButtonContainer>
                <ButtonContainer>
                    <NavButton>
                        <img onClick={() => {
                            setEnlargeArticle(null);
                            getNewsData("entertainment");
                        }} src={entertainment} alt="button link for entertainment search" />
                    </NavButton>
                    <div style={{ color : "#1FC8A3"}}>Entertainment</div>
                </ButtonContainer>
                <ButtonContainer>
                    <NavButton>
                        <img onClick={() => {
                            setEnlargeArticle(null);
                            getNewsData("business");
                        }} src={business} alt="button link for business search" />
                    </NavButton>
                    <div style={{ color : "#6F81D8"}}>Business</div>
                </ButtonContainer>
                <ButtonContainer>
                    <NavButton>
                        <img onClick={() => {
                            setEnlargeArticle(null);
                            getNewsData("health");
                        }} src={health} alt="button link for health search" />
                    </NavButton>
                    <div style={{ color : "#00C0C8"}}>Health</div>
                </ButtonContainer>
                <ButtonContainer>
                    <NavButton>
                        <img onClick={() => {
                            setEnlargeArticle(null);
                            getNewsData("world");
                        }} src={world} alt="button link for world search" />
                    </NavButton>
                    <div style={{ color : "#FF9A86"}}>World</div>
                </ButtonContainer>
            </NavButtonsStyle>
        </NavBarStyle>
    )
}

export default Navbar;