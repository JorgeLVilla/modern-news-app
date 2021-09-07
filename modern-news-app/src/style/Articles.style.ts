import styled from "styled-components";


export const ArticlesContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    border: 2px solid red;
    margin: 50px auto;

`;

interface IArticleProps {
    mainColor?: string;
}

export const OneThirdArticle = styled.a<IArticleProps>`
    height: auto;
    width: 26em;
    margin: 3em 5em;
    text-decoration: none;
    color: white;

    & .img-block{
        height: 20em;
        width: 26em;
        margin-bottom: 1em;
    }

    & img{
        height: 20em;
        width: 26em;
        box-shadow: 4px 4px 7px ${props => props.mainColor};
        border-radius: 10px;
        opacity: 1;
        transition: opacity 1s ease-in-out;
    }

    & .info-container{
        box-shadow: 4px 4px 7px ${props => props.mainColor};
        background-color: black;
        border-radius: 10px;
        padding: 0.5em;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        & .title {
            display: block;
            font-size: 1.8em;
            font-weight: 400;
            text-decoration: none;
            color: white;
            padding-bottom: 0.5em;
        }

        & .description{
            display: none;
        }

        & .bottom-info{
            display: flex;
            flex-direction: row;
            justify-content: space-between;
        }
    }

    & .click-here{
        display: none;
        font-size: 2em;
        position: relative;
        bottom: 6em;
        left: 3em;
    }
    
    &:hover{
        cursor: pointer;
        
        & img{
            opacity: 0.25;
            transition: opacity .25s ease-in-out;
        }

        & .click-here{
            display: inline;
        }
    }
`

export const OneHalfArticle = styled.a<IArticleProps>`
    height: auto;
    width: 46.5em;
    margin: 3em 4em;
    text-decoration: none;
    color: white;

    & img {
        height: 25em;
        width: 46.5em;
        box-shadow: 4px 4px 7px ${props => props.mainColor};
        margin-bottom: 1em;
        border-radius: 10px;
    }

    & .info-container {
        height: 10em;
        box-shadow: 4px 4px 7px ${props => props.mainColor};
        background-color: black;
        border-radius: 10px;
        padding: 0.5em;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        & .bottom-info{
            display: flex;
            flex-direction: row;
            justify-content: space-between;
        }

        & .title {
            display: block;
            font-size: 1.8em;
            font-weight: 400;
            text-decoration: none;
            color: white;
        }
    }
    
    & .click-here{
        display: none;
        font-size: 2em;
        position: relative;
        bottom: 8em;
        left: 8em;
    }
    
    &:hover{
        cursor: pointer;

        & img{
            opacity: 0.25;
            transition: opacity .25s ease-in-out;
        }

        & .click-here{
            display: inline;
        }
    }
`

export const OneArticle = styled.a<IArticleProps>`
    height: 28em;
    width: 100%;
    margin: 3em 5em;
    display: flex;
    justify-content: center;
    flex-direction: row;
    text-decoration: none;
    color: white;
    
    & .img-block{
        width: 50em;
        height: 28em;
        margin-right: 2em;
    }

    & img {
        height: 28em;
        width: 50em;
        border-radius: 10px;
        box-shadow: 4px 4px 7px ${props => props.mainColor};
        margin-right: 2em;
    }

    & .info-container {
        width: 51em;
        box-shadow: 4px 4px 7px ${props => props.mainColor};
        background-color: black;
        border-radius: 10px;
        padding: 0.5em;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        & .bottom-info{
            display: flex;
            flex-direction: row;
            justify-content: space-between;
        }

        & .title {
            display: block;
            font-size: 1.8em;
            font-weight: 400;
            text-decoration: none;
            color: white;
        }
    }
    
    & .click-here{
        display: none;
        font-size: 2em;
        position: relative;
        bottom: 8em;
        left: 7em;
    }
    
    &:hover{
        cursor: pointer;

        & img{
            opacity: 0.25;
            transition: opacity .25s ease-in-out;
        }

        & .click-here{
            display: inline;
        }
    }
`

//Enlarged Articles
interface IEnlargeArticleProps {
    mainColor: string;
}

export const EnlargedArticle = styled.a<IEnlargeArticleProps>`
    height: auto;
    width: 103.5em;
    margin: 3em 5em;
    display: flex;
    flex-direction: row;
    text-decoration: none;
    color: white;

    & img{
        height: 30em;
        width: 50em;
        border-radius: 10px;
        box-shadow: 4px 4px 7px ${props => props.mainColor};
        margin-right: 2em;
    }

    & button{
        height: 2em;
        width: 2em;
        color: white;
        background-color: black;
        border: white solid 1px;
        border-radius: 50%;
        position: relative;
        right: 3em;
        top: 1em;
        box-shadow: 0 0 7px ${props => props.mainColor};
        cursor: pointer;
    }

    & .info-container{
        width: 51em;
        box-shadow: 4px 4px 7px ${props => props.mainColor};
        background-color: black;
        border-radius: 10px;
        padding: 0.5em;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        & .title{
            width: 95%;
            display: block;
            font-size: 1.8em;
            font-weight: 400;
            text-decoration: none;
            color: white;
            padding-bottom: 0.5em;
        }

        & .url{
            display: inline-block;
            color: black;
            text-decoration: none;
            background-color: white;
            border-radius: 5px;
            padding: 0 0.5em;
            margin-top: 1em;
        }
        
        & .bottom-info{
            display: flex;
            flex-direction: row;
            justify-content: space-between;
        }
    }
`
