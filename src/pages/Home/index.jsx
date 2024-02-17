import { FiPlus, FiSearch } from "react-icons/fi";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from '../../components/Input';
import { MovieItem } from "../../components/MovieItem";
import { Footer } from "../../components/Footer";
import { Container, Search } from './styles';
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";

export function Home() {
    const navigate = useNavigate();
    const [movies, setMovies] = useState([]);
    const [search, setSearch] = useState("");

    function handleDetails(id) {
        navigate(`/details/${id}`);
    };

    useEffect(() => {
        async function fetchMovies() {
            const response = await api.get(`/movienotes?title=${search}`);
            setMovies(response.data);
        };

        fetchMovies();
    }, [search]);

    return (
        <Container>
            <Header>
                <Search>
                    <Input
                        placeholder="Pesquisar pelo título"
                        icon={FiSearch}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </Search>
            </Header>
            <section>
                <div id="toolbar">
                    <h2>Meus Filmes</h2>
                    <Button
                        title="Adicionar filme"
                        icon={FiPlus}
                        style={{ width: "207px", }}
                        to="/newmovie"
                    />
                </div>
            </section>
            <main>
                {
                    movies.map(movie => (
                        <MovieItem
                            key={String(movie.id)}
                            data={movie}
                            onClick={() => { handleDetails(movie.id) }}
                        />
                    ))
                }
            </main>
            <Footer />
        </Container>
    );
};
