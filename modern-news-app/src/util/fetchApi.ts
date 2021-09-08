import { IEverythingNewsRequest } from "../models/Articles";
import { ITodayNewsRequest } from "../models/TodayArticles";
import { ITopNewsRequest } from "../models/TopNewsArticles";

// return news data with a "q" search parameter
export const fetchNewsData = async (request: IEverythingNewsRequest) => {
    try {
        const baseUrl = `https://newsapi.org/v2/everything?q=${request.q}&pageSize=${request.pageSize}&apiKey=${request.apiKey}&country=${request.sources}`;
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
        const todayNewsUrl = `https://newsapi.org/v2/top-headlines?country=${request.sources}&apiKey=${request.apiKey}&pageSize=${request.pageSize}`;
        return await fetch(todayNewsUrl).then(res => res.json());

    } catch (error) {
        console.error(error);
    }
}

export const fetchTopNewsData = async (request: ITopNewsRequest) => {
    try {
        // url for Time Magazine news site
        const topNewsUrl = `https://newsapi.org/v2/top-headlines?sources=${request.sources}&apiKey=${request.apiKey}&pageSize=${request.pageSize}`;
        console.log(topNewsUrl)
        return await fetch(topNewsUrl).then(res => res.json());

    } catch (error) {
        console.error(error);
    }
}
