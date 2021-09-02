import styled from "styled-components";

export const OneThirdArticle = styled.div`
    height: auto;
    width: 26em;
    margin: 3em 5em;

    & img{
        height: 20em;
        width: 26em;
        box-shadow: 4px 4px 7px grey;
        margin-bottom: 1em;
        border-radius: 10px;
    }

    & .info-container{
        box-shadow: 4px 4px 7px grey;
        background-color: black;
        border-radius: 10px;
        padding: 0.5em;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        & .title{
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
`

export const OneArticle = styled.div`
    height: auto;
    width: 103.5em;
    margin: 3em 5em;
    display: flex;
    flex-direction: row;

    & img{
        width: 50em;
        border-radius: 10px;
        box-shadow: 4px 4px 7px grey;
        margin-right: 2em;
    }

    & .info-container{
        width: 51em;
        box-shadow: 4px 4px 7px grey;
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

        & .title{
            display: block;
            font-size: 1.8em;
            font-weight: 400;
            text-decoration: none;
            color: white;
        }
    }
`

export const OneHalfArticle = styled.div`
    height: auto;
    width: 46.5em;
    margin: 3em 4em;

    & img{
        height: 25em;
        width: 46.5em;
        box-shadow: 4px 4px 7px grey;
        margin-bottom: 1em;
        border-radius: 10px;
    }

    & .info-container{
        height: 10em;
        box-shadow: 4px 4px 7px grey;
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

        & .title{
            display: block;
            font-size: 1.8em;
            font-weight: 400;
            text-decoration: none;
            color: white;
        }
    }
`