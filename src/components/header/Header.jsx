import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { FaArrowDown } from "react-icons/fa";

export default function Header() {
    const nickname = "I'm LakioLive".split("");

    const visibleVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0 },
    };

    return (
        <header
            id="home"
            className="header relative flex items-center justify-between h-screen lg:mx-32 md:mx-24 sm:mx-20 mx-8"
        >
            <div className="relative flex flex-col justify-center items-start z-10">
                <img
                    src="../../../cccoil.svg"
                    alt="shape1"
                    className="hidden sm:block absolute -left-[30vw] -top-[50vh] w-[50vw] opacity-10"
                />
                <motion.h3
                    initial="hidden"
                    animate="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    variants={visibleVariants}
                    transition={{ duration: 0.6 }}
                    className="xl:text-6xl md:text-4xl text-2xl font-bold z-20"
                >
                    Hi,
                </motion.h3>
                <motion.h1
                    initial="hidden"
                    animate="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    variants={visibleVariants}
                    transition={{ duration: 0.6 }}
                    className="motion"
                >
                    {nickname.map((item, i) => (
                        <motion.span
                            key={i}
                            initial="hidden"
                            animate="visible"
                            viewport={{ once: true, amount: 0.5 }}
                            variants={visibleVariants}
                            transition={{
                                duration: 0.25,
                                delay: i / 10,
                            }}
                            className="xl:text-9xl md:text-7xl text-5xl font-bold text-yellow-300 sm:text-light-blue z-20"
                        >
                            {item}
                        </motion.span>
                    ))}
                </motion.h1>
                <motion.h1
                    initial="hidden"
                    animate="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    variants={visibleVariants}
                    transition={{ duration: 0.6 }}
                    className="xl:text-6xl md:text-4xl text-2xl font-bold z-20"
                >
                    Frontend Developer
                </motion.h1>
                <motion.div
                    initial={{ backgroundColor: "#0077FF", opacity: 0, x: -50 }}
                    animate="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    variants={visibleVariants}
                    whileHover={{ scale: 1.1, backgroundColor: "#1e40af" }}
                    whileTap={{ scale: 0.9, backgroundColor: "#0077FF" }}
                    className="text-white bg-light-blue focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-full xl:px-7 md:px-5 px-3 xl:py-2 py-1 text-center mt-8 z-20"
                >
                    <Link
                        spy={true}
                        smooth={true}
                        duration={500}
                        to="contactme"
                        className="flex gap-2 items-center xl:text-2xl md:text-xl text-lg font-bold z-20"
                    >
                        Contact me{" "}
                        <FaArrowDown className="xl:text-xl md:text-base text-sm" />
                    </Link>
                </motion.div>
            </div>
            <video
                src="../../../blue_shape.mp4"
                loop
                autoPlay
                muted
                playsInline
                className="hidden dark:block absolute right-0 sm:w-[30vw] sm:blur-none blur"
            ></video>
            <video
                src="../../../blue_shape_white.mp4"
                loop
                autoPlay
                muted
                playsInline
                className="block dark:hidden absolute right-0 sm:w-[30vw] sm:blur-none blur"
            ></video>
        </header>
    );
}
