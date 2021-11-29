import { axiosCreate } from './axiosCreate';

type categoryType = {[key:string]: string}
export const category: categoryType = {
    movie: 'movie',
    tv: 'tv'
}

type movieTypeObj = {[key:string]: string}
export const movieType: movieTypeObj = {
    upcoming: 'upcoming',
    popular: 'popular',
    top_rated: 'top_rated',
    trending: 'trending'
}

const MovieApi = {
    getMovieList: (type: string, params: {}) => {
        const url = 'movie/' + movieType[type];
        return axiosCreate.get(url, params);
    },
    getTrending: (type: string, params: {}) => {
        const url = movieType.trending + '/all/week';
        return axiosCreate.get(url, params);
    },
    getVideos: (cat: string, id: number) => {
        const url = category[cat] + '/' + id + '/videos';
        return axiosCreate.get(url, { params: {} });
    },
    search: (query: string, params: {}) => {
        const url = 'search/' + category[query];
        return axiosCreate.get(url, params);
    },
    detail: (cate: string, id: string, params: {}) => {
        const url = category[cate] + '/' + id;
        return axiosCreate.get(url, params);
    },
    credits: (cate: string, id: string) => {
        const url = category[cate] + '/' + id + '/credits';
        return axiosCreate.get(url, { params: {} });
    },
    similar: (cate: string, id: string | number) => {
        const url = category[cate] + '/' + id + '/similar';
        return axiosCreate.get(url, { params: {} });
    }
}
export default MovieApi;
