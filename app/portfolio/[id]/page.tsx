"use client"

import { useState, useEffect } from "react"
import { useParams } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ChevronLeft, ChevronRight, ExternalLink, Calendar, User, Tag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

const projectDetails = {
    1: {
        title: "Studdies API",
        client: "Personal project",
        year: 2024,
        duration: "10 weeks",
        tags: ["Node.js", "Express", "Prisma", "Supabase Auth", "PostgreSQL", "Docker"],
        results:
            "Running in Docker with automated Prisma migrations and powering a private beta used by my study accountability circle.",
        description:
            "Studdies is the backend that drives a Strava-for-studying experience: social feeds, streak tracking, and friend interactions designed to keep students accountable.",
        challenge:
            "I needed a backend that could blend Supabase-managed authentication with custom domain logic, support media uploads, and keep streaks accurate even when users study across time zones.",
        solution:
            "I built a modular Express service with Prisma models for posts, comments, friendships, and streaks. Supabase handles auth and storage, Docker Compose keeps local development easy, and shared utilities recalculate streaks and study-time aggregates whenever a session is created or updated.",
        images: [
            "/studdies-placeholder.svg",
        ],
        sections: [
            { id: "overview", title: "Project Overview" },
            { id: "challenge", title: "The Challenge" },
            { id: "solution", title: "Our Solution" },
            { id: "technical", title: "Technical Highlights" },
            { id: "future", title: "Future Improvements" },
            { id: "tech-stack", title: "Tech Stack" },
        ],
        technicalHighlights: [
            "Prisma schema models study sessions, comments, streaks, and friendships with aggregate queries surfaced through helper utilities.",
            "Supabase Auth tokens are validated inside Express middleware to gate protected routes and personalize uploads to Supabase Storage.",
            "Reusable validation/error helpers keep REST responses consistent for the mobile app and Postman contract tests in the repo.",
        ],
        futureImprovements: [
            "Introduce WebSocket notifications so friends see study sessions appear in real time.",
            "Schedule weekly recap jobs that summarize streaks and time-on-task per user.",
            "Add observability using OpenTelemetry and Ship-ready tracing for Prisma queries.",
        ],
        techStack: {
            backend: "Node.js, Express.js, TypeScript-friendly tooling",
            database: "PostgreSQL (Supabase) with Prisma ORM",
            authentication: "Supabase Auth with JWT verification middleware",
            infrastructure: "Docker Compose for local orchestration and Supabase Storage for assets",
        },
        link: "https://github.com/PhiPhiPham/Studdies",
    },
    2: {
        title: "Project.XO Personality Platform",
        client: "Project.XO core team",
        year: 2025,
        duration: "8 weeks",
        tags: ["Next.js", "TypeScript", "Supabase", "React Query", "Zustand", "Midtrans"],
        results:
            "Runs our compatibility quiz pilot program, processing paid sessions via Midtrans and serving results dashboards for early adopters.",
        description:
            "Project.XO is an end-to-end personality assessment that pairs quiz results with curated match recommendations. I lead the web experience, integrating authentication, paywalls, and the quiz engine.",
        challenge:
            "We needed a single experience that could host long-form quizzes, paywalled result breakdowns, and a member dashboard—while keeping load times snappy for mobile users joining from marketing campaigns.",
        solution:
            "I structured the App Router with public, auth, and protected segments, prefetched quiz data with React Query, and wired Supabase Auth into NextAuth for session management. API routes wrap Midtrans payments so users can pay, receive receipts, and jump straight into detailed compatibility reports.",
        images: [
            "/projectxo-placeholder.svg",
        ],
        sections: [
            { id: "overview", title: "Project Overview" },
            { id: "challenge", title: "The Challenge" },
            { id: "solution", title: "Our Solution" },
            { id: "technical", title: "Technical Highlights" },
            { id: "future", title: "Future Improvements" },
            { id: "tech-stack", title: "Tech Stack" },
        ],
        technicalHighlights: [
            "Separated layouts for public marketing, onboarding, and authenticated dashboards using the Next.js App Router.",
            "React Query hydrates quiz questions and compatibility results on the server to avoid loading states between steps.",
            "Custom Midtrans integration via API routes delivers Snap tokens, verifies notifications, and persists transaction status.",
        ],
        futureImprovements: [
            "Add real-time match rooms so members can immediately connect with compatible profiles.",
            "Layer in AI-generated insight summaries for each personality pairing.",
            "Localize the experience into English and Bahasa Indonesia with dynamic routing.",
        ],
        techStack: {
            frontend: "Next.js 15 App Router, TypeScript, Tailwind",
            stateManagement: "React Query for data fetching, Zustand for client session state",
            authentication: "Supabase Auth + NextAuth session bridge",
            payments: "Midtrans Snap API via server-side routes",
        },
        link: "https://github.com/PhiPhiPham/ProjectXO-Frontend",
    },
    3: {
        title: "Findect",
        client: "Apple Academy 4th Project",
        year: 2025,
        duration: "1 month",
        tags: ["Node.js", "Express", "TypeScript", "Prisma", "FastAPI", "Python", "PostgreSQL", "Pinecone", "OpenAI GPT-4o-mini", "Swift", "SwiftUI", "JWT"],
        description:
            "Findect is a matchmaking app for professional networking events. Unlike random pairing tools, it uses semantic search and LLM reasoning to recommend the top three most compatible attendees for each participant — complete with natural-language explanations of why those matches make sense.",
        challenge:
            "We spoke to many digital nomads and community companies in Bali to understand their needs and pain points. We stumbled upon Tyrone Williams who was a CEO and had the ability to match people who had problems and he would pair them up with people who could solve those problems. That was his whole business model. We also interviewed other companies who did the same thing, so we thought, \"why don't we leverage this with technology and tap into this market?\" Let's do it!",
        solution:
            "We built Findect, an iOS app that intelligently matches attendees based on their goals, professions, and interests. Our architecture combines a Node.js REST API for event and attendee management with a Python FastAPI service for AI-powered reasoning and vector search.",
        systemArchitecture: "/findect-be.png",
        myRole: "I served as the AI & backend systems engineer, responsible for the entire FastAPI and semantic search layer.",
        keyContributions: [
            "Designed and implemented the Retrieval-Augmented Generation (RAG) pipeline for attendee recommendations",
            "Integrated Pinecone for dense vector storage and similarity retrieval",
            "Developed the semantic chunking logic that transforms attendee data (profession, goals, responses) into meaningful embeddings",
            "Built and deployed the FastAPI microservice to handle AI endpoints and communicate securely with the Node.js backend",
            "Optimized the LLM reasoning prompts to produce coherent, human-sounding explanations for each match",
            "Collaborated with the Node.js backend engineer to integrate the AI recommendation flow into the main API",
            "Contributed to the iOS frontend integration for displaying AI-generated recommendations"
        ],
        aiPipeline: [
            {
                step: "Attendee data ingestion",
                description: "The Node.js backend sends structured attendee data to the FastAPI service via secure API calls."
            },
            {
                step: "Semantic embedding",
                description: "FastAPI preprocesses and embeds attendee text fields, storing them in Pinecone."
            },
            {
                step: "Candidate retrieval",
                description: "For each user, Pinecone retrieves the top-10 similar attendees in the same event namespace."
            },
            {
                step: "Reranking and reasoning",
                description: "The FastAPI service uses GPT-4o-mini to rerank and generate context-aware reasoning for the top-3 matches."
            },
            {
                step: "Response delivery",
                description: "Node.js receives the final list with reasoning and forwards it to the iOS frontend."
            }
        ],
        technicalHighlights: [
            "Node.js + Express API: User authentication, CRUD operations, event management",
            "Prisma ORM: Type-safe PostgreSQL access and migrations",
            "FastAPI (Python): AI processing and RAG orchestration",
            "Pinecone Vector DB: Semantic similarity search for embeddings",
            "OpenAI GPT-4o-mini: Natural-language reasoning for recommendations",
            "JWT Authentication: Secure communication between clients and backend services",
            "Hosting: Node.js API hosted on VPS, PostgreSQL hosted on Supabase, FastAPI hosted on VPS, Pinecone for vector search"
        ],
        challengesLearnings: "One challenge was ensuring that LLM-based reasoning matched real human intuition rather than superficial textual similarity. To solve this:\n\n• Engineered prompt templates that contextualized professional and personal alignment\n• Tuned retrieval hyperparameters for better diversity among top candidates\n• Added double filtering to prevent self-matches and redundant recommendations\n\nThis project gave me deep experience in multi-service orchestration, semantic retrieval, and LLM-powered backend design.",
        futureImprovements: [
            "Add automated testing for both Node.js and FastAPI services",
            "Implement GitHub Actions for CI/CD and coverage tracking",
            "Introduce reranking models (e.g., cross-encoder or fine-tuned BERT) for higher precision",
            "Deploy load balancing between AI endpoints for production scaling"
        ],
        techStack: {
            backend: "Node.js, Express, TypeScript, Prisma, FastAPI, Python",
            databases: "PostgreSQL (Supabase), Pinecone (Vector DB)",
            ai: "OpenAI GPT-4o-mini",
            frontend: "iOS (Swift)",
            authentication: "JWT",
            hosting: "VPS (APIs), Supabase (SQL), Pinecone (Semantic Search)"
        },
        team: [
            "FASTAPI backend and AI/Vector logic (me)",
            "Node.js backend (API + SQL)",
            "iOS frontend"
        ],
        designers: [
            "UI",
            "UX",
            "Visual identity"
        ],
        results:
            "We showcased our work during an exhibition and got to use our app live at the event itself. People were able to be referred to other people at the event and formed new connections.",
        images: [
            "/findect1.png",
            "/findect2.png",
            "/findect5.png",
            "/findect6.png",
            "/findect7.JPG",
            "/findect8.JPG",
            "/findect9.JPG",
        ],
        sections: [
            { id: "overview", title: "Project Overview" },
            { id: "challenge", title: "The Challenge" },
            { id: "solution", title: "Our Solution" },
            { id: "architecture", title: "System Architecture" },
            { id: "role", title: "My Role" },
            { id: "pipeline", title: "AI Matching Pipeline" },
            { id: "technical", title: "Technical Highlights" },
            { id: "learnings", title: "Challenges & Learnings" },
            { id: "future", title: "Future Improvements" },
            { id: "tech-stack", title: "Tech Stack" },
            { id: "team", title: "Team" },
        ],
        link: "https://github.com/PhiPhiPham/CH4-RAG-BE",
    },
    4: {
        title: "3D BeReal (TreeHacks)",
        client: "TreeHacks 2024 Hackathon",
        year: 2024,
        duration: "48 hours",
        tags: ["Swift", "UIKit", "AVFoundation", "Firebase"],
        description:
            "A hackathon prototype that reimagines BeReal in 3D—capturing synchronized front and back video snippets and publishing them to a shared Firebase feed.",
        challenge:
            "Our team wanted to capture quick 3D moments with both cameras while keeping the recording experience smooth and automated for non-technical users.",
        solution:
            "I built a custom AVCaptureSession workflow with a countdown, auto-start recording, and automatic stop/upload after three seconds. The app toggles between front and rear lenses, streams a live preview, and ships clips to Firebase Storage with Firestore metadata so other teammates can replay the moment.",
        results:
            "We demoed the working prototype to TreeHacks judges—showing front/back video capture, uploads, and feed retrieval in under 48 hours.",
        images: [
            "/treehacks-placeholder.svg",
        ],
        sections: [
            { id: "overview", title: "Project Overview" },
            { id: "challenge", title: "The Challenge" },
            { id: "solution", title: "Our Solution" },
            { id: "technical", title: "Technical Highlights" },
            { id: "future", title: "Future Improvements" },
            { id: "tech-stack", title: "Tech Stack" },
        ],
        technicalHighlights: [
            "AVCaptureMovieFileOutput orchestrates synchronized three-second clips with a visible countdown overlay.",
            "Automatic camera switching gives users a choice of front or rear capture without rebuilding the session.",
            "Firebase Storage + Firestore integration handles media uploads, timestamps, and collaborative playback.",
        ],
        futureImprovements: [
            "Add depth capture and environment meshes to enhance the 3D effect.",
            "Build a social timeline that streams friends’ clips in real time.",
            "Experiment with ARKit compositing for interactive overlays.",
        ],
        techStack: {
            mobile: "UIKit-based iOS app with Interface Builder outlets",
            media: "AVFoundation capture pipelines with countdown UX",
            cloud: "Firebase Storage for video assets, Firestore for metadata",
        },
        link: "https://github.com/PhiPhiPham/TreeHacks24",
    },
    5: {
        title: "Spatial Audio Weapons Lab",
        client: "Personal prototype",
        year: 2024,
        duration: "6 weeks",
        tags: ["SwiftUI", "AVFoundation", "MultipeerConnectivity", "CoreBluetooth", "CoreMotion"],
        description:
            "An experimental SwiftUI experience that simulates co-located laser tag using spatial audio, iBeacons, and haptics.",
        challenge:
            "I wanted to explore what a multiplayer audio-first game could feel like—players moving in the same room while sound, motion, and haptics react instantly to their positions.",
        solution:
            "The app orchestrates an AVAudioEngine for 3D weapon sounds, pairs devices through MultipeerConnectivity, and advertises proximity with CoreBluetooth iBeacons. Haptics and motion gestures reload weapons, while SwiftUI visualizations help players understand spatial positions.",
        results:
            "Used in several internal demos to explore multiplayer spatial audio design patterns and showcase an experimental UX.",
        images: [
            "/spatial-audio-placeholder.svg",
        ],
        sections: [
            { id: "overview", title: "Project Overview" },
            { id: "challenge", title: "The Challenge" },
            { id: "solution", title: "Our Solution" },
            { id: "technical", title: "Technical Highlights" },
            { id: "future", title: "Future Improvements" },
            { id: "tech-stack", title: "Tech Stack" },
        ],
        technicalHighlights: [
            "Custom AVAudioEngine wrapper positions weapon sounds in 3D space and supports hot-swapping presets.",
            "MultipeerConnectivity + CoreBluetooth beacons synchronize player state and broadcast identities in shared rooms.",
            "MotionReloadManager and HapticManager translate device movement into reload gestures and tactile feedback.",
        ],
        futureImprovements: [
            "Integrate RealityKit visuals for mixed reality weapon previews.",
            "Bring in real-world room impulse responses for more believable spatial acoustics.",
            "Package the experience as a teaching demo for WWDC student sessions.",
        ],
        techStack: {
            frontend: "SwiftUI with custom carousel and HUD components",
            audio: "AVAudioEngine, spatial audio routing, volume monitoring",
            connectivity: "MultipeerConnectivity, CoreBluetooth iBeacons, CoreMotion reload gestures",
        },
        link: "https://github.com/PhiPhiPham/Spatial-Audio-Weapons-App",
    },
    6: {
        title: "Studdies iOS Companion",
        client: "Personal project",
        year: 2024,
        duration: "10 weeks",
        tags: ["SwiftUI", "Combine", "Supabase Auth", "Keychain", "REST"],
        description:
            "The SwiftUI companion for Studdies that delivers the social study feed, session tracking, and friend management on iPhone.",
        challenge:
            "I needed a polished mobile experience that could talk to an evolving backend, survive flaky APIs, and make it easy for students to log sessions on the go.",
        solution:
            "I built a Combine-based networking layer with automatic decoding fallbacks, wrapped auth tokens in a shared Keychain helper, and designed SwiftUI views for feed, timer, and profile flows. A diagnostics panel lets us test connection, login, and feed endpoints directly from the app.",
        results:
            "Currently powering the private beta for my accountability group—used daily to log study sessions and track streaks.",
        images: [
            "/studdies-ios-placeholder.svg",
        ],
        sections: [
            { id: "overview", title: "Project Overview" },
            { id: "challenge", title: "The Challenge" },
            { id: "solution", title: "Our Solution" },
            { id: "technical", title: "Technical Highlights" },
            { id: "future", title: "Future Improvements" },
            { id: "tech-stack", title: "Tech Stack" },
        ],
        technicalHighlights: [
            "Combine-powered APIService gracefully handles multiple backend response shapes and centralizes auth headers.",
            "ConnectionTestService provides in-app health checks, raw network tests, and login diagnostics for QA.",
            "TimerService plus motion-driven UI components offer a delightful way to run timed study sessions with progress rings.",
        ],
        futureImprovements: [
            "Persist feed data offline with Core Data and background refresh.",
            "Enable push notifications for friend requests and streak milestones.",
            "Expand the timer into multi-phase study/break presets.",
        ],
        techStack: {
            frontend: "SwiftUI, custom components, gradient styling",
            networking: "Combine, URLSession, resilient decoding helpers",
            storage: "Keychain for tokens, async image caching utilities",
        },
        link: "https://github.com/PhiPhiPham/Studdies-FE",
    },
}

export default function PortfolioDetail() {
    const params = useParams()
    const projectId = params.id as string
    const project = projectDetails[Number(projectId) as keyof typeof projectDetails]

    const [currentImageIndex, setCurrentImageIndex] = useState(0)
    const [activeSection, setActiveSection] = useState("overview")

    useEffect(() => {
        const handleScroll = () => {
            if (!project) return

            const sections = project.sections.map((section) => ({
                id: section.id,
                element: document.getElementById(section.id),
            }))

            const scrollPosition = window.scrollY + 200

            for (const section of sections) {
                if (section.element) {
                    const { offsetTop, offsetHeight } = section.element
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(section.id)
                        break
                    }
                }
            }
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [project])

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId)
        if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" })
        }
    }

    const nextImage = () => {
        if (project) {
            setCurrentImageIndex((prev) => (prev + 1) % project.images.length)
        }
    }

    const prevImage = () => {
        if (project) {
            setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length)
        }
    }

    if (!project) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-bold mb-4">Project Not Found</h1>
                    <Link href="/">
                        <Button>
                            <ArrowLeft className="w-4 h-4 mr-2" />
                            Back to Portfolio
                        </Button>
                    </Link>
                </div>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-background">
            {/* Header */}
            <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b">
                <div className="container mx-auto px-4 py-4">
                    <div className="flex items-center justify-between">
                        <Link href="/">
                            <Button variant="ghost" size="sm">
                                <ArrowLeft className="w-4 h-4 mr-2" />
                                Back to Portfolio
                            </Button>
                        </Link>
                        <div className="flex items-center gap-4">
                            <Badge variant="secondary">{project.year}</Badge>
                            {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                            {(project as any).link && (
                                <Button size="sm" variant="outline" asChild>
                                    {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                                    <a href={(project as any).link} target="_blank" rel="noopener noreferrer">
                                        <ExternalLink className="w-4 h-4 mr-2" />
                                        Live Demo
                                    </a>
                                </Button>
                            )}
                        </div>
                    </div>
                </div>
            </header>

            <div className="container mx-auto px-4 py-8">
                <div className="grid lg:grid-cols-4 gap-8">
                    {/* Sticky Sidebar */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-24 space-y-6">
                            <Card>
                                <CardContent className="p-6">
                                    <h3 className="font-semibold mb-4">Project Info</h3>
                                    <div className="space-y-3 text-sm">
                                        <div className="flex items-center gap-2">
                                            <User className="w-4 h-4 text-muted-foreground" />
                                            <span className="text-muted-foreground">Client:</span>
                                            <span className="font-medium">{project.client}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Calendar className="w-4 h-4 text-muted-foreground" />
                                            <span className="text-muted-foreground">Duration:</span>
                                            <span className="font-medium">{project.duration}</span>
                                        </div>
                                    </div>
                                    <Separator className="my-4" />
                                    <div className="space-y-2">
                                        <div className="flex items-center gap-2 mb-3">
                                            <Tag className="w-4 h-4 text-muted-foreground" />
                                            <span className="text-sm font-medium">Technologies</span>
                                        </div>
                                        <div className="flex flex-wrap gap-2">
                                            {project.tags.map((tag) => (
                                                <Badge key={tag} variant="secondary" className="text-xs">
                                                    {tag}
                                                </Badge>
                                            ))}
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardContent className="p-6">
                                    <h3 className="font-semibold mb-4">Table of Contents</h3>
                                    <nav className="space-y-2">
                                        {project.sections.map((section) => (
                                            <button
                                                key={section.id}
                                                onClick={() => scrollToSection(section.id)}
                                                className={`block w-full text-left text-sm py-2 px-3 rounded-md transition-colors ${activeSection === section.id
                                                    ? "bg-primary text-primary-foreground"
                                                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                                                    }`}
                                            >
                                                {section.title}
                                            </button>
                                        ))}
                                    </nav>
                                </CardContent>
                            </Card>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="lg:col-span-3 space-y-12">
                        {/* Project Overview */}
                        <section id="overview" className="scroll-mt-24">
                            <div className="space-y-6">
                                <div>
                                    <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
                                    <p className="text-xl text-muted-foreground leading-relaxed">{project.description}</p>
                                </div>

                                {/* Image Carousel */}
                                <div className="relative">
                                    <div className="relative aspect-video rounded-lg overflow-hidden mb-4">
                                        <Image
                                            src={project.images[currentImageIndex] || "/placeholder.svg"}
                                            alt={`${project.title} - Image ${currentImageIndex + 1}`}
                                            fill
                                            className="object-cover"
                                        />
                                        <div className="absolute inset-0 flex items-center justify-between p-4">
                                            <Button
                                                variant="secondary"
                                                size="icon"
                                                onClick={prevImage}
                                                className="bg-background/80 backdrop-blur-sm"
                                            >
                                                <ChevronLeft className="w-4 h-4" />
                                            </Button>
                                            <Button
                                                variant="secondary"
                                                size="icon"
                                                onClick={nextImage}
                                                className="bg-background/80 backdrop-blur-sm"
                                            >
                                                <ChevronRight className="w-4 h-4" />
                                            </Button>
                                        </div>
                                    </div>

                                    {/* Thumbnail Navigation */}
                                    <div className="flex gap-2 overflow-x-auto pb-2">
                                        {project.images.map((image, index) => (
                                            <button
                                                key={index}
                                                onClick={() => setCurrentImageIndex(index)}
                                                className={`relative flex-shrink-0 w-20 h-20 rounded-md overflow-hidden border-2 transition-colors ${currentImageIndex === index ? "border-primary" : "border-transparent"
                                                    }`}
                                            >
                                                <Image
                                                    src={image || "/placeholder.svg"}
                                                    alt={`Thumbnail ${index + 1}`}
                                                    fill
                                                    className="object-cover"
                                                />
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Challenge */}
                        <section id="challenge" className="scroll-mt-24">
                            <h2 className="text-3xl font-bold mb-6">The Challenge</h2>
                            <div className="prose prose-lg max-w-none">
                                <p className="text-muted-foreground leading-relaxed">{project.challenge}</p>
                            </div>
                        </section>

                        {/* Solution */}
                        <section id="solution" className="scroll-mt-24">
                            <h2 className="text-3xl font-bold mb-6">Our Solution</h2>
                            <div className="prose prose-lg max-w-none">
                                <p className="text-muted-foreground leading-relaxed">{project.solution}</p>
                            </div>
                        </section>

                        {/* System Architecture */}
                        {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                        {(project as any).systemArchitecture && (
                            <section id="architecture" className="scroll-mt-24">
                                <h2 className="text-3xl font-bold mb-6">System Architecture</h2>
                                <div className="relative w-full rounded-lg overflow-hidden bg-muted/50 p-4">
                                    {/* eslint-disable @typescript-eslint/no-explicit-any */}
                                    <Image
                                        src={(project as any).systemArchitecture}
                                        alt="System Architecture Diagram"
                                        width={1200}
                                        height={800}
                                        className="w-full h-auto object-contain"
                                    />
                                    {/* eslint-enable @typescript-eslint/no-explicit-any */}
                                </div>
                            </section>
                        )}

                        {/* My Role */}
                        {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                        {(project as any).myRole && (
                            <section id="role" className="scroll-mt-24">
                                <h2 className="text-3xl font-bold mb-6">My Role</h2>
                                <div className="prose prose-lg max-w-none">
                                    {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                                    <p className="text-muted-foreground leading-relaxed mb-6">{(project as any).myRole}</p>
                                    {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                                    {(project as any).keyContributions && (
                                        <div className="space-y-3">
                                            <h3 className="text-xl font-semibold mb-4">Key Contributions</h3>
                                            <ul className="space-y-2">
                                                {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                                                {(project as any).keyContributions.map((contribution: string, index: number) => (
                                                    <li key={index} className="flex items-start gap-3">
                                                        <span className="text-primary mt-1">•</span>
                                                        <span className="text-muted-foreground leading-relaxed">{contribution}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </div>
                            </section>
                        )}

                        {/* AI Matching Pipeline */}
                        {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                        {(project as any).aiPipeline && (
                            <section id="pipeline" className="scroll-mt-24">
                                <h2 className="text-3xl font-bold mb-6">AI Matching Pipeline</h2>
                                <div className="space-y-4">
                                    {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                                    {(project as any).aiPipeline.map((step: any, index: number) => (
                                        <Card key={index}>
                                            <CardContent className="p-6">
                                                <div className="flex gap-4">
                                                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                                                        {index + 1}
                                                    </div>
                                                    <div>
                                                        <h3 className="font-semibold mb-2">{step.step}</h3>
                                                        <p className="text-sm text-muted-foreground">{step.description}</p>
                                                    </div>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    ))}
                                </div>
                            </section>
                        )}

                        {/* Technical Highlights */}
                        {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                        {(project as any).technicalHighlights && (
                            <section id="technical" className="scroll-mt-24">
                                <h2 className="text-3xl font-bold mb-6">Technical Highlights</h2>
                                <ul className="space-y-3">
                                    {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                                    {(project as any).technicalHighlights.map((highlight: string, index: number) => (
                                        <li key={index} className="flex items-start gap-3">
                                            <span className="text-primary mt-1">•</span>
                                            <span className="text-muted-foreground leading-relaxed">{highlight}</span>
                                        </li>
                                    ))}
                                </ul>
                            </section>
                        )}

                        {/* Challenges & Learnings */}
                        {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                        {(project as any).challengesLearnings && (
                            <section id="learnings" className="scroll-mt-24">
                                <h2 className="text-3xl font-bold mb-6">Challenges & Learnings</h2>
                                <div className="prose prose-lg max-w-none">
                                    {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                                    <p className="text-muted-foreground leading-relaxed whitespace-pre-line">{(project as any).challengesLearnings}</p>
                                </div>
                            </section>
                        )}

                        {/* Future Improvements */}
                        {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                        {(project as any).futureImprovements && (
                            <section id="future" className="scroll-mt-24">
                                <h2 className="text-3xl font-bold mb-6">Future Improvements</h2>
                                <ul className="space-y-3">
                                    {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                                    {(project as any).futureImprovements.map((improvement: string, index: number) => (
                                        <li key={index} className="flex items-start gap-3">
                                            <span className="text-primary mt-1">•</span>
                                            <span className="text-muted-foreground leading-relaxed">{improvement}</span>
                                        </li>
                                    ))}
                                </ul>
                            </section>
                        )}

                        {/* Tech Stack */}
                        {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                        {(project as any).techStack && (
                            <section id="tech-stack" className="scroll-mt-24">
                                <h2 className="text-3xl font-bold mb-6">Tech Stack</h2>
                                <div className="grid gap-4 md:grid-cols-2">
                                    {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                                    {Object.entries((project as any).techStack).map(([key, value]) => (
                                        <Card key={key}>
                                            <CardContent className="p-6">
                                                <h3 className="font-semibold mb-2 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</h3>
                                                <p className="text-sm text-muted-foreground">{value as string}</p>
                                            </CardContent>
                                        </Card>
                                    ))}
                                </div>
                            </section>
                        )}

                        {/* Team */}
                        {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                        {(project as any).team && (
                            <section id="team" className="scroll-mt-24">
                                <h2 className="text-3xl font-bold mb-6">Team</h2>
                                <div className="space-y-3">
                                    <p className="text-muted-foreground mb-4">3 Developers:</p>
                                    <ul className="space-y-2 ml-4">
                                        {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                                        {(project as any).team.map((member: string, index: number) => (
                                            <li key={index} className="flex items-start gap-3">
                                                <span className="text-primary mt-1">•</span>
                                                <span className="text-muted-foreground leading-relaxed">{member}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                                    {(project as any).designers && (
                                        <>
                                            <p className="text-muted-foreground mb-4 mt-6">All 3 designers are responsible for:</p>
                                            <ul className="space-y-2 ml-4">
                                                {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                                                {(project as any).designers.map((designer: string, index: number) => (
                                                    <li key={index} className="flex items-start gap-3">
                                                        <span className="text-primary mt-1">•</span>
                                                        <span className="text-muted-foreground leading-relaxed">{designer}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </>
                                    )}
                                </div>
                            </section>
                        )}

                    </div>
                </div>
            </div>
        </div>
    )
}
