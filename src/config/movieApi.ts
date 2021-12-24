import {axiosCreate} from './axiosCreate';
import axios from "axios";

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

export const getMovieList = (type: string, params: {}) => {
    const url = 'movie/' + movieType[type];
    return axiosCreate.get(url, params);
};

export const getTrending = (type: string, params: {}) => {
    const url = movieType.trending + '/all/week';
    return axiosCreate.get(url, params);
};

export const getVideo = (cat: string, id: number | string) => {
    const url = category[cat] + '/' + id + '/videos';
    return axiosCreate.get(url, { params: {} });
};

export const searchFilms = (query: string, params: {}) => {
    const url = 'search/' + category[query];
    return axiosCreate.get(url, params);
};

export const detail = (cate: string, id: string | number, params: {}) => {
    const url = category[cate] + '/' + id;
    return axiosCreate.get(url, params);
};

export const credits = (cate: string, id: string | number) => {
    const url = category[cate] + '/' + id + '/credits';
    return axiosCreate.get(url, { params: {} });
};

export const getSimilar = (cate: string, id: string | number) => {
    const url = category[cate] + '/' + id + '/similar';
    return axiosCreate.get(url, { params: {} });
};
