import { IEverythingNewsRequest } from "../models/Articles";
import { ITodayNewsRequest } from "../models/TodayArticles";

const baseUrl = 'https://newsapi.org/v2/';

// return news data with a "q" search parameter
export const fetchNewsData = async (request: IEverythingNewsRequest) => {
    try {
<<<<<<< HEAD
        const queryUrl = `${baseUrl}everything?q=${request.q}&apiKey=${request.apiKey}`;
        return await fetch(baseUrl).then(res => res.json());
        
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
=======
        const baseUrl = `https://newsapi.org/v2/everything?q=${request.q}&apiKey=${request.apiKey}`;
        const newsResponse = await fetch(baseUrl).then(res => res.json());
        newsResponse.search = request.q
        return newsResponse
    } catch (error) {
        console.error(error)
    }
}
>>>>>>> 26b6d3eb7f70df0ce5e204d189d806c61ef842e1
