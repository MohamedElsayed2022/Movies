import React, { useEffect, useState } from 'react'
import CardMovie from './CardMovie'
import { Row } from 'react-bootstrap'
import Pagination from './Pagination'
import { useDispatch, useSelector } from 'react-redux'
import { getAllMovies } from '../Redux/Actions/Actions'

const MoviesList = ({ getPage , pageCount }) => {
  const [movies, setMovies] = useState([]);
  const dataMovies = useSelector((state)=>state.movies)
  useEffect(()=>{
    dispatch(getAllMovies())
  },[])
  const dispatch = useDispatch()
  useEffect(()=>{
      setMovies(dataMovies)
  },[dataMovies])
  return (
    <Row className="mt-3">
        {movies.length >=1 ? (movies.map((mov)=>{
            return( <CardMovie key={mov.id} mov={mov}/>
            )
        })):<h2 className='text-center p-2'>لايوجد افلام </h2>}
        {
          pageCount >=2 ? (
            <Pagination getPage={getPage} pageCount={pageCount}/>
          ) :(null)
        }

      

    </Row>
  )
}


export default MoviesList
