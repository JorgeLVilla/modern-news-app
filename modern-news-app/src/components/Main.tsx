import styled from "styled-components";
import { EverythingNewsResponse, IEverythingNewsResponse } from "../models/Articles";
import sports from '../assets/sports.png';
import entertainment from '../assets/entertainment.png';
import business from '../assets/business.png';
import health from '../assets/health.png';
import world from '../assets/world.png';
import back from '../assets/back.png';
import ExpandedArticle from "./ExpandedArticle";
import Article from "./Article";

const TitleSection = styled.div`
    display: flex;
    flex-direction: row;
    margin-left: 6.5em;
    align-items: center;

    & .back-section{
        display: flex;
        flex-direction: column;
        position: relative;
        top: 0.8em;

        & .back-button{
            position: relative;
            top: 0.5em;
            height: 4.5em;
            cursor: pointer;
        }

        & .back-message{
            font-size: 0.8em;
            text-align: center;
            opacity: 0.0;
            transition: opacity 1s ease-in-out;
            padding-top: 1em;
        }

        &:hover{
            & .back-message{
                opacity: 1.0;
                transition: opacity .55s ease-in-out;
            }
        }
    }

`

const TitleStyled = styled.div`
    font-size: 5em;
    
    & img{
        height: 1em;
        width: 1em;
        padding-left: 0.3em;
    }
`

export const ArticlesStyled = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
`

interface MainProps {
    newsData: IEverythingNewsResponse
    setNewsData: Function;
    setEnlargeArticle: Function;
    enlargeArticle: string | null;
}

const Main: React.FC<MainProps> = ({ newsData, setNewsData, setEnlargeArticle, enlargeArticle }) => {
    
    let ArticleSize: number = 3
    let articleIndex: number = 0

    // Func to set they layout as repeating with a 3-1-2 article pattern
    const articleLayout = ():void => {
        if(articleIndex === 4){
            articleIndex++;
            ArticleSize = 2;
        } else if(articleIndex === 5){
            articleIndex = 0;
            ArticleSize = 2;
        }else if(articleIndex === 3){
            articleIndex++;
            ArticleSize = 1;
        } else{
            articleIndex++;
            ArticleSize = 3;
        }
    }

    // Setting the Title of the Main page based off of what button was pressed
    const searchTitleCheck = () => {
        switch(newsData.search){
            case "sports": return <div>Sports<img src={sports} alt=""/></div>;
            case "entertainment": return <>Entertainment<img src={entertainment} alt=""/></>;
            case "business": return <>Business<img src={business} alt=""/></>;
            case "health": return <>Health<img src={health} alt=""/></>;
            case "world": return <>World<img src={world} alt=""/></>;
            default : return <>You searched for {newsData.search}</>;
        }
    }

    // Set things like the Title color and the box shadow color
    const mainColorCheck = (): string => {
        switch(newsData.search){
            case "sports": return "#FFA55C" ;
            case "entertainment": return "#1FC8A3";
            case "business": return "#6F81D8";
            case "health": return "#00C0C8";
            case "world": return "#FF9A86";
            default : return "white";
        }
    }

    return(
        <>
            {newsData.status ? (
                <div>
                    <TitleSection>
                        <div className="back-section">
                            <img 
                                className="back-button"
                                src={back} 
                                alt="" 
                                onClick={() => {
                                    setNewsData(new EverythingNewsResponse());
                                    setEnlargeArticle(null);
                                }} 
                            />
                            <div className="back-message">Go Back</div>
                        </div>
                        <TitleStyled style={{ color : `${mainColorCheck()}`}}>{searchTitleCheck()}</TitleStyled>
                    </TitleSection>
                    <ArticlesStyled>
                        {newsData.articles.map((article, index) => {
                            articleLayout();
                            return (enlargeArticle !== (`main-${index}`) ? 
                            <Article 
                                section="main"
                                index={index} 
                                mainColorCheck={mainColorCheck()} 
                                setEnlargeArticle={setEnlargeArticle} 
                                article={article} 
                                ArticleSize={ArticleSize}
                            /> :
                            <ExpandedArticle 
                                article={article} 
                                index={index} 
                                mainColorCheck={mainColorCheck()} 
                                setEnlargeArticle={setEnlargeArticle}
                            />)
                        })}
                    </ArticlesStyled>
                </div>
            ) : <div>Loading...</div>}
        </>
    )
}

export default Main;