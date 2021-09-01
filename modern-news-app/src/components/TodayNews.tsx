import React from 'react';
import { ITodayNewsResponse } from '../models/TodayArticles';
import {
    TodayNewsSection, 
    TitleContainer, 
    TodayNewsArticles, 
    FeaturedArticle,
    StandardArticlesContainer,
    StandardArticle,
    FeaturedImgWrapper,
    StandardImgWrapper,
    FeaturedImg,
    StandardImg,
    ArticleHeadingWrapper
} from '../style/TodayNews.style';

// set type for todayNewsData that will be accessed as props
interface MainProps {
    todayNewsData: ITodayNewsResponse;
}

// enable react props
const TodayNews: React.FC<MainProps> = ({ todayNewsData }) => {
        
    // seperate TodayNews from the rest of articles stored in props
    const returnFeaturedArticle = () => {
        const article = todayNewsData.articles.slice(0, 1)[0];
        
        return (
            <>
            {todayNewsData.status? 
                <FeaturedArticle>
                    <FeaturedImgWrapper>
                        <FeaturedImg src={article.urlToImage} className="articleImg" alt={article.description}/>
                    </FeaturedImgWrapper>
                    <ArticleHeadingWrapper>
                        <h2>{article.title}</h2>
                    </ArticleHeadingWrapper>
                </FeaturedArticle>
                : "Loading..."}
            </>

            )
        }

    // map through rest of articles with a different grouping
    const returnStandardArticles = () => {
        const articles = todayNewsData.articles.slice(1);

        return (
            <>
            {
            todayNewsData.status?  
                articles.map((article, i) => {

                    return (
                        <StandardArticle key={i}>
                            <StandardImgWrapper>
                                <StandardImg src={article.urlToImage} alt={article.description} />
                                <ArticleHeadingWrapper>
                                    {article.content}
                                </ArticleHeadingWrapper>
                            </StandardImgWrapper>
                        </StandardArticle>
                    )

                }) 
                : "Loading..."
            }
            </>
        )
    }    

    return (
        <TodayNewsSection>
            <TitleContainer>
                <h1>Today</h1>
            </TitleContainer>
            
            <TodayNewsArticles>
                {returnFeaturedArticle()}

            <StandardArticlesContainer>
                {returnStandardArticles()}
            </StandardArticlesContainer>

            </TodayNewsArticles>
            

        </TodayNewsSection>
        
    )
}

export default TodayNews

