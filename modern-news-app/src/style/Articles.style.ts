import styled from "styled-components";


export const ArticlesContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    border: 2px solid red;
    margin: 50px auto;

`;

export const OneThirdArticle = styled.div`
    height: auto;
    width: 26em;
    margin: 3em 5em;

    & img {
        height: 20em;
        width: 26em;
        box-shadow: 4px 4px 7px grey;
        margin-bottom: 1em;
        border-radius: 10px;
    }

    & .info-container {
        box-shadow: 4px 4px 7px grey;
        background-color: black;
        border-radius: 10px;
        padding: 0.5em;

        & .title {
            display: block;
            font-size: 1.8em;
            font-weight: 400;
            text-decoration: none;
            color: white;
            padding-bottom: 0.5em;
        }
    }
`

export const OneHalfArticle = styled.div`
    height: auto;
    width: 46.5em;
    margin: 3em 4em;

    & img {
        height: 25em;
        width: 46.5em;
        box-shadow: 4px 4px 7px grey;
        margin-bottom: 1em;
        border-radius: 10px;
    }

    & .info-container {
        height: 10em;
        box-shadow: 4px 4px 7px grey;
        background-color: black;
        border-radius: 10px;
        padding: 0.5em;

        & .title {
            display: block;
            font-size: 1.8em;
            font-weight: 400;
            text-decoration: none;
            color: white;
            padding-bottom: 0.5em;
        }
    }
`

export const OneArticle = styled.div`
    height: 28em;
    width: 100%;
    margin: 3em 5em;
    display: flex;
    justify-content: center;
    flex-direction: row;

    & img {
        height: 28em;
        width: 50em;
        border-radius: 10px;
        box-shadow: 4px 4px 7px grey;
        margin-right: 2em;
    }

    & .info-container {
        width: 51em;
        box-shadow: 4px 4px 7px grey;
        background-color: black;
        border-radius: 10px;
        padding: 0.5em;

        & .title {
            display: block;
            font-size: 1.8em;
            font-weight: 400;
            text-decoration: none;
            color: white;
            padding-bottom: 0.5em;
        }
    }
`

