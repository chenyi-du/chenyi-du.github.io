'use client';

const schools = [
  {
    period: '2023.11 – Present',
    institution: 'Australian National University',
    location: 'Canberra, Australia',
    degree: 'PhD, Fenner School of Environment & Society',
    project: 'City Linkages and Supply System Resilience Under Climate Disasters',
    supervisors: 'Prof. Xuemei Bai, A/Prof. Steven Lade, and Dr. Tim Baynes',
  },
  {
    period: '2019.09 – 2021.07',
    institution: 'Beijing Institute of Technology',
    location: 'Beijing, China',
    degree: 'MPhil, Climate Economics and Sustainable Development',
    project: 'Micro-level Mechanisms and Protective Effects of Individual Defensive Behaviours in Response to Environmental Pollution',
  },
  {
    period: '2015.09 – 2019.06',
    institution: 'China University of Petroleum (Beijing)',
    location: 'Beijing, China',
    degree: 'BSc, Energy Economics',
    project: 'The Energy Rebound Effect of New Energy Vehicles: Evidence from Beijing Residents',
  },
];

export default function EducationTimeline() {
  return (
    <section className="max-w-3xl mx-auto">
      <h1 className="text-4xl font-serif font-bold text-primary mb-6">Education</h1>
      <div className="divide-y divide-neutral-200 dark:divide-neutral-800">
        {schools.map((school) => (
          <article className="py-5 first:pt-0" key={school.institution}>
            <p className="text-sm font-medium text-neutral-500 dark:text-neutral-400 mb-1">{school.period}</p>
            <h2 className="text-lg sm:text-xl font-semibold text-primary leading-snug">{school.institution}</h2>
            <p className="text-sm text-neutral-500 mb-1">{school.location}</p>
            <p className="text-neutral-800 dark:text-neutral-200 font-medium mb-1">{school.degree}</p>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
              Research: {school.project}
            </p>
            {school.supervisors && (
              <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-1">
                Supervisors: {school.supervisors}
              </p>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
