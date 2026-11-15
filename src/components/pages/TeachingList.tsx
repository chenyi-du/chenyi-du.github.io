'use client';

import teaching from '../../../content/data/teaching.json';

export default function TeachingList() {
  return (
    <section className="max-w-3xl mx-auto">
      <h1 className="text-4xl font-serif font-bold text-primary mb-6">Teaching</h1>
      <div className="divide-y divide-neutral-200 dark:divide-neutral-800">
        {teaching.map((item, index) => (
          <article key={index} className="py-4 first:pt-0">
            <div className="font-medium text-primary leading-relaxed">
              {item.course}, <span className="font-normal">{item.institution}</span>
            </div>
            <div className="text-sm text-neutral-600 dark:text-neutral-400 mt-1">
              {item.role}, {item.term}, with {item.with}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
