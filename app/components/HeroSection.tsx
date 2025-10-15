'use client'
import { Button } from "@/components/ui/button"
import { Github, Linkedin, FileUser, ChevronDown } from "lucide-react"
import { motion } from "motion/react"
import Image from "next/image"
import LeetcodeIcon from './leet-code'
import ParticlesBackground from "./ParticlesBackground"
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";

const socialLinks = [
    {
        icon: Github,
        href: "https://github.com/PhiPhiPham",
        tooltip: "GitHub Profile"
    },
    {
        icon: Linkedin,
        href: "https://www.linkedin.com/in/steven-pham-42b485271/",
        tooltip: "LinkedIn Profile"
    },
    {
        icon: LeetcodeIcon,
        href: "https://leetcode.com/u/PhiPhiPham/",
        tooltip: "LeetCode Profile"
    }
];

export default function HeroSection() {
    const scrollToProjects = () => {
        const portfolioSection = document.getElementById('portfolio-section');
        if (portfolioSection) {
            portfolioSection.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        }
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    };

    const socialVariants = {
        hidden: { scale: 0 },
        visible: {
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 200,
                damping: 10
            }
        }
    };

    return (
        <div className="relative flex flex-col items-center justify-center min-h-screen w-full overflow-hidden bg-transparent font-[family-name:var(--font-inter)]">
            <ParticlesBackground />
            <section
                id="hero-section"
                className="relative z-10 container mx-auto px-6 py-12 flex flex-col items-center lg:flex-row lg:justify-between flex-grow"
            >
                <motion.div
                    className="lg:w-1/2 space-y-8"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.h2
                        variants={itemVariants}
                        className="text-3xl font-black dark:text-white text-blue xs:text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-6xl text-left"
                    >
                        Hello, I&apos;m <span className="text-orange-400">Phi Phi</span>
                        <br />
                        a long-life learner <span className="text-orange-400">Software Engineer</span>
                    </motion.h2>

                    <motion.p
                        variants={itemVariants}
                        className="xs:text-lg lg:text-xl xl:max-w-xl dark:text-gray-300 text-gray-500"
                    >
                        A software engineer who loves creating awesome web experiences with Next.js.

                    </motion.p>

                    <motion.div
                        variants={itemVariants}
                        className="flex gap-4 sm:flex-row flex-col"
                    >
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="w-full"
                        >
                            <Button
                                variant="default"
                                size="lg"
                                className="w-full bg-blue-600 hover:bg-blue-700"
                                onClick={() => window.open('https://drive.google.com/file/d/1th3W1ePJ8Apyu5-fACp8TjJXrALiHeGm/view?usp=sharing')}
                            >
                                Resume <FileUser />
                            </Button>
                        </motion.div>
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="w-full"
                        >
                            {/* <Button variant="outline" size="lg" className="w-full" onClick={() => window.open('https://dev.to/dwikis17')}>
                                Read Article <BookOpen />
                            </Button> */}
                        </motion.div>
                    </motion.div>

                    <motion.div
                        variants={itemVariants}
                        className="flex space-x-6 justify-center sm:justify-start"
                    >
                        <TooltipProvider>
                            {socialLinks.map((social, index) => (
                                <Tooltip key={index}>
                                    <TooltipTrigger asChild>
                                        <motion.a
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            href={social.href}
                                            className="text-gray-400 hover:text-orange-400 transition-colors"
                                            variants={socialVariants}
                                            whileHover={{ scale: 1.2 }}
                                            whileTap={{ scale: 0.9 }}
                                        >
                                            <social.icon size={24} />
                                        </motion.a>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p>{social.tooltip}</p>
                                    </TooltipContent>
                                </Tooltip>
                            ))}
                        </TooltipProvider>
                    </motion.div>
                </motion.div>
                <motion.div 
                    className="lg:w-1/2 mt-12 lg:mt-0 flex justify-center"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <div className="relative">
                        <div className="absolute inset-0 bg-orange-400 rounded-full blur-2xl opacity-20"></div>
                        <Image
                            src="/profile-picture.JPG"
                            alt="Phi Phi's profile"
                            className="relative z-10 rounded-full border-4 border-orange-400 object-cover"
                            width={400}
                            height={400}
                        />
                    </div>
                </motion.div>
            </section>

            {/* Scroll Down Indicator */}
            <motion.div
                className="w-full flex flex-col items-center text-center pb-8 mt-8"
                initial={{ opacity: 0, y: -20 }}
                animate={{ 
                    opacity: 1, 
                    y: 0,
                }}
                transition={{ 
                    duration: 0.6, 
                    delay: 1,
                }}
            >
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-700 dark:text-gray-300 mb-3">
                    Explore My Work
                </h2>
                <p className="text-gray-500 dark:text-gray-400 mb-6">
                    Discover projects from 2025 to 2024
                </p>
                <motion.button
                    onClick={scrollToProjects}
                    className="flex items-center gap-2 text-orange-400 hover:text-orange-500 font-semibold text-lg transition-colors cursor-pointer bg-transparent border-none"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    View Portfolio
                    <motion.div
                        animate={{ 
                            y: [0, 5, 0],
                        }}
                        transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    >
                        <ChevronDown size={24} />
                    </motion.div>
                </motion.button>
            </motion.div>
        </div>
    )
}
