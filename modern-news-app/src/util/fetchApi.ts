import { IEverythingNewsRequest } from "../models/Articles";
import { ITodayNewsRequest } from "../models/TodayArticles";

const baseUrl = 'https://newsapi.org/v2/';

// return news data with a "q" search parameter
export const fetchNewsData = async (request: IEverythingNewsRequest) => {
    try {
        const baseUrl = `https://newsapi.org/v2/everything?q=${request.q}&apiKey=${request.apiKey}`;
        const newsResponse = await fetch(baseUrl).then(res => res.json());
        newsResponse.search = request.q
        return newsResponse
    } catch (error) {
        console.error(error)
    }
}

export const fetchTodayNewsData = async (request: ITodayNewsRequest) => {
    try {
        // url for US news with todays date
        const todayNewsUrl = `${baseUrl}top-headlines?country=${request.sources}&apiKey=${request.apiKey}&pageSize=${request.pageSize}&publishedAt=2021-08-25`;
        return await fetch(todayNewsUrl).then(res => res.json());

    } catch (error) {
        console.error(error);
    }
}
