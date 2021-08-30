import { INewsRequest } from "../models/Articles";

// return news data with a "q" search parameter
export const fetchNewsData = async (request: INewsRequest) => {
    try {
        const baseUrl = `https://newsapi.org/v2/everything?q=${request.q}&apiKey=${request.apiKey}`;
        const newsResponse = await fetch(baseUrl).then(res => res.json());
        newsResponse.search = request.q
        return newsResponse
    } catch (error) {
        console.error(error)
    }
}