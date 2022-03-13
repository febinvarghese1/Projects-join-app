import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import Write from "./Components/WritePost/Write";
import Home from "./Pages/Home/Home";
import Settings from "./Pages/Settings/Settings";
import SinglePage from "./Pages/SinglePage/SinglePage";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useContext } from "react";
import { Context } from "./Context/Context";

function App() {
  const { user } = useContext(Context);
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          {user ? (
            <Route path="write/" element={<Write />} />
          ) : (
            <Route path="write/" element={<Home />} />
          )}
          {user ? (
            <Route path="settings/" element={<Settings />} />
          ) : (
            <Route path="settings/" element={<Home />} />
          )}
          {user ? (
            <Route path="login/" element={<Home />} />
          ) : (
            <Route path="login/" element={<Login />} />
          )}
          {user ? (
            <Route path="register/" element={<Home />} />
          ) : (
            <Route path="register/" element={<Register />} />
          )}
          <Route path="post/:postId" element={<SinglePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
