import { Tooltip } from 'react-tooltip';
import { motion } from "framer-motion";
import {
    FaHtml5, FaCss3Alt, FaReact, FaPython, FaSass, FaBootstrap
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiPhp, SiRedux, SiExpo, SiTypescript } from "react-icons/si";
import { DiMysql } from "react-icons/di";
import { RiTailwindCssFill, RiNextjsFill } from "react-icons/ri";

const skills = [
    { icon: FaHtml5, name: "HTML5" },
    { icon: FaCss3Alt, name: "CSS" },
    { icon: FaSass, name: "Sass" },
    { icon: FaBootstrap, name: "Bootstrap" },
    { icon: RiTailwindCssFill, name: "Tailwind CSS" },
    { icon: IoLogoJavascript, name: "JavaScript" },
    { icon: SiTypescript, name: "TypeScript" },
    { icon: FaReact, name: "React" },
    { icon: SiRedux, name: "Redux" },
    { icon: RiNextjsFill, name: "Nextjs" },
    { icon: FaReact, name: "React Native" },
    { icon: SiExpo, name: "Expo" },
    { icon: SiPhp, name: "PHP" },
    { icon: DiMysql, name: "MySQL" },
    { icon: FaPython, name: "Python" },
];

const visibleVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
};

export default function Skills() {
    return (
        <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={visibleVariants}
            transition={{ duration: 0.6 }}
            id="skills"
            className="skills flex flex-col justify-center h-screen lg:mx-32 md:mx-24 sm:mx-20 mx-8"
        >
            <div className="bg-gray-300/50 dark:bg-dark-gray rounded-2xl px-8 py-10">
                <h3 className="xl:text-7xl md:text-5xl text-3xl font-bold mb-3">My Skills</h3>
                <p className="xl:text-xl md:text-lg text-base text-gray-500 dark:text-light-gray">Here are a few technologies I've been working with recently</p>
                <div className="logo-technologies grid grid-cols-5 justify-items-center gap-y-6 mt-10">
                    {
                        skills.map((skill, index) => {
                            const Icon = skill.icon;
                            return (
                                <motion.div
                                    key={index}
                                    whileHover={{ scale: 1.2 }}
                                    whileTap={{ scale: 0.8 }}
                                >
                                    <Icon
                                        className="w-[10vw] h-[9vh]"
                                        data-tooltip-id="tooltip-skills"
                                        data-tooltip-content={skill.name}
                                    />
                                </motion.div>
                            );
                        })
                    }
                    <Tooltip
                        id="tooltip-skills"
                        style={{
                            backgroundColor: "#4f4f4f",
                            color: "#fff"
                        }}
                    />
                </div>
            </div>
        </motion.section>
    );
}