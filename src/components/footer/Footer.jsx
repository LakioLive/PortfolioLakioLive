import { motion } from "framer-motion";
import { IoMdMail } from "react-icons/io";
import { FaGithub, FaHeart, FaLinkedin } from "react-icons/fa";
import { FaBluesky, FaSquareXTwitter } from "react-icons/fa6";

export default function Footer() {
    return (
        <footer id="contactme" className="flex justify-end mt-20">
            <div className="flex md:flex-row flex-col md:gap-10 gap-6 bg-light-blue dark:bg-dark-gray w-full h-full lg:px-[130px] md:px-10 sm:px-6 px-4 md:py-11 py-6">
                <div className="flex-1 text-center md:text-left">
                    <p className="flex gap-1 justify-center md:justify-start items-center text-base md:text-lg lg:text-xl text-white dark:text-light-gray">
                        Powered with
                        <motion.span
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.8 }}
                        >
                            <FaHeart className="text-red-500" />
                        </motion.span>
                        by
                        <span className="text-yellow-300 dark:text-light-blue">
                            LakioLive
                        </span>
                        ©
                    </p>
                </div>
                <div className="flex-2 flex flex-col items-center md:items-start">
                    <h6 className="text-lg md:text-2xl lg:text-4xl font-bold text-white">
                        Get in touch
                    </h6>
                    <div className="mt-2">
                        <motion.a
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            href="mailto:mister.lakio.new@gmail.com"
                            target="_blank"
                            className="flex items-center gap-1 text-base md:text-lg lg:text-xl text-white dark:text-light-gray"
                        >
                            <IoMdMail className="text-base md:text-lg lg:text-xl text-white dark:text-light-gray" />
                            mister.lakio.new@gmail.com
                        </motion.a>
                    </div>
                </div>
                <div className="flex-1 flex flex-col items-end">
                    <h6 className="self-center md:self-end text-lg md:text-2xl lg:text-4xl font-bold text-white">
                        Social Media
                    </h6>
                    <div className="flex self-center md:self-end gap-4 mt-2">
                        <motion.a
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            href="https://github.com/LakioLive"
                            target="_blank"
                        >
                            <FaGithub className="text-base md:text-lg xl:text-2xl text-white" />
                        </motion.a>
                        <motion.a
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            href="https://www.linkedin.com/in/lakiolive/"
                            target="_blank"
                        >
                            <FaLinkedin className="text-base md:text-lg xl:text-2xl text-white" />
                        </motion.a>
                        <motion.a
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            href="https://bsky.app/profile/lakiolive.bsky.social"
                            target="_blank"
                        >
                            <FaBluesky className="text-base md:text-lg xl:text-2xl text-white" />
                        </motion.a>
                        <motion.a
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            href="https://x.com/lakiolive"
                            target="_blank"
                        >
                            <FaSquareXTwitter className="text-base md:text-lg xl:text-2xl text-white" />
                        </motion.a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
