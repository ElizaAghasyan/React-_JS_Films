export const apiConfig = {
    baseURL: "https://api.themoviedb.org/3/",
    apiKey: `${process.env.REACT_APP_API_KEY}`,
    imageURL: (path: string) => `https:://image.tmdb.org/t/p/original/${path}`,
    w500: (path: string) => `https:://image.tmdb.org/t/p/w500/${path}`,
}
