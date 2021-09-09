export interface ITopNewsRequest {
    apiKey: string;
    country: string;
    category?: string;
    sources: string;
    q: string;
    pageSize: number;
    page: number;
}

type SortBy = "relevancy" | "popularity" | "publishedAt";

export class TopNewsRequest implements ITopNewsRequest {
    apiKey= process.env.REACT_APP_NEWS_API_KEY || "";
    q= "";
    pageSize= 4;
    sortBy= "popularity" as SortBy;
    qInTitle= "";
    sources= "";
    domains= [];
    excludeDomains= [];
    from= "";
    to= "";
    language= "en";
    page= 1;
    country= "us";
    category= "health";

    constructor(configOverride?: Partial<ITopNewsRequest>) {
        if(configOverride) {
            Object.assign(this, configOverride);
            this.q = encodeURIComponent(this.q);
            this.qInTitle = encodeURIComponent(this.qInTitle);
        }
    }
}

export interface ISource {
    id: string;
    name: string;
}

export interface IArticle {
    source: ISource;
    author: string;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
    content: string;
}

export interface ITopNewsResponse {
    status: string | null;
    totalResults: number;
    articles: IArticle[];
}

export class TopNewsResponse implements ITopNewsResponse {
    status = null;
    totalResults= 0;
    articles= [];
 }
 
 