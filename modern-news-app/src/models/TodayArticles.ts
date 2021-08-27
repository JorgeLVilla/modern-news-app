export interface ITodayNewsRequest {
    apiKey: string;
    category: Category;
    sources: string;
    q: string;
    pageSize: number;
    page: number;
}

type Category = "business" | "entertainment" | "general" | "health" | "science" | "sports" | "technology";

export class TodayNewsRequest implements ITodayNewsRequest {
    apiKey = process.env.REACT_APP_NEWS_API_KEY || "";
    category = "general" as Category; 
    sources = "us";
    q = "";
    pageSize = 10;
    page = 1;

    constructor(configOverride?: Partial<ITodayNewsRequest>) {
        if(configOverride) {
            Object.assign(this, configOverride);
            this.q = encodeURIComponent(this.q);
        }
    }
}

// response interface
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

export interface ITodayNewsResponse {
    status: string | null;
    totalResults: number;
    articles: IArticle[];
}

// response class
export class TodayNewsResponse implements ITodayNewsResponse {
    status = null;
    totalResults = 0;
    articles = [];
}