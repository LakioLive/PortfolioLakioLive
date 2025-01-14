import Navbar from "./navbar/Navbar";
import Header from "./header/Header";
import AboutMe from "./aboutMe/AboutMe";
import Skills from "./skills/Skills";
import Projects from "./projects/Projects";
import Footer from "./footer/Footer";

export default function App() {
    return (
        <>
            <Navbar />
            <Header />
            <AboutMe />
            <Skills />
            <Projects />
            <Footer />
        </>
    );
}