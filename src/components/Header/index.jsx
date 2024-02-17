import { Container, Profile, LogOut } from "./styles"
import { Link, useNavigate } from "react-router-dom";
import { FiSearch } from "react-icons/fi"
import { useAuth } from "../../hooks/auth"

import { api } from "../../services/api"
import avatarPlaceholder from "../../assets/img/avatar_placeholder.svg";

export function Header({children}) {
    const { signOut, user } = useAuth()
    const navigate = useNavigate()

    function handleSignOut() {
        navigate("/")
        signOut()
    }

    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder

    return (
        <Container>
            <h1><Link to="/">RocketMovies</Link></h1>
            
            {children}
            
            <Profile>
                <div>
                    <Link to="/profile">{user.name}</Link>
                        <LogOut onClick={handleSignOut}>
                            sair
                        </LogOut>
                </div>
                <Link to="profile">
                    <img src={avatarUrl} />
                </Link>
            </Profile>
        </Container>
    )
}