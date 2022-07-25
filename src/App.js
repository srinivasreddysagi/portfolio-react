import NavBar from "./components/navbar/NavBar";
import Intro from './components/intro/Intro';
import Skills from './components/skills/Skills';
import ProjectSlider from './components/projects-slider/ProjectSlider';
import Footer from './components/footer/Footer';

function App() {
    return (
        <>
            <NavBar />
            <Intro/>
            <Skills/>
            <ProjectSlider/>
            <Footer/>
        </>
    );
}

export default App;
