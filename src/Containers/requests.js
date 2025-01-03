const API_KEY = process.env.REACT_APP_API_KEY;
const BASE_URL = process.env.REACT_APP_BASE_URL;

console.log(API_KEY);

const adventure = `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=12`;
const allGenreList = `${BASE_URL}/genre/movie/list?api_key=${API_KEY}&language=en-US`;
const allGenreListTV = `${BASE_URL}/genre/tv/list?api_key=${API_KEY}&language=en-US`;

const requestUniqueMovie = (id) => {
    return `${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=en`;
};

const requestMoreMovieDetails = (id) => {
    return `${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=en&append_to_response=videos,images`;
};

const requestMoreSeriesDetails = (id) => {
    return `${BASE_URL}/tv/${id}?api_key=${API_KEY}&language=en&append_to_response=videos,images`;
};

const movieReviews = (id) => {
    return `${BASE_URL}/movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`;
};

const seriesReviews = (id) => {
    return `${BASE_URL}/tv/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`;
};
const searchMovie = (searchText) => {
    return `${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=${searchText}&page=1`;
};

const searchSeries = (searchText) => {
    return `${BASE_URL}/search/tv?api_key=${API_KEY}&language=en-US&query=${searchText}&page=1`;
};

const movieCategories = [
    {
        id: 0,
        name: "Trending",
        request: `${BASE_URL}/trending/movie/week?api_key=${API_KEY}&language=en-US`,
    },
    {
        id: 1,
        name: "Now Playing",
        request: `${BASE_URL}/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`,
    },
    {
        id: 2,
        name: "Top Rated",
        request: `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
    },
    {
        id: 3,
        name: "Popular",
        request: `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
    },
    {
        id: 4,
        name: "Upcoming",
        request: `${BASE_URL}/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`,
    },
];

const TVCategories = [
    {
        id: 0,
        name: "Airing Today",
        request: `${BASE_URL}/tv/airing_today?api_key=${API_KEY}&language=en-US`,
    },
    {
        id: 1,
        name: "On The Air",
        request: `${BASE_URL}/tv/on_the_air?api_key=${API_KEY}&language=en-US&page=1`,
    },
    {
        id: 2,
        name: "Popular",
        request: `${BASE_URL}/tv/popular?api_key=${API_KEY}&language=en-US&page=1`,
    },
    {
        id: 3,
        name: "Top Rated",
        request: `${BASE_URL}/tv/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
    },
];
export {
    adventure,
    allGenreList,
    movieCategories,
    TVCategories,
    requestUniqueMovie,
    allGenreListTV,
    requestMoreMovieDetails,
    requestMoreSeriesDetails,
    movieReviews,
    seriesReviews,
    searchMovie,
    searchSeries,
};
