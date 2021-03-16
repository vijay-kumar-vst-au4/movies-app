// ADD_MOVIES



//action type
export const ADD_MOVIES="ADD_MOVIES";
export const ADD_TO_FAVOURITE="ADD_TO_FAVOURITE"; 

export const REMOVE_FROM_FAVOURITES="REMOVE_FROM_FAVOURITES";
export const SET_SHOW_FAVOURITES="SET_SHOW_FAVOURITES";
export const ADD_MOVIE_TO_LIST="ADD_MOVIE_TO_LIST";
 
export function addMovies(movies)
{
    return {
     type:ADD_MOVIES,
     movies   
    }
}
export function addFavourite(movie)
{
    return {
     type:ADD_TO_FAVOURITE,
     movie   
    }
}
export function removeFromFavourites(movie)
{
    return {
     type:REMOVE_FROM_FAVOURITES,
     movie   
    }
}
export function setShowFavourites(val)
{
    return {
     type:SET_SHOW_FAVOURITES,
     val   
    }
}

export function addMovieTOList(movie)
{
   return {
    type:ADD_MOVIE_TO_LIST,
    movie
   }
}




