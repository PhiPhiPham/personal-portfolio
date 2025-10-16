'use client'

import { motion } from "motion/react"
import { Github, Linkedin } from "lucide-react"
import LeetcodeIcon from "./leet-code"
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"

const footerLinks = [
    {
        icon: Linkedin,
        href: "https://www.linkedin.com/in/steven-pham-42b485271/",
        tooltip: "LinkedIn Profile",
    },
    {
        icon: Github,
        href: "https://github.com/PhiPhiPham",
        tooltip: "GitHub Profile",
    },
    {
        icon: LeetcodeIcon,
        href: "https://leetcode.com/u/PhiPhiPham/",
        tooltip: "LeetCode Profile",
    },
]

const socialVariants = {
    hidden: { scale: 0 },
    visible: {
        scale: 1,
        transition: {
            type: "spring",
            stiffness: 200,
            damping: 10,
        },
    },
}

export const Footer = () => {
    return (
        <footer
            id="footer"
            className="relative border-t border-slate-200/70 dark:border-slate-700/60 bg-white/80 dark:bg-slate-950/40 backdrop-blur-md"
        >
            <div className="container mx-auto px-6 py-8 flex flex-col items-center gap-4 text-center">
                <motion.h3
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-2xl font-bold text-gray-700 dark:text-gray-300"
                >
                    Phi Phi Pham
                </motion.h3>

                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-slate-500 dark:text-slate-300"
                >
                    Thanks for visiting my portfolio website.
                </motion.p>

                <TooltipProvider>
                    <motion.div
                        className="flex items-center gap-6"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ staggerChildren: 0.15, delayChildren: 0.2 }}
                    >
                        {footerLinks.map((link, index) => (
                            <Tooltip key={index}>
                                <TooltipTrigger asChild>
                                    <motion.a
                                        href={link.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-400 hover:text-orange-400 transition-colors"
                                        variants={socialVariants}
                                        whileHover={{ scale: 1.2 }}
                                        whileTap={{ scale: 0.9 }}
                                    >
                                        <link.icon size={24} />
                                    </motion.a>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>{link.tooltip}</p>
                                </TooltipContent>
                            </Tooltip>
                        ))}
                    </motion.div>
                </TooltipProvider>

            </div>
            <div className="border-t border-slate-200/70 dark:border-slate-800/60 py-4">
                <p className="text-center text-sm text-slate-400 dark:text-slate-500">
                    © {new Date().getFullYear()} Phi Phi Pham. All rights reserved.
                </p>
            </div>
        </footer>
    )
}
