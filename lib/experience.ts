export interface Experience {
    company: string;
    role: string;
    date: string
    tags: string[];
    bullets: string[];
}

export const projects: Experience[] = [
    {
        company: "PLYPICKER",
        role: "Full Stack Intern",
        date: "Oct 2023 — May 2024",
        tags: ["Node.js", "Express", "MongoDB", "TailwindCSS", "AWS", "JavaScript"],
        bullets: [
            "Engineered a secure biometric authentication system using Node.js, FaceAPI.js, and OpenCVNodeJS to store facial descriptors, ensuring identity verification during login and sign-up .",

            "Architected a data ingestion pipeline with Apache Kafka to handle GPS coordinates sent from Flutter clients, scaling the architecture to support 10k+ writes per second with minimal data loss.",

            "Developed a dashboard using Next.js, Shadcn UI, and Leaflet.js, integrating a map-based interface to visualize rider paths and historical route data for operational monitoring.",

            "Optimized backend system performance by implementing Redis as a caching layer, which reduced database lookup times by 40%, while proactively resolving critical bugs to improve overall codebase stability."
        ]
    },
];
