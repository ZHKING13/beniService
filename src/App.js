import Home from "./pages/home/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/login/Login";
import Register from "./components/register/Register";

import User from "./pages/profil/User";
import Footer from "./components/footer/Footer";
import Extrait from "./pages/extrait/Extrait";
import CasierJudiciaire from "./pages/casier/CasierJudiciaire";
import Certificat from "./pages/Certificat/Certificat";
import Succes from "./pages/Succes";
import Cancel from "./pages/Cancel";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" exact element={<Home />} />
                <Route path="/User/:id" element={<User />} />
                <Route path="/Login" exact element={<Login />} />
                <Route path="/Register" exact element={<Register />} />
                <Route path="/succes" exact element={<Succes />} />
                <Route path="/cancel" exact element={<Cancel />} />
                <Route path="/Demande_Extrait" exact element={<Extrait />} />
                <Route path="/Demande_Certificat" exact element={<Certificat />} />
                <Route
                    path="/Demande_CasierJudiciaire"
                    exact
                    element={<CasierJudiciaire />}
                />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
