import Navbar from "./components/Navbar";
import MoviesList from "./components/MoviesList";
import { Container } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios";
import Pagination from "./components/Pagination";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import MovieDetails from "./components/MovieDetails";
import { useDispatch, useSelector } from "react-redux";
import { getMoviesPages } from "./Redux/Actions/Actions";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMoviesPages());
  }, []);
  return (
    <div className="font color-body">
      <Navbar />
      <Container>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MoviesList />} />
            <Route path="/movie/:id" element={<MovieDetails />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </div>
  );
}

export default App;
