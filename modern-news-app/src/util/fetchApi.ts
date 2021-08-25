import {IEverythingNewsRequest} from "../models/Articles";

// pageSize param for API
// const pageSize: string = "&pageSize=100";
// PageNumber for Api endpoint
// const pageNumber: string = "&page=1"
// sortBy param for api: relevancy, popularity, publishedAt
// const sortBy: string = "&sortBy=popularity";


// return news data with a "q" search parameter
export const fetchNewsData = async (request: IEverythingNewsRequest) => {
    try {
        const baseUrl = `https://newsapi.org/v2/everything?q=${request.q}&apiKey=${request.apiKey}`;
        return await fetch(baseUrl).then(res => res.json());
        
    } catch (error) {
        console.error(error)
    }
}