import styled from 'styled-components';

// styled component variables
export const TodayNewsSection = styled.div`
    border: 2px solid red;

    & .FeaturedArticle {
        margin: 50px auto;
        width: auto;
        height: auto;
        border: 3px solid green;
        padding: 30px;
        display: flex;
        flex-direction: row;
    }

    & .StandardArticle {
        width: 350px;
        margin: 50px auto;
        height: auto;
        border: 3px solid green;
        padding: 30px;
        display: flex;
        flex-direction: row;
    }
`;

    export const TitleContainer = styled.div`
        border: 2px dashed red;
        margin-bottom: 25px;
    `;

    export const TodayNewsArticles = styled.div`
        border: 2px solid white;
        display: flex;
        flex-direction: column;
        
    `;

    export const FeaturedArticle = styled.div`
        margin: 50px auto;
        width: 90%;
        height: auto;
        border: 2px solid green;
        padding: 30px;
        display: flex;
    `;

    export const StandardArticlesContainer = styled.div`
        display: flex;
        flex-wrap: wrap;
        border: 3px solid pink;
        width: auto;
        height: auto;
    `;

    export const StandardArticle = styled.div`
        margin: 50px auto;
        width: 350px;
        display: flex;
    `;

    export const FeaturedImgWrapper = styled.div`
        padding-left: 20px;
        padding-right: 20px;
    `;

    export const StandardImgWrapper = styled.div`

    `;

    export const FeaturedImg = styled.img`
        width: 450px;
        height: 450px;
        object-fit: cover;
    `;

    export const StandardImg = styled.img`
        width: 350px;
        height: auto;
    `;

    export const ArticleHeadingWrapper = styled.div`
        border: 2px solid purple;
        width: 400px;
        background: #000;
        padding: 25px;
    `;