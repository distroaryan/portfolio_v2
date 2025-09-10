import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const experiences = [
  {
    title: 'Full Stack Developer',
    company: 'Plypicker',
    period: 'October 2023 - May 2024',
    description: 'Designed a face-recognition attendance system with 90% accuracy using WebcamJS and FaceAPIJS. Implemented geolocation tracking with Google Maps API and built a React dashboard with live tracking using LeafletJS.',
    skills: ['React', 'JavaScript', 'WebcamJS', 'FaceAPIJS', 'Google Maps API', 'LeafletJS'],
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="space-y-8">
          <h2 className="relative inline-block after:content-[''] after:block after:border-b-2 after:border-white after:mt-1 after:w-full after:relative after:top-1 after:shadow-[0_4px_0_0_#fff] text-3xl sm:text-4xl font-bold">Experience</h2>
          
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-border">
                <CardHeader className="pb-4">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                    <div className="space-y-1">
                      <CardTitle className="text-xl font-semibold">{exp.title}</CardTitle>
                      <CardDescription className="text-lg font-medium text-primary">
                        {exp.company}
                      </CardDescription>
                    </div>
                    <Badge variant="secondary" className="w-fit text-sm px-3 py-1">
                      {exp.period}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4 pt-0">
                  <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="outline" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}