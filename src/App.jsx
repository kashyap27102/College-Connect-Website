import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import Login from "./pages/login/Login"
import Signup from "./pages/register/Signup"
import { BrowserRouter as Router, Switch, Route, Routes } from "react-router-dom";
function App() {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup/>}/>
                <Route path="/home" element={<Home/>} />
                <Route path="/profile/:username" element={<Profile/>} />
            </Routes>
        </Router>
    );
}

export default App;