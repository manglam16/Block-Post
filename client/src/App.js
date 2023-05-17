import MetaConn from "./Components.js/MetaConn";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./Components.js/LandingPage";
import Header from "./Components.js/Header";
import "./App.css";
import Profile from "./Components.js/Profile";
import CreatePost from "./Components.js/CreatePost";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<LandingPage />} exact />
          <Route path="/profile" element={<Profile />} />
          <Route path="/create-post" element={<CreatePost />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
