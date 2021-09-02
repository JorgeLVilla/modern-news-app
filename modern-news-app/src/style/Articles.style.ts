import styled from "styled-components";

interface IArticleProps {
    mainColor?: string;
}

export const OneThirdArticle = styled.div<IArticleProps>`
    height: auto;
    width: 26em;
    margin: 3em 5em;

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
    }

    & .info-container{
        box-shadow: 4px 4px 7px ${props => props.mainColor};
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
        }

        & .click-here{
            display: inline;
        }
    }
`

export const OneArticle = styled.div<IArticleProps>`
    height: 28em;
    width: 103.5em;
    margin: 3em 5em;
    display: flex;
    flex-direction: row;

    & .img-block{
        width: 50em;
        height: 28em;
        margin-right: 2em;
    }

    & img{
        height: 28em;
        width: 50em;
        border-radius: 10px;
        box-shadow: 4px 4px 7px ${props => props.mainColor};
        margin-right: 2em;
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
        }

        & .click-here{
            display: inline;
        }
    }
`

export const OneHalfArticle = styled.div<IArticleProps>`
    height: auto;
    width: 46.5em;
    margin: 3em 4em;

    & .img-block{
        height: 25em;
        width: 46.5em;
        margin-bottom: 1em;
    }

    & img{
        height: 25em;
        width: 46.5em;
        box-shadow: 4px 4px 7px ${props => props.mainColor};
        margin-bottom: 1em;
        border-radius: 10px;
    }

    & .info-container{
        height: 14em;
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

        & .title{
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
        }

        & .click-here{
            display: inline;
        }
    }
`