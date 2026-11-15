'use client';

import { useMemo, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

type Project = {
  title: string;
  years: string;
  tags: string[];
  description: string;
  outputs?: { label: string; url: string }[];
};

const projects: Project[] = [
  {
    title: 'City Linkages and Supply System Resilience Under Climate Disasters',
    years: '2023–present',
    tags: ['Disaster resilience', 'Urban networks', 'Computational social science'],
    description: 'Examined how intercity aid and supply networks shape disaster recovery and supply-system resilience. Constructed global city-level datasets on aid, networks and recovery, combining large language models, network analysis, causal inference, machine learning and satellite observations.',
  },
  {
    title: 'Global Food Pesticide Residue Meta-analysis',
    years: '2023',
    tags: ['Environmental health', 'Sustainability'],
    description: 'Synthesised pesticide-residue research, standardised contamination measures across crops and regions, and assembled a structured dataset for comparative quantitative analysis.',
  },
  {
    title: 'Decoding China’s Industrial Policies with Large Language Models',
    years: '2022–2023',
    tags: ['Development economics', 'Computational social science'],
    description: 'Processed and analysed approximately three million industrial policy documents to examine policy instruments and outcomes. Developed large language model extraction workflows and integrated firm-level information.',
  },
  {
    title: 'Understanding Physicians’ Dynamic Responses to Malpractice Lawsuits',
    years: '2021–2022',
    tags: ['Individual behaviour', 'Health'],
    description: 'Analysed linked health-insurance claims to investigate how physicians alter their behaviour after malpractice lawsuits. Developed longitudinal indicators and econometric panel analyses.',
  },
  {
    title: 'Rural–Urban Migration and Market Integration',
    years: '2021',
    tags: ['Development economics', 'Urban networks'],
    description: 'Studied how migration barriers affect trade, investment and rural–urban market integration using migration microdata and spatial equilibrium modelling.',
  },
  {
    title: 'Micro-level Mechanisms and Protective Effects of Individual Defensive Behaviours in Response to Environmental Pollution',
    years: '2019–2021',
    tags: ['Individual behaviour', 'Air pollution & health'],
    description: 'Investigated differences in household protective responses to environmental risks and their determinants, with particular attention to air pollution, individual health and the unequal ability to adapt.',
    outputs: [{ label: 'Published paper', url: 'https://doi.org/10.1016/j.envint.2024.108858' }],
  },
  {
    title: 'Enterprise Green Development Model: Insights from Typical Enterprises',
    years: '2019–2020',
    tags: ['Climate transition', 'Sustainability'],
    description: 'Compared mitigation practices and technologies across businesses, assessing their implications for energy use, emissions and corporate sustainability.',
  },
  {
    title: 'China’s Technology Lists for Addressing Climate Change',
    years: '2019–2020',
    tags: ['Climate transition', 'Sustainability'],
    description: 'Assessed the mitigation potential, technology maturity and deployment of climate-related technologies in industrial, urban and building sectors and contributed to technical sector reports.',
  },
  {
    title: 'Agricultural Adaptation to Climate Change: An Empirical Study in North China',
    years: '2018–2020',
    tags: ['Individual behaviour', 'Climate transition'],
    description: 'Examined variation in farmers’ climate-adaptation choices and drivers, analysing the adoption of multiple farm-level behavioural practices.',
  },
  {
    title: 'Energy Rebound Effect of Electric Vehicles in Beijing',
    years: '2018–2019',
    tags: ['Climate transition', 'Individual behaviour'],
    description: 'Used household travel behaviour data to assess whether electric-vehicle adoption changes driving patterns and creates an energy rebound effect.',
    outputs: [{ label: 'Published paper', url: 'https://doi.org/10.1016/j.spc.2023.02.005' }],
  },
  {
    title: 'Vulnerability Analysis of Countries to Climate Change',
    years: '2018',
    tags: ['Disaster resilience', 'Sustainability'],
    description: 'Conducted a comparative assessment of countries’ vulnerability to climate change.',
  },
  {
    title: 'Determinants of Market Valuation in Publicly Listed Oil and Gas Firms: Evidence from the United States',
    years: '2018',
    tags: ['Development economics', 'Climate transition'],
    description: 'Investigated the determinants of valuation among publicly listed oil and gas firms in the United States.',
  },
  {
    title: 'Implementation of Coal-Free Zone Policies and Household Energy Transition in Northern China',
    years: '2017–2018',
    tags: ['Climate transition', 'Individual behaviour'],
    description: 'Explored coal-replacement policies and household energy transitions in northern China.',
  },
  {
    title: 'Evaluating the Timing for Phasing Out Residential Electric Vehicle Subsidies',
    years: '2016–2017',
    tags: ['Climate transition', 'Development economics'],
    description: 'Examined the timing of residential electric-vehicle subsidy phase-outs as an energy and transport policy question.',
  },
];

const tags = ['All', ...Array.from(new Set(projects.flatMap((p) => p.tags)))];

const tagStyles: Record<string, string> = {
  'All': 'bg-slate-100 text-slate-700 border-slate-200 dark:bg-slate-800 dark:text-slate-200 dark:border-slate-700',
  'Disaster resilience': 'bg-red-50 text-red-700 border-red-200 dark:bg-red-950/40 dark:text-red-300 dark:border-red-900',
  'Urban networks': 'bg-purple-50 text-purple-700 border-purple-200 dark:bg-purple-950/40 dark:text-purple-300 dark:border-purple-900',
  'Computational social science': 'bg-indigo-50 text-indigo-700 border-indigo-200 dark:bg-indigo-950/40 dark:text-indigo-300 dark:border-indigo-900',
  'Environmental health': 'bg-rose-50 text-rose-700 border-rose-200 dark:bg-rose-950/40 dark:text-rose-300 dark:border-rose-900',
  'Air pollution & health': 'bg-teal-50 text-teal-700 border-teal-200 dark:bg-teal-950/40 dark:text-teal-300 dark:border-teal-900',
  'Sustainability': 'bg-green-50 text-green-700 border-green-200 dark:bg-green-950/40 dark:text-green-300 dark:border-green-900',
  'Development economics': 'bg-amber-50 text-amber-800 border-amber-200 dark:bg-amber-950/40 dark:text-amber-300 dark:border-amber-900',
  'Individual behaviour': 'bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-950/40 dark:text-blue-300 dark:border-blue-900',
  'Health': 'bg-pink-50 text-pink-700 border-pink-200 dark:bg-pink-950/40 dark:text-pink-300 dark:border-pink-900',
  'Climate transition': 'bg-orange-50 text-orange-700 border-orange-200 dark:bg-orange-950/40 dark:text-orange-300 dark:border-orange-900',
};
const tagStyle = (tag: string) => tagStyles[tag] ?? tagStyles.All;


export default function ResearchProjects() {
  const [selected, setSelected] = useState('All');
  const visible = useMemo(
    () => selected === 'All' ? projects : projects.filter((project) => project.tags.includes(selected)),
    [selected]
  );

  return (
    <section className="max-w-3xl mx-auto">
      <h1 className="text-4xl font-serif font-bold text-primary mb-5">Research</h1>
      <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed mb-6">
        Selected research projects spanning climate change, environmental behaviour, development economics, and data-driven social science.
      </p>
      <div className="mb-9" aria-label="Filter research projects by topic">
        <h2 className="font-semibold text-sm text-neutral-600 dark:text-neutral-400 mb-3">Tags</h2>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <button
              type="button"
              key={tag}
              onClick={() => setSelected(tag)}
              aria-pressed={selected === tag}
              className={`rounded-full border px-3 py-1.5 text-sm transition-colors ${tagStyle(tag)} ${selected === tag ? 'ring-2 ring-offset-1 ring-neutral-500 dark:ring-neutral-300 font-semibold' : 'hover:opacity-80'}`}
            >
              {tag}
            </button>
          ))}
        </div>
        <p className="text-xs text-neutral-500 mt-3">{visible.length} {visible.length === 1 ? 'project' : 'projects'}</p>
      </div>
      <div className="divide-y divide-neutral-200 dark:divide-neutral-800">
        {visible.map((project) => (
          <article key={project.title} className="py-7 first:pt-0">
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1.5 mb-3">
              <h2 className="font-serif text-xl font-semibold text-primary leading-snug">{project.title}</h2>
              <span className="text-sm text-neutral-500 shrink-0">{project.years}</span>
            </div>
            <div className="border-t border-neutral-100 dark:border-neutral-800 pt-3 mb-3 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <button type="button" key={tag} onClick={() => setSelected(tag)}
                  className={`text-xs rounded-md border px-2 py-1 transition-opacity hover:opacity-80 ${tagStyle(tag)}`}>
                  {tag}
                </button>
              ))}
            </div>
            <p className="text-neutral-700 dark:text-neutral-400 text-sm sm:text-base leading-relaxed mb-3">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-3 items-center text-sm">
              <span className="font-medium text-neutral-500">Output</span>
              {project.outputs?.length ? project.outputs.map((output) => (
                <a key={output.url} href={output.url} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-accent hover:underline">
                  {output.label}<ArrowUpRight size={14} aria-hidden="true" />
                </a>
              )) : <span className="text-neutral-400">No public link available</span>}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
