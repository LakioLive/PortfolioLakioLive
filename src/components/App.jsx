// import Navbar from "./navbar/Navbar";
// import Header from "./header/Header";
// import AboutMe from "./aboutMe/AboutMe";
// import Skills from "./skills/Skills";
// import Projects from "./projects/Projects";
// import Footer from "./footer/Footer";
import { useEffect } from "react";

export default function App() {
    useEffect(() => {
        window.location.href = "https://lakiolive-portfolio.vercel.app/";
    }, []);

    return null;

    // return (
    //     <>
    //         <Navbar />
    //         <Header />
    //         <AboutMe />
    //         <Skills />
    //         <Projects />
    //         <Footer />
    //     </>
    // );
}
