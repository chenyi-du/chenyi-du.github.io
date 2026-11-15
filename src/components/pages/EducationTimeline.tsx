'use client';

import educationData from '../../../content/data/education.json';

const schools = educationData;

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
