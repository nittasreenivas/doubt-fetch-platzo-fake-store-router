import "./styles.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Signin from "./components/Signin";
import Navigation from "./components/Navigation";
import Doggie from "./components/Doggie";
import FakeProducts from "./components/FakeProducts";
import FakeDescription from "./components/FakeDescription";
import DogDescription from "./components/DogDescription";
export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />}>
            <Route path="doggie" element={<Doggie />} />
            <Route path="fake" element={<FakeProducts />} />
          </Route>
          <Route path="/signin" element={<Signin />} />
          <Route path="/projects/fake/:id" element={<FakeDescription />} />
          <Route path="/projects/doggie/:name" element={<DogDescription />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
