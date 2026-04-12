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
            "Built a face-authentication attendance system, designing backend services to process facial embeddings from mobile clients, securely store encrypted descriptors in MongoDB, and perform real-time identity verification.",

            "Designed and implemented a high-frequency location tracking service, ingesting GPS data every 5 seconds, persisting route histories, and computing travel distance using geospatial APIs, enabling accurate and efficient movement tracking for ~100 active riders.",

            "Improved reliability of a legacy backend system by refactoring core modules, resolving production issues, and introducing unit and integration tests—reducing regressions and significantly improving maintainability."
        ]
    },
];
