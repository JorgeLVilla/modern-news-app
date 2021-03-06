import { IArticle } from "../models/Articles";
import { EnlargedArticle } from "../style/Articles.style";
import noimageavailable from "../assets/noimageavailable.jpg"

interface IExpandedArticleProps {
    article: IArticle;
    index: number;
    mainColorCheck: string;
    setEnlargeArticle: Function;
}

const ExpandedArticle: React.FC<IExpandedArticleProps> = ({ article, index, mainColorCheck, setEnlargeArticle }) => {
    return(
        <EnlargedArticle key={index} mainColor={mainColorCheck} id={`article-${index}`}>
            <img src={article.urlToImage? article.urlToImage : noimageavailable} alt={article.description}/>
            <div className="info-container">
                <div>
                    <div className="title" >{article.title}</div>
                    <div className="description">Description:<br/>{article.description}</div><br/>
                    <div>More Info:<br/>{article.content}</div>
                    <a className="url" href={article.url} target="_blank" rel="noreferrer">To read more click here!</a>
                </div>
                <div className="bottom-info">
                    <div>Author: {article.author}</div>
                    <div>From: {article.source.name}</div>
                </div>
            </div>
            <button onClick={() => {setEnlargeArticle(null)}}>X</button>
        </EnlargedArticle>
    )
}

export default ExpandedArticle;