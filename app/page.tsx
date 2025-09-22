import Section from "./components/Section";
import ProjectCard from "./components/ProjectCard";
import Timeline from "./components/Timeline";
import SkillPill from "./components/SkillPill";
import ContactForm from "./components/ContactForm";
import Hero from "./components/Hero";
import { EXPERIENCE, PROJECTS, SKILLS, SITE } from "./libs/data";


export default function Page() {
    return (
        <>
            <section className="pt-8 md:pt-12">
                <Hero />
            </section>


            <Section id="projects" title="Projects">
                <div className="grid md:grid-cols-2 gap-6">
                    {PROJECTS.map((p) => (
                        <ProjectCard key={p.title} p={p} />
                    ))}
                </div>
            </Section>


            <Section id="experience" title="Experience">
                <div className="container-narrow">
                    <Timeline items={EXPERIENCE} />
                </div>
            </Section>


            <Section id="skills" title="Skills">
                <div className="flex flex-wrap gap-2">
                    {SKILLS.map((s) => (
                        <SkillPill key={s} label={s} />
                    ))}
                </div>
            </Section>


            <Section id="contact" title="Contact">
                <div className="container-narrow">
                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                        Want to collaborate or have a role in mind? Email me at
                        {" "}
                        <a className="underline" href={`mailto:${SITE.email}`}>{SITE.email}</a>
                        {" "}or use the form:
                    </p>
                    <ContactForm email={SITE.email} />
                </div>
            </Section>
        </>
    );
}