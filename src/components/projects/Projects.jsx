import { Tooltip } from "react-tooltip";
import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaReact, FaSass, FaGithub } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript, IoLogoFirebase } from "react-icons/io5";
import { IoMdLink } from "react-icons/io";
import { SiExpo, SiSqlite, SiTypescript } from "react-icons/si";
import { DiMysql } from "react-icons/di";
import { TbBrandFramerMotion } from "react-icons/tb";

const technologyIcons = {
    HTML: (
        <FaHtml5
            data-tooltip-id="tooltip-projects"
            data-tooltip-content="HTML5"
            className="text-3xl text-red-500 outline-none"
        />
    ),
    CSS: (
        <FaCss3Alt
            data-tooltip-id="tooltip-projects"
            data-tooltip-content="CSS"
            className="text-3xl text-blue-500 outline-none"
        />
    ),
    Sass: (
        <FaSass
            data-tooltip-id="tooltip-projects"
            data-tooltip-content="Sass"
            className="text-3xl text-pink-500 outline-none"
        />
    ),
    JavaScript: (
        <IoLogoJavascript
            data-tooltip-id="tooltip-projects"
            data-tooltip-content="JavaScript"
            className="text-3xl text-yellow-500 outline-none"
        />
    ),
    TypeScript: (
        <SiTypescript
            data-tooltip-id="tooltip-projects"
            data-tooltip-content="TypeScript"
            className="text-3xl text-[#2f74c0] outline-none"
        />
    ),
    TailwindCSS: (
        <RiTailwindCssFill
            data-tooltip-id="tooltip-projects"
            data-tooltip-content="Tailwind CSS"
            className="text-3xl text-teal-500 outline-none"
        />
    ),
    React: (
        <FaReact
            data-tooltip-id="tooltip-projects"
            data-tooltip-content="React"
            className="text-3xl text-react-blue outline-none"
        />
    ),
    ReactNative: (
        <FaReact
            data-tooltip-id="tooltip-projects"
            data-tooltip-content="React Native"
            className="text-3xl text-react-blue outline-none"
        />
    ),
    Expo: (
        <SiExpo
            data-tooltip-id="tooltip-projects"
            data-tooltip-content="Expo"
            className="text-3xl text-black outline-none"
        />
    ),
    MySQL: (
        <DiMysql
            data-tooltip-id="tooltip-projects"
            data-tooltip-content="MySQL"
            className="text-3xl outline-none"
        />
    ),
    SQLite: (
        <SiSqlite
            data-tooltip-id="tooltip-projects"
            data-tooltip-content="SQLite"
            className="text-3xl outline-none"
        />
    ),
    Firebase: (
        <IoLogoFirebase
            data-tooltip-id="tooltip-projects"
            data-tooltip-content="Firebase"
            className="text-3xl text-[#f7c42a] outline-none"
        />
    ),
    FramerMotion: (
        <TbBrandFramerMotion
            data-tooltip-id="tooltip-projects"
            data-tooltip-content="FramerMotion"
            className="text-3xl text-[#6204f7] outline-none"
        />
    ),
};

const dataProjects = [
    {
        id: 1,
        name: "Form Validation",
        description:
            "This project provides a comprehensive form validation system designed to ensure data integrity and enhance user experience.",
        imageSrc: "./website_form.jpg",
        technologies: ["HTML", "CSS", "Sass", "JavaScript"],
        repository: "https://github.com/LakioLive/validateForm",
        link: "https://form-validation-lakio.vercel.app/",
    },
    {
        id: 2,
        name: "Interactive Map Trip",
        description:
            "This application is designed to help tourists find points of interest and plan their routes. The interactive map allows users to search for locations, view details about various attractions, and create customized travel itineraries.",
        imageSrc: "./website_trip.jpg",
        technologies: [
            "Sass",
            "TailwindCSS",
            "TypeScript",
            "React",
            "Firebase",
            "FramerMotion",
        ],
        repository: "https://github.com/LakioLive/InteractiveMapTrip",
        link: "https://interactive-map-trip.vercel.app/",
    },
    {
        id: 3,
        name: "Kanban Board Sliwka",
        description:
            "This application enables teams to manage projects efficiently with a feature-rich Kanban board. It offers tools for task organization, seamless drag-and-drop functionality, and real-time updates, ensuring an optimized workflow and improved collaboration.",
        imageSrc: "./website_kanban.jpg",
        technologies: [
            "Sass",
            "TailwindCSS",
            "TypeScript",
            "React",
            "Firebase",
            "FramerMotion",
        ],
        repository: "https://github.com/LakioLive/KanbanBoardSliwka",
        link: "https://kanban-board-sliwka.vercel.app/",
    },
    {
        id: 4,
        name: "SloudPL Page",
        description:
            "This site is made for SloudPL. It offers game server hosting and other services.",
        imageSrc: "./website_sloudpl.jpg",
        technologies: ["Sass", "TailwindCSS", "TypeScript", "React"],
        repository: "https://github.com/LakioLive/SloudPLPage",
        link: "https://sloud.pl/",
    },
    {
        id: 5,
        name: "App Store",
        description: "This site is made for SloudPL. Simple App Store.",
        imageSrc: "./website_app-store.jpg",
        technologies: ["HTML", "TailwindCSS", "JavaScript"],
        repository: "https://github.com/SloudPL/app-store",
        link: "https://apps.sloudhost.ovh/",
    },
];

export default function Projects() {
    const visibleVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0 },
    };

    const renderItem = (arr) => {
        return arr.map((item) => {
            return (
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    variants={visibleVariants}
                    transition={{ duration: 0.6 }}
                    key={item.id}
                    className="grid bg-gray-300/50 dark:bg-dark-gray rounded-2xl p-5 max-w-sm"
                >
                    <div className="flex flex-col gap-1">
                        <h6 className="xl:text-4xl md:text-2xl text-lg font-bold">
                            {item.name}
                        </h6>
                        <p className="xl:text-xl md:text-lg text-base text-gray-500 dark:text-light-gray">
                            {item.description}
                        </p>
                    </div>
                    <img
                        src={item.imageSrc}
                        alt={item.name}
                        className="rounded-2xl my-3"
                    />
                    <div className="flex flex-wrap gap-3">
                        {item.technologies.map((tech, index) => (
                            <motion.span
                                key={tech + item.id + index}
                                whileHover={{ scale: 1.2 }}
                                whileTap={{ scale: 0.8 }}
                            >
                                {technologyIcons[tech]}
                            </motion.span>
                        ))}
                        <Tooltip
                            id="tooltip-projects"
                            style={{
                                backgroundColor: "#4f4f4f",
                                color: "#fff",
                            }}
                        />
                    </div>
                    <div className="flex place-self-end gap-3 bg-white rounded-3xl p-2 mt-5">
                        <motion.a
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.8 }}
                            href={item.repository}
                            target="_blank"
                        >
                            <FaGithub className="text-3xl text-black" />
                        </motion.a>
                        <motion.a
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.8 }}
                            href={item.link}
                            target="_blank"
                        >
                            <IoMdLink className="text-3xl text-black" />
                        </motion.a>
                    </div>
                </motion.div>
            );
        });
    };

    return (
        <section
            id="projects"
            className="projects relative flex flex-col justify-center h-full lg:mx-32 md:mx-24 sm:mx-20 mx-8"
        >
            <motion.h3
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={visibleVariants}
                transition={{ duration: 0.6 }}
                className="xl:text-7xl md:text-5xl text-3xl font-bold mb-4"
            >
                Projects
            </motion.h3>
            <motion.p
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={visibleVariants}
                transition={{ duration: 0.6 }}
                className="xl:text-xl md:text-lg text-base text-gray-500 dark:text-light-gray"
            >
                Here are some of the projects I have worked on.
            </motion.p>
            <div className="flex flex-wrap gap-10 justify-center mt-9">
                {renderItem(dataProjects)}
            </div>
        </section>
    );
}
