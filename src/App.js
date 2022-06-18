import "./App.css";
import Nav from './components/Nav'
import Intro from "./components/Intro";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
    return <div className="App">
        <Nav></Nav>
        <Intro></Intro>
        <Skills></Skills>
        <Projects></Projects>
        <Footer></Footer>
    </div>;
}

export default App;