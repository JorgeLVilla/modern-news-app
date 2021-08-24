// pageSize param for API
const pageSize: string = "&pageSize=100";
// PageNumber for Api endpoint
const pageNumber: string = "&page=1"
// sortBy param for api: relevancy, popularity, publishedAt
const sortBy: string = "&sortBy=popularity";


// return news data with a "q" search parameter
export const fetchNewsData = async (searchQuery: string) => {
    try {
        const baseUrl = `https://newsapi.org/v2/everything?q=${searchQuery}&apiKey=${process.env.REACT_APP_NEWS_API_KEY}${pageSize}${pageNumber}${sortBy}`;
        return await fetch(baseUrl).then(res => res.json()).then(data => {
                console.log(data)
            }
        );
        
    } catch (error) {
        console.error(error)
    }
}