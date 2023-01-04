import Home from "./pages/home/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/login/Login";
import Register from "./components/register/Register";

import Friend from "./pages/friends/Friend";
import User from "./pages/profil/User";
import Footer from "./components/footer/Footer";
import Extrait from "./pages/extrait/Extrait";
import CasierJudiciaire from "./pages/casier/CasierJudiciaire";

function App() {
    const id = "DSN7984";
    return (
        <Router>
            <Routes>
                <Route path="/" exact element={<Home />} />
                <Route path="/User/:id" element={<User />} />
                <Route path="/Login" exact element={<Login />} />
                <Route path="/Register" exact element={<Register />} />
                <Route path="/Friend" exact element={<Friend />} />
                <Route path="/Demande_Extrait" exact element={<Extrait />} />
                <Route path="/Demande_CasierJudiciaire" exact element={<CasierJudiciaire />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;