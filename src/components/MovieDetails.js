import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Row, Button, Container, Card, Spinner, Alert } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getAllMovies } from "../Redux/Actions/Actions";

const MovieDetails = () => {
    const params = useParams();
    const dispatch = useDispatch();
    const [movie, setMovie] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const getMovieDetails = async () => {
        setLoading(true);
        setError(null);
        try {
            const res = await axios.get(
                `https://api.themoviedb.org/3/movie/${params.id}?api_key=52ef927bbeb21980cd91386a29403c78&language=ar`
            );
            setMovie(res.data);
        } catch (error) {
            setError("حدث خطأ أثناء جلب تفاصيل الفيلم. الرجاء المحاولة لاحقاً.");
            console.error("Error fetching movie details:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getMovieDetails();
        dispatch(getAllMovies());
    }, [dispatch, params.id]);

    if (loading) {
        return (
            <Container className="text-center mt-5">
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">جاري التحميل...</span>
                </Spinner>
                <p className="mt-3">جاري تحميل تفاصيل الفيلم...</p>
            </Container>
        );
    }

    if (error) {
        return (
            <Container className="text-center mt-5">
                <Alert variant="danger">{error}</Alert>
                <Link to="/">
                    <Button variant="primary">العودة للرئيسية</Button>
                </Link>
            </Container>
        );
    }

    return (
        <Container className="mt-5">
            <Row className="justify-content-center">
                <Col md="10" xs="12" sm="12">
                    <Card className="shadow-lg border-0">
                        <Row className="g-0 align-items-center">
                            <Col md="4" className="text-center">
                                {movie.poster_path ? (
                                    <Card.Img
                                        variant="top"
                                        className="img-fluid rounded"
                                        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                                        alt={movie.title}
                                    />
                                ) : (
                                    <div className="text-center text-muted">
                                        <p>لا توجد صورة متاحة</p>
                                    </div>
                                )}
                            </Col>
                            <Col md="8">
                                <Card.Body>
                                    <Card.Title
                                        className="fw-bold fs-3"
                                        style={{ color: "#b45b35" }}
                                    >
                                        {movie.title || "غير متوفر"}
                                    </Card.Title>
                                    <Card.Text className="text-muted">
                                        <strong>تاريخ الإصدار:</strong>{" "}
                                        {movie.release_date || "غير متوفر"}
                                    </Card.Text>
                                    <Card.Text className="text-muted">
                                        <strong>عدد المقيمين:</strong>{" "}
                                        {movie.vote_count || "غير متوفر"}
                                    </Card.Text>
                                    <Card.Text className="text-muted">
                                        <strong>التقييم:</strong>{" "}
                                        {movie.vote_average || "غير متوفر"}
                                    </Card.Text>
                                    <Card.Text>
                                        <strong>القصة:</strong>{" "}
                                        {movie.overview || "غير متوفر"}
                                    </Card.Text>
                                </Card.Body>
                            </Col>
                        </Row>
                    </Card>
                </Col>
            </Row>
            <Row className="justify-content-center mt-4">
                <Col md="6" className="d-flex justify-content-between mb-3">
                    <Link to="/">
                        <Button variant="primary" className="px-4">
                            العودة للرئيسية
                        </Button>
                    </Link>
                    {movie.homepage && (
                        <a href={movie.homepage} target="_blank" rel="noopener noreferrer">
                            <Button variant="success" className="px-4">
                                مشاهدة الفيلم
                            </Button>
                        </a>
                    )}
                </Col>
            </Row>
        </Container>
    );
};

export default MovieDetails;
