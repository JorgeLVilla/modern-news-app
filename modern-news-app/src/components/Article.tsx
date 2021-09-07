import { OneArticle, OneHalfArticle, OneThirdArticle } from "../style/Articles.style";
import { IArticle } from "../models/Articles";
import noimageavailable from "../assets/noimageavailable.jpg";

interface IArticleProps {
    index: number;
    mainColorCheck: string;
    setEnlargeArticle: Function;
    article: IArticle;
    ArticleSize: number;
}

const Article: React.FC<IArticleProps> = ({ index, mainColorCheck, setEnlargeArticle, article, ArticleSize }) => {

    let ArticleSizeFinal = OneArticle

    const articleSizeCheck = () => {
        if(ArticleSize === 1){
            ArticleSizeFinal = OneArticle
        } else if(ArticleSize === 2){
            ArticleSizeFinal = OneHalfArticle
        }else if(ArticleSize === 3){
            ArticleSizeFinal = OneThirdArticle
        }
    }

    return(
        <>
            {articleSizeCheck()}
            <ArticleSizeFinal
                key={index} 
                mainColor={mainColorCheck}
                href={`#article-${index}`}
                onClick={() => {setEnlargeArticle(index)}}
            >
                <div className="img-block">
                    <img src={article.urlToImage? article.urlToImage : noimageavailable} alt={article.description}/>
                    <span className="click-here">Click to see more</span>
                </div>
                <div className="info-container">
                    <div>
                        <div className="title" >{article.title}</div>
                        <div className="description">Description:<br/>{article.description}</div>
                    </div>
                    <div className="bottom-info">
                        <div>Author: {article.author}</div>
                        <div>From: {article.source.name}</div>
                    </div>
                </div>
            </ArticleSizeFinal>
        </>
    )
}

export default Article;