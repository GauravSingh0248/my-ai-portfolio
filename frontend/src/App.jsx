import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

import Gaming from "./components/ExtraAbout/Gaming";
import Learning from "./components/ExtraAbout/Learning";
import MovieAnime from "./components/ExtraAbout/Movie_Anime";
import Music from "./components/ExtraAbout/Music";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        {/* Main Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />

        {/* Beyond The Code */}
        <Route path="/extra-about/gaming" element={<Gaming />} />
        <Route path="/extra-about/music" element={<Music />} />
        <Route path="/extra-about/movie-anime" element={<MovieAnime />} />
        <Route path="/extra-about/learning" element={<Learning />} />
      </Route>
    </Routes>
  );
}

export default App;
