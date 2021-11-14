export const apiConfig = {
    baseURL: 'https://api.themoviedb.org/3/',
    apiKey: '3fb43394a5af4def2995293aabc7594d',
    imageURL: (path: string) => `https:://image.tmdb.org/t/p/original/${path}`,
    w500: (path: string) => `https:://image.tmdb.org/t/p/w500/${path}`,
}
