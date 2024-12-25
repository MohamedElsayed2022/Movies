import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import logo from "../images/logo.png";
import { useDispatch } from "react-redux";
import { getAllMovies, getMoviesSearch } from "../Redux/Actions/Actions";

const Navbar = () => {
  const dispatch = useDispatch();

  const onSearch = (word) => {
    search(word);
  };

  const search = async (word) => {
    if (word === "") {
      dispatch(getAllMovies());
    } else {
      dispatch(getMoviesSearch(word));
    }
  };

  return (
    <div className="nav-style w-100">
      <Container>
        <Row className="pt-2 align-items-center">
          {/* Logo */}
          <Col xs="3" md="2" className="text-center">
            <a href="/">
              <img className="logo img-fluid" src={logo} alt="Logo" />
            </a>
          </Col>

          {/* Search Bar */}
          <Col xs="9" md="10">
            <div className="search w-100">
              <i className="fa fa-search"></i>
              <input
                onChange={(e) => onSearch(e.target.value)}
                type="text"
                className="form-control"
                placeholder="ابحث"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Navbar;
