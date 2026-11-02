import { BlogPosts } from 'app/components/posts'
import { getBlogPosts } from 'app/blog/utils'
import { education, experience, profile, projects, skills } from 'app/resume'
import { SITE_NAME } from 'app/site'

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-6 font-mono text-xs uppercase tracking-[0.18em] text-neutral-600 dark:text-neutral-400">
      {children}
    </h2>
  )
}

const external = (href: string) =>
  href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {}

export default function Page() {
  const hasPosts = getBlogPosts().length > 0

  return (
    <div className="space-y-20">
      <section>
        <h1 className="text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
          {SITE_NAME}
        </h1>
        <p className="mt-4 text-lg text-neutral-800 dark:text-neutral-200">
          {profile.headline}
        </p>
        <p className="text-neutral-600 dark:text-neutral-400">{profile.focus}</p>
        <div className="mt-8 space-y-4 leading-relaxed text-neutral-800 dark:text-neutral-200">
          {profile.summary.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <ul className="mt-8 flex flex-wrap gap-2">
          {profile.links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                {...external(link.href)}
                className="inline-block rounded-full border border-neutral-300 px-4 py-2 text-sm transition-colors hover:border-neutral-900 dark:border-neutral-700 dark:hover:border-neutral-100"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section id="work" className="scroll-mt-8">
        <SectionHeading>Selected work</SectionHeading>
        <ul className="grid gap-4 sm:grid-cols-2">
          {projects.map((project) => (
            <li
              key={project.name}
              className="flex flex-col rounded-xl border border-neutral-200 p-5 sm:first:col-span-2 dark:border-neutral-800"
            >
              <h3 className="font-semibold tracking-tight">{project.name}</h3>
              <p className="mt-0.5 text-sm text-neutral-600 dark:text-neutral-400">
                {project.kind}
              </p>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-neutral-800 dark:text-neutral-200">
                {project.description}
              </p>
              <ul className="mt-4 flex flex-wrap gap-x-3 gap-y-1 font-mono text-xs text-neutral-600 dark:text-neutral-400">
                {project.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
              {project.link ? (
                <a
                  href={project.link.href}
                  {...external(project.link.href)}
                  className="mt-4 text-sm font-medium underline decoration-neutral-400 underline-offset-4 hover:decoration-current"
                >
                  {project.link.label}
                </a>
              ) : null}
            </li>
          ))}
        </ul>
      </section>

      <section id="experience" className="scroll-mt-8">
        <SectionHeading>Experience</SectionHeading>
        <ol className="space-y-10">
          {experience.map((job) => (
            <li key={`${job.company}-${job.period}`}>
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                <h3 className="font-semibold tracking-tight">{job.role}</h3>
                <p className="shrink-0 font-mono text-xs tabular-nums text-neutral-600 dark:text-neutral-400">
                  {job.period}
                </p>
              </div>
              <p className="mt-0.5 text-sm text-neutral-600 dark:text-neutral-400">
                {job.company} · {job.location}
              </p>
              <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-neutral-800 marker:text-neutral-400 dark:text-neutral-200">
                {job.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </section>

      <section id="skills" className="scroll-mt-8">
        <SectionHeading>Skills</SectionHeading>
        <dl className="space-y-5">
          {skills.map((group) => (
            <div key={group.area} className="sm:grid sm:grid-cols-[11rem_1fr] sm:gap-6">
              <dt className="text-sm font-semibold tracking-tight">{group.area}</dt>
              <dd className="mt-1 text-sm leading-relaxed text-neutral-800 sm:mt-0 dark:text-neutral-200">
                {group.items.join(' · ')}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      <section id="education" className="scroll-mt-8">
        <SectionHeading>Education and certifications</SectionHeading>
        <ul className="space-y-4">
          {education.map((item) => (
            <li
              key={item.title}
              className="flex items-baseline justify-between gap-6 text-sm"
            >
              <div>
                <p className="font-semibold tracking-tight">{item.title}</p>
                <p className="text-neutral-600 dark:text-neutral-400">{item.detail}</p>
              </div>
              <p className="font-mono text-xs tabular-nums text-neutral-600 dark:text-neutral-400">
                {item.year}
              </p>
            </li>
          ))}
        </ul>
      </section>

      {hasPosts ? (
        <section>
          <SectionHeading>Writing</SectionHeading>
          <BlogPosts />
        </section>
      ) : null}
    </div>
  )
}
