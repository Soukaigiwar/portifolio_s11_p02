import { useState } from "react"
import { useAuth } from "../../hooks/auth"
import { useNavigate } from 'react-router-dom';
import { FiCamera, FiUser, FiMail, FiLock, FiArrowLeft } from "react-icons/fi"
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { TextButton } from "../../components/TextButton"
import { Container, Form, Avatar } from "./styles"
import { api } from "../../services/api"
import avatarPlaceholder from "../../assets/img/avatar_placeholder.svg"

export function Profile() {
    const { user, updateProfile } = useAuth()

    const [name, setName] = useState(user.name)
    const [email, setEmail] = useState(user.email)
    const [passwordOld, setPasswordOld] = useState("")
    const [passwordNew, setPasswordNew] = useState("")

    const avatarUrl = user.avatar
        ? `${api.defaults.baseURL}/files/${user.avatar}`
        : avatarPlaceholder

    const [avatar, setAvatar] = useState(avatarUrl)
    const [avatarFile, setAvatarFile] = useState(null)

    const handleBack = () => navigate(-1);
    const navigate = useNavigate();

    async function handleUpdate() {
        const updated = {
            name,
            email,
            new_password: passwordNew,
            old_password: passwordOld,
        }

        const userUpdated = Object.assign(user, updated)

        await updateProfile({ user: userUpdated, avatarFile })
        
        if (updated.new_password && updated.old_password) {
            handleBack();
            signOut();
        }
    }

    function handleChangeAvatar(event) {
        const file = event.target.files[0]

        setAvatarFile(file)

        const imagePreview = URL.createObjectURL(file)
        setAvatar(imagePreview)
    }

    return (
        <Container>
            <header>
                <TextButton onClick={handleBack}>
                    <FiArrowLeft />
                    Voltar
                </TextButton>
            </header>

            <Form>
                <Avatar>
                    <img src={avatar} alt="Foto do Usuário" />
                    <label htmlFor="avatar">
                        <FiCamera />
                        <Input
                            id="avatar"
                            type="file"
                            onChange={handleChangeAvatar}
                        />
                    </label>
                </Avatar>
                <div>
                    <Input
                        autoComplete="username"
                        placeholder="Nome"
                        type="text"
                        icon={FiUser}
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                    <Input
                        autoComplete="e-mail"
                        placeholder="E-mail"
                        type="text"
                        icon={FiMail}
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <Input
                        autoComplete="current-password"
                        placeholder="Senha atual"
                        type="password"
                        icon={FiLock}
                        onChange={e => setPasswordOld(e.target.value)}
                    />
                    <Input
                        autoComplete="new-password"
                        placeholder="Nova senha"
                        type="password"
                        icon={FiLock}
                        onChange={e => setPasswordNew(e.target.value)}
                    />
                </div>
                <Button id="button" title="Salvar" onClick={handleUpdate} />
            </Form>
        </Container>
    )
}