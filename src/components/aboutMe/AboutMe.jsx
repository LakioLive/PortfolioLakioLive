import { FaReact } from "react-icons/fa";
import { motion } from "framer-motion";

export default function AboutMe() {
    const leftVisibleVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0 }
    };

    const rightVisibleVariants = {
        hidden: { opacity: 0, x: 50 },
        visible: { opacity: 1, x: 0 }
    };

    return (
        <section id="about" className="about-me lg:flex lg:flex-row lg:items-center lg:space-x-10 flex-col h-screen lg:mx-32 md:mx-24 sm:mx-20 mx-8">
            <img src="../../../oooscillate.svg" alt="shape1" className="hidden sm:block absolute left-0 top-[100%] w-[100vw] opacity-10 object-fill -z-10"/>
            <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={leftVisibleVariants}
                transition={{ duration: 0.6 }}
                className="container grid lg:justify-start justify-center"
            >
                <h1 className="xl:text-9xl lg:text-7xl md:text-8xl text-6xl font-bold">LakioLive</h1>
                <h1 className="xl:text-9xl lg:text-7xl md:text-8xl text-6xl font-bold text-white dark:text-black font-outline-black-2 dark:font-outline-white-2">LakioLive</h1>
                <h1 className="xl:text-9xl lg:text-7xl md:text-8xl text-6xl font-bold">LakioLive</h1>
            </motion.div>
            <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={rightVisibleVariants}
                transition={{ duration: 0.6 }}
                className="container"
            >
                <h3 className="xl:text-7xl md:text-5xl text-3xl font-bold sm:mt-0 mt-5 mb-3">About me</h3>
                <p className="xl:text-xl md:text-lg text-base">My name is <span className="text-light-blue">LakioLive</span> and I am a passionate web developer from Ukraine. I am actively studying to become a highly skilled programmer. I already have a lot of experience with <span className="relative text-react-blue inline-flex md:translate-y-0 translate-y-[3px] gap-1"><FaReact className="text-react-blue text-xl translate-y-[2px]"/> React</span>. My passion for programming started with a desire to create interactive and dynamic web applications. I am always looking to learn new technologies and improve my skills to stay on the cutting edge of web development.</p>
            </motion.div>
        </section>
    )
} 