import React from "react"

const logos = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React.js",
    "Next.js",
    "Angular",
    "Redux",
    "Node.js",
    "Express.js",
    "MySQL",
    "MongoDB",
    "PostgreSQL",
    "Cypress",
    "Docker",
    "Firebase",
    "AWS",
    "GSAP",
    "FramerMotion",
    "Figma",
    "TailwindCSS",
    "GIT"
]

const TechLogos = () => {
    return (
        <div className="relative flex-col overflow-hidden border-y border-bg-700 py-sm">
            <div className="overflow-hidden">
                <div className="flex w-max gap-4" style={{ transform: "translateX(-562.509px)" }}>
                    {logos.map((tech) => (
                        <div
                            key={tech}
                            className="inline-flex w-fit min-w-fit items-center gap-2 rounded-full border px-4 py-2 text-sm shadow transition-colors focus:outline-hidden focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-bg-800 text-text-primary dark:bg-bg-700"
                        >
                            <div className="relative h-5 w-5">
                                <img
                                    alt={tech}
                                    loading="lazy"
                                    decoding="async"
                                    src={`/tech-logos/${tech}.svg`}
                                    className="object-contain w-full h-full"
                                />
                            </div>
                            {tech}
                        </div>
                    ))}
                </div>
                <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-bg-900" />
                <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-bg-900" />
            </div>
        </div>
    )
}

export default TechLogos
