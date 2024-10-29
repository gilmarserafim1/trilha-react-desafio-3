import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import Login from "../pages/login";
import Cadastro from "../pages/cadastro";
import Feed from "../pages/feed";

const AppRoutes = () => {
    return(
        <Router basename={process.env.PUBLIC_URL}>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="login" element={<Login />} />
                <Route path="cadastro" element={<Cadastro />} />
                <Route path="feed" element={<Feed />} />
            </Routes>          
        </Router>
    );
}

export default AppRoutes;