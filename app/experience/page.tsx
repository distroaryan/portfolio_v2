export default function Page() {
  const experiences = [
    {
      company: "PLYPICKER",
      role: "Full Stack Intern",
      date: "October 2023 - May 2024",
      tags: ["Node.js", "Express", "MongoDB", "TailwindCSS"],
      bullets: [
        "Engineered the backend for a face-authentication attendance system by receiving facial embeddings from the mobile app, storing encrypted face descriptors in MongoDB, and implementing login-time verification using TensorFlow.js and face-api.js.",
        "Built a location tracking service that ingested GPS coordinates every 5 seconds, persisted route data, and computed travel distance using the Google Geolocation API and geolib, ensuring accurate movement tracking and efficient geospatial calculations.",
        "Improved reliability of a legacy codebase by refactoring backend modules, resolving production bugs, and strengthened system stability by adding unit and integration tests, reducing regressions and improving maintainability."
      ]
    }
  ];

  return (
    <main className="min-h-screen text-white pb-24">
      <div className="relative max-w-[780px] mx-auto px-6 pt-36">
        <section>
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-bold font-mono text-yellow-400/90 tracking-wide">
              Experience
            </h1>
          </div>

          <div className="flex flex-col gap-6">
            {experiences.map((exp, idx) => (
              <div key={idx} className="group p-6 rounded-xl border border-white/[0.08] bg-white/[0.025] hover:border-yellow-500/50 hover:bg-white/[0.04] transition-all duration-300 hover:shadow-lg hover:shadow-yellow-900/20">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                  <div>
                    <h2 className="text-xl font-bold text-gray-100 group-hover:text-yellow-400 transition-colors" style={{ fontFamily: "var(--font-heading), serif" }}>
                      {exp.company}
                    </h2>
                    <p className="text-[15px] text-gray-400 font-mono mt-1">
                      {exp.role}
                    </p>
                  </div>
                  <div className="text-[13px] text-yellow-500/80 font-mono sm:text-right border border-yellow-500/20 bg-yellow-500/5 px-2.5 py-1 rounded w-max">
                    {exp.date}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-5">
                  {exp.tags.map(tag => (
                    <span key={tag} className="text-[11px] border border-yellow-500/30 bg-yellow-500/10 rounded-full px-2.5 py-0.5 text-yellow-400 font-mono">
                      {tag}
                    </span>
                  ))}
                </div>

                <ul className="list-disc leading-relaxed text-[15px] text-gray-300 ml-4 space-y-2 marker:text-yellow-500/50">
                  {exp.bullets.map((bullet, i) => (
                    <li key={i} className="pl-1">
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}