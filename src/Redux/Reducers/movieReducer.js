import { ALLMOVIES } from "../types/moviesTypes"

const initialValue = {movies:[] , pageCount : 0}
export const movieReducer = (state= initialValue, action)=>{
    switch(action.type){
        case ALLMOVIES:
            return {movies : action.data ,pageCount : action.pages }
            default :
            return state
    }
}