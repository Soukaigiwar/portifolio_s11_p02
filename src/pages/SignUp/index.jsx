import { useState } from "react"
import { api } from "../../services/api"
import { FiMail, FiLock, FiUser, FiArrowLeft } from "react-icons/fi"
import { Link, useNavigate } from "react-router-dom"
import { Button } from "../../components/Button"
import { Input } from "../../components/Input"
import { Footer } from "../../components/Footer"
import { Container, Form, Background, Foot } from './styles'

export function SignUp() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate()

    function handleSignUp() {
        if (!name || !email || !password) return alert("Preencha todos os campos!")

        api.post("/users", { name, email, password })
            .then(() => {
                alert("Usuário cadastrado com sucesso.")
                navigate("/")
            })
            .catch(error => {
                alert("Não foi possível cadastrar. Verifique se preecheu tudo corretamente e se a senha tem pelo menos 8 caracteres entre letras, números e letras maiúsculas.")
                // if (error.response) {
                //     console.log(error)
                //     alert(error.response.data.message)
                // } else {
                // }
            })
    }

    return (
        <Container>
            <Form>
                <h1>RocketMovies</h1>
                <p>Aplicação para acompanhar tudo que assistir.</p>

                <div>
                    <h2>Crie sua conta</h2>
                    <div>
                        <Input
                            placeholder="Nome"
                            type="text"
                            icon={FiUser}
                            onChange={e => setName(e.target.value)}
                        />
                        <Input
                            placeholder="E-mail"
                            type="text"
                            icon={FiMail}
                            onChange={e => setEmail(e.target.value)}
                        />
                        <Input
                            placeholder="Senha"
                            type="password"
                            icon={FiLock}
                            onChange={e => setPassword(e.target.value)}
                        />
                    </div>
                    <Button
                        id="button"
                        title="Cadastrar" onClick={handleSignUp} style={{
                            heigh: "5.6rem",
                            width: "34rem",
                        }} />
                </div>
                <Link to="/"><FiArrowLeft />Voltar para o Login</Link>
            </Form>
            <Background />
            <Foot>
                <Footer />
            </Foot>
        </Container>
    )
}