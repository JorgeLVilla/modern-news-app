import { IEverythingNewsRequest } from "../models/Articles";

// return news data with a "q" search parameter
export const fetchNewsData = async (request: IEverythingNewsRequest) => {
    try {
        const baseUrl = `https://newsapi.org/v2/everything?q=${request.q}&apiKey=${request.apiKey}`;
        return await fetch(baseUrl).then(res => res.json());
    } catch (error) {
        console.error(error)
    }
}