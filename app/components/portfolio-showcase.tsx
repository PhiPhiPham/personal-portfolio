"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronRight, Calendar, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const portfolioData = [
    {
        year: 2025,
        projects: [
            {
                id: 2,
                title: "Project.XO Personality Platform",
                description:
                    "Next.js App Router experience for a personality-matching product with quiz flows, Supabase Auth, and Midtrans Snap payments.",
                image: "/projectxo-placeholder.svg",
                tags: ["Next.js", "Supabase", "React Query", "Midtrans"],
                client: "Project.XO core team",
                link: "https://github.com/PhiPhiPham/ProjectXO-Frontend",
            },
            {
                id: 3,
                title: "Findect",
                description:
                    "AI-assisted networking app pairing attendees via a Node.js + FastAPI backend, Pinecone vector search, and SwiftUI client.",
                image: "/findect1.png",
                tags: ["Node.js", "FastAPI", "Prisma", "Pinecone", "SwiftUI"],
                client: "Apple Developer Academy capstone",
                link: "https://github.com/PhiPhiPham/CH4-RAG-BE",
            },
        ],
    },
    {
        year: 2024,
        projects: [
            {
                id: 1,
                title: "Studdies API",
                description:
                    "Express + Prisma backend powering a social study tracker with Supabase Auth, streak analytics, and media uploads.",
                image: "/studdies-placeholder.svg",
                tags: ["Node.js", "Prisma", "Supabase Auth"],
                client: "Personal project",
                link: "https://github.com/PhiPhiPham/Studdies",
            },
            {
                id: 6,
                title: "Studdies iOS Companion",
                description:
                    "SwiftUI client for Studdies featuring a Combine networking layer, in-app diagnostics, and a study session timer.",
                image: "/studdies-ios-placeholder.svg",
                tags: ["SwiftUI", "Combine", "Keychain"],
                client: "Personal project",
                link: "https://github.com/PhiPhiPham/Studdies-FE",
            },
            {
                id: 4,
                title: "3D BeReal (TreeHacks)",
                description:
                    "Hackathon prototype that records simultaneous front/back clips with AVFoundation and syncs them to Firebase.",
                image: "/treehacks-placeholder.svg",
                tags: ["Swift", "AVFoundation", "Firebase"],
                client: "TreeHacks 2024 Hackathon",
                link: "https://github.com/PhiPhiPham/TreeHacks24",
            },
            {
                id: 5,
                title: "Spatial Audio Weapons Lab",
                description:
                    "Multiplayer spatial-audio experiment fusing SwiftUI, AVAudioEngine, MultipeerConnectivity, and iBeacon proximity.",
                image: "/spatial-audio-placeholder.svg",
                tags: ["SwiftUI", "AVAudioEngine", "MultipeerConnectivity"],
                client: "Personal prototype",
                link: "https://github.com/PhiPhiPham/Spatial-Audio-Weapons-App",
            },
        ],
    },
]

export default function PortfolioShowcase() {
    const years = portfolioData.map((item) => item.year).sort((a, b) => b - a)
    const [activeYear, setActiveYear] = useState(years[0] ?? new Date().getFullYear())

    useEffect(() => {
        const handleScroll = () => {
            const sections = portfolioData.map((item) => ({
                year: item.year,
                element: document.getElementById(`year-${item.year}`),
            }))

            const scrollPosition = window.scrollY + window.innerHeight / 2

            for (const section of sections) {
                if (section.element) {
                    const { offsetTop, offsetHeight } = section.element
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveYear(section.year)
                        break
                    }
                }
            }
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const scrollToYear = (year: number) => {
        const element = document.getElementById(`year-${year}`)
        if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "center" })
        }
    }

    return (
        <div className="min-h-screen bg-background">
            {/* Header */}
            <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b">
                <div className="container mx-auto px-4 py-4">
                    <div className="flex items-center justify-between">
                        <h1 className="text-2xl font-bold">Portfolio</h1>
                        <nav className="flex items-center gap-6">
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                <span className="text-sm text-muted-foreground">Highlighting:</span>
                                <Badge variant="secondary" className="font-medium">
                                    {activeYear}
                                </Badge>
                            </div>
                        </nav>
                    </div>
                </div>
            </header>

            {/* Year Navigation */}
            <div className="sticky top-16 z-40 bg-background/90 backdrop-blur-sm border-b">
                <div className="container mx-auto px-4 py-3">
                    <div className="flex items-center gap-4 overflow-x-auto">
                        {years.map((year) => (
                            <Button
                                key={year}
                                variant={activeYear === year ? "default" : "ghost"}
                                size="sm"
                                onClick={() => scrollToYear(year)}
                                className="whitespace-nowrap"
                            >
                                {year}
                            </Button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Portfolio Content */}
            <main className="container mx-auto px-4 py-8">
                {portfolioData.map((yearData) => (
                    <section key={yearData.year} id={`year-${yearData.year}`} className="mb-16 scroll-mt-32">
                        <div className="flex items-center gap-4 mb-8">
                            <h2 className="text-4xl font-bold">{yearData.year}</h2>
                            <div className="h-px bg-border flex-1" />
                            <Badge variant="outline">
                                {yearData.projects.length} Project{yearData.projects.length !== 1 ? "s" : ""}
                            </Badge>
                        </div>

                        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                            {yearData.projects.map((project) => (
                                <Card key={project.id} className="group hover:shadow-lg transition-all duration-300">
                                    <CardContent className="p-0">
                                        <div className="relative overflow-hidden rounded-t-lg">
                                            <Image
                                                src={project.image || "/placeholder.svg"}
                                                alt={project.title}
                                                width={400}
                                                height={300}
                                                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                                            />
                                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                                        </div>
                                        <div className="p-6">
                                            <div className="flex items-start justify-between mb-3">
                                                <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                                                    {project.title}
                                                </h3>
                                                {project.link && (
                                                    <Link href={project.link} target="_blank" className="text-sm text-muted-foreground">
                                                        <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                                                    </Link>
                                                )}
                                            </div>

                                            <p className="text-muted-foreground text-sm mb-4 line-clamp-3">{project.description}</p>
                                            <div className="flex flex-wrap gap-2 mb-4">
                                                {project.tags.map((tag) => (
                                                    <Badge key={tag} variant="secondary" className="text-xs">
                                                        {tag}
                                                    </Badge>
                                                ))}
                                            </div>
                                            <div className="flex items-center justify-between">
                                                <span className="text-sm text-muted-foreground">{project.client}</span>
                                                <Link href={`/portfolio/${project.id}`}>
                                                    <Button size="sm" variant="ghost" className="group/btn">
                                                        View Details
                                                        <ChevronRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                                                    </Button>
                                                </Link>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </section>
                ))}
            </main>

            {/* Footer removed as requested */}
        </div>
    )
}
