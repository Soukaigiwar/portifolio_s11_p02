import { useState, useEffect } from "react"
import { api } from "../../services/api"
import { useNavigate, useParams } from "react-router-dom"
import { Container, Form } from "./styles"

import { TextButton } from "../../components/TextButton"
import { Input } from "../../components/Input"
import { Textarea } from "../../components/Textarea"
import { TagInput } from "../../components/TagInput"
import { Button } from "../../components/Button"
import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer";

export function NewMovie() {
    const [submitTitle, setSubmitTitle] = useState("Adicionar Filme")
    const [title, setTitle] = useState("")
    const [rating, setRating] = useState("")
    const [description, setDescription] = useState("")

    const [tags, setTags] = useState([])
    const [newTag, setNewTag] = useState("")

    const params = useParams();
    const navigate = useNavigate()

    const handleBack = () => navigate(-1);

    function handleMovie() {
        const id = params.id
        if (!title) return alert("Preencha o Título.")
        if (!rating) return alert("Dê uma nota de 1 a 5")
        if (newTag) return alert("Você precisa confirmar o campo da tag ou deixar em branco.")

        if (id) {
            handleUpdateMovie(id)
        } else {
            handleNewMovie()
        }
    }

    async function handleUpdateMovie(id) {
        await api.put(`/movieNotes/${id}`, {
            id,
            title,
            description,
            rating,
            tags
        })

        alert("Filme atualizado com sucesso.")
        navigate("/")
    }

    async function handleNewMovie() {

        await api.post("/movieNotes", {
            title,
            description,
            rating,
            tags
        })

        alert("Adicionado filme com sucesso.")
        navigate("/")
    }

    function handleAddTag() {
        setTags(prevState => [...prevState, newTag])
        setNewTag("")
    }

    function handleRemoveTag(deleted) {
        setTags(prevState => prevState.filter(tag => tag !== deleted))
    }


    useEffect(() => {
        async function fetchMovie() {
            const id = params.id

            if (id) {
                setSubmitTitle("Editar filme")

                const response = await api.get(`/movienotes/${params.id}`);

                setTitle(response.data.title);
                setRating(response.data.rating);
                setDescription(response.data.description);

                const tags = response.data.movieTags.map(tag => tag.name);
                setTags(tags);
            }

        };

        fetchMovie();
    }, []);

    return (
        <Container>
            <Header />
            <main>
                <TextButton onClick={handleBack} />
                <Form>
                    <h2>{submitTitle}</h2>
                    <div className="input_area">
                        <Input
                            placeholder="Título"
                            value={title}
                            onChange={e => setTitle(e.target.value)}
                        />
                        <Input
                            placeholder="Sua nota (de 1 a 5)"
                            value={rating}
                            onChange={e => setRating(e.target.value)}
                        />
                    </div>
                    <Textarea
                        placeholder="Observações"
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                    />
                    <h3>Marcadores</h3>
                    <div className="tags_area">
                        {
                            tags.map((tag, index) => (
                                <TagInput
                                    key={String(index)}
                                    value={tag}
                                    onClick={() => handleRemoveTag(tag)}
                                />
                            ))
                        }
                        <TagInput
                            isNew
                            placeholder="Novo marcador"
                            onChange={e => setNewTag(e.target.value)}
                            value={newTag}
                            onClick={handleAddTag}
                        />
                    </div>
                    <Button
                        title={submitTitle}
                        onClick={handleMovie}
                    />
                </Form>
            </main>
            <Footer />
        </Container>
    )
}