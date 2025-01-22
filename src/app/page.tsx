import BlurFade from '@/components/magicui/blur-fade'
import BlurFadeText from '@/components/magicui/blur-fade-text'
import { ProjectCard } from '@/components/project-card'
import { ResumeCard } from '@/components/resume-card'
import ThemeImage from '@/components/ThemeImage'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import ShineBorder from '@/components/ui/shine-border'
import { DATA } from '@/data/resume'
import Link from 'next/link'
import Markdown from 'react-markdown'

const BLUR_FADE_DELAY = 0.04

export default function Page() {
  return (
    <main className="flex min-h-[100dvh] flex-col space-y-10">
      <section id="hero">
        <div className="mx-auto w-full max-w-3xl space-y-8">
          <div className="flex flex-wrap items-center justify-center gap-2 md:justify-between">
            <div className="flex flex-1 flex-col items-center space-y-1.5">
              <BlurFadeText
                delay={BLUR_FADE_DELAY}
                className="font-bold tracking-tighter sm:text-xl xl:text-2xl/none"
                yOffset={8}
                text={'Heya 👋'}
              />

              <BlurFade delay={BLUR_FADE_DELAY}>
                {DATA.nameLogoUrl ? (
                  <ThemeImage
                    src={DATA.nameLogoUrl}
                    alt={DATA.name}
                    width={400}
                    height={400}
                    classnameDark="invert"
                  />
                ) : (
                  <h2>{DATA.name}</h2>
                )}
              </BlurFade>

              <BlurFade
                className="flex max-w-[600px] flex-col items-center justify-center pt-4 font-bold"
                delay={BLUR_FADE_DELAY}
              >
                <span>{DATA.role}</span>
                {DATA.companyLogoUrl && (
                  <ThemeImage
                    src={DATA.companyLogoUrl}
                    srcDark={DATA.companyLogoUrlDark}
                    alt={'company logo'}
                    width={160}
                    height={160}
                  />
                )}
              </BlurFade>
            </div>

            <BlurFade className="self-center" delay={BLUR_FADE_DELAY}>
              <ShineBorder
                className="py-6"
                borderRadius={1000}
                color={['#A07CFE', '#FE8FB5', '#FFBE7B']}
              >
                <Avatar className="size-60 border">
                  <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
                  <AvatarFallback>{DATA.initials}</AvatarFallback>
                </Avatar>
              </ShineBorder>
            </BlurFade>
          </div>
        </div>
      </section>

      <section id="highlighted-links">
        <BlurFade delay={BLUR_FADE_DELAY * 2}>
          {DATA.highlightedLinks.map(link => (
            <Link key={link.href} href={link.href}>
              <Badge className="flex max-w-32 justify-center gap-2 px-2 py-1">
                <link.icon className="size-4" />
                {link.label}
              </Badge>
            </Link>
          ))}
        </BlurFade>
      </section>

      <section id="about">
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <h2 className="text-xl font-bold">About</h2>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
            {DATA.summary}
          </Markdown>
        </BlurFade>
      </section>

      <section id="work">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <h2 className="text-xl font-bold">Work Experience</h2>
          </BlurFade>
          {DATA.work.map((work, id) => (
            <BlurFade key={work.company} delay={BLUR_FADE_DELAY * 6 + id * 0.05}>
              <ResumeCard
                key={work.company}
                logoUrl={work.logoUrl}
                altText={work.company}
                title={work.company}
                subtitle={work.title}
                href={work.href}
                badges={work.badges}
                period={`${work.start} - ${work.end ?? 'Present'}`}
                description={work.description}
              />
            </BlurFade>
          ))}
        </div>
      </section>

      <section id="education">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <h2 className="text-xl font-bold">Education</h2>
          </BlurFade>
          {DATA.education.map((education, id) => (
            <BlurFade key={education.school} delay={BLUR_FADE_DELAY * 8 + id * 0.05}>
              <ResumeCard
                key={education.school}
                logoUrl={education.logoUrl}
                altText={education.school}
                title={education.school}
                subtitle={education.degree}
                period={`${education.start} - ${education.end}`}
                description={education.description}
              />
            </BlurFade>
          ))}
        </div>
      </section>

      <section id="skills">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <h2 className="text-xl font-bold">Skills</h2>
          </BlurFade>
          <div className="flex flex-wrap gap-1">
            {DATA.skills.map((skill, id) => (
              <BlurFade key={skill} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
                <Badge key={skill}>{skill}</Badge>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      <section id="projects">
        <div className="w-full space-y-12 py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground px-3 py-1 text-sm text-background">
                  Portfolio
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Check out my latest work
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  I&apos;ve worked on a variety of projects, from web apps to blockchain
                  applications. Here are some of my favorites.
                </p>
              </div>
            </div>
          </BlurFade>
          <div className="mx-auto grid max-w-[800px] grid-cols-1 gap-3 sm:grid-cols-2">
            {DATA.projects.map((project, id) => (
              <BlurFade key={project.title} delay={BLUR_FADE_DELAY * 12 + id * 0.05}>
                <ProjectCard
                  href={project.href}
                  key={project.title}
                  title={project.title}
                  client={project.client}
                  description={project.description}
                  dates={project.dates}
                  tags={project.technologies}
                  image={project.image}
                  video={project.video}
                  links={project.links}
                />
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      <section id="contact">
        <div className="grid w-full items-center justify-center gap-4 px-4 py-12 text-center md:px-6">
          <BlurFade delay={BLUR_FADE_DELAY * 16}>
            <div className="space-y-3">
              <div className="inline-block rounded-lg bg-foreground px-3 py-1 text-sm text-background">
                Contact
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Get in Touch</h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Want to chat? Just shoot me a dm on my socials. See below.
              </p>
            </div>
          </BlurFade>
        </div>
      </section>
    </main>
  )
}
