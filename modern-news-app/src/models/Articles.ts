export interface IEverythingNewsRequest {
    apiKey: string;
    q: string;
    pageSize: number;
    sortBy: SortBy;
    qInTitle: string;
    sources: string[];
    domains: string[];
    excludeDomains: string[];
    from: string;
    to: string;
    language: string;
    page: number;
}

type SortBy = "relevancy" | "popularity" | "publishedAt";

export class EverythingNewsRequest implements IEverythingNewsRequest {
    apiKey= process.env.REACT_APP_NEWS_API_KEY || "";
    q= "";
    pageSize= 20;
    sortBy= "popularity" as SortBy;
    qInTitle= "";
    sources= [];
    domains= [];
    excludeDomains= [];
    from= "";
    to= "";
    language= "en";
    page= 1;

    constructor(configOverride?: Partial<IEverythingNewsRequest>) {
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

export interface IEverythingNewsResponse {
    status: string;
    totalResults: number;
    articles: IArticle[];
}

export class EverythingNewsResponse implements IEverythingNewsResponse{
    status= "";
    totalResults= 0;
    articles= [];
}