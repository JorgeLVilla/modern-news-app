import styled from 'styled-components';

export const NavButton = styled.button`
    height: 60px;
    width: 60px;
    background-color: black;
    color: white;
    margin-left: 3vw;
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