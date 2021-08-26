import { IEverythingNewsRequest } from "../models/Articles";
import { ITodayNewsRequest } from "../models/RecentArticles";

const baseUrl = 'https://newsapi.org/v2/';

// return news data with a "q" search parameter
export const fetchNewsData = async (request: IEverythingNewsRequest) => {
    try {
        const queryUrl = `${baseUrl}everything?q=${request.q}&apiKey=${request.apiKey}`;
        return await fetch(baseUrl).then(res => res.json());
        
    } catch (error) {
        console.error(error)
    }
}

export const fetchTodayNewsData = async (request: ITodayNewsRequest) => {
    try {
        // url for US news with todays date
        const todayNewsUrl = `${baseUrl}top-headlines?country=us&apiKey=${request.apiKey}&publishedAt=2021-08-25`;
        return await fetch(todayNewsUrl).then(res => res.json());

    } catch (error) {
        console.error(error);
    }
}
