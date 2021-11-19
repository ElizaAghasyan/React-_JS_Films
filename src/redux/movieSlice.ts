import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import serverApi, {movieType} from "../config/movieApi";

const initialState = {
    movies: {},
}

interface MovieType  {
    id: number;
    title: string;
    overview: string;
    poster_path: string;
    vote_average: number;
    backdrop_path: string;
    vote_count: number;
    name: string;
}


export const fetchAsyncMovies = createAsyncThunk('movies/fetchAsyncMovies', async () => {
    const params = {page: 1}
    let response = await serverApi.getMovieList(movieType.popular, {params})
        .catch(err => {
            console.log(err)
        })
    let result = await response?.data.results[Math.floor(Math.random() * response.data.results.length - 1)]
    return result;
});


export const movieSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        addMovies: (state, {payload}) => {
            state.movies = payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchAsyncMovies.pending, (state, action) => {
            console.log("Pending...")
        })
        builder.addCase(fetchAsyncMovies.fulfilled, (state: {}, action) => {
            return {
                ...state, movies: action.payload
            }
        })
        builder.addCase(fetchAsyncMovies.rejected, (state, action) => {
            console.log("Pending...")
        })
    }
});

export const {addMovies} = movieSlice.actions;

export const getBannerMovie = (state: { movies: { movies: MovieType }}) => state.movies.movies;


export default movieSlice.reducer;
