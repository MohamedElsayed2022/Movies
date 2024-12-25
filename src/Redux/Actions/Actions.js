import axios from "axios";
import { ALLMOVIES, moveiApi } from "../types/moviesTypes";

export const getAllMovies = () => {
  return async (dispatch) => {
    const res =await axios.get(moveiApi);
    console.log(res.data)
    dispatch({
      type: ALLMOVIES,
      data: res.data.results,
      pages: res.data.total_pages,
    });
  };

};

export const getMoviesSearch = (word)=>{
  return async(dispatch)=>{
    const res = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=52ef927bbeb21980cd91386a29403c78&query=${word}&language=ar`
    );
    dispatch({
      type: ALLMOVIES,
      data: res.data.results,
      pages: res.data.total_pages,
    });
  }
}

export const getMoviesPages = (page)=>{
  return async(dispatch)=>{
    const res = await axios.get(
        `https://api.themoviedb.org/3/movie/popular?api_key=52ef927bbeb21980cd91386a29403c78&language=ar&page=${page}`
    );
    dispatch({
      type: ALLMOVIES,
      data: res.data.results,
      pages: res.data.total_pages,
    });
  }
}