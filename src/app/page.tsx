import Image from "next/image";
import SiteHeader from "./components/SiteHeader";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./components/Card";
import {
  ArrowUpRight,
  Cloud,
  GitBranch,
  Laptop,
  Mail,
  Network,
  Server,
} from "lucide-react";
import { Badge } from "./components/Badge";
import { Button } from "./components/Button";
import SiteFooter from "./components/SiteFooter";
import Link from "next/link";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col overflow-x-clip">
      <div className="pointer-events-none absolute -left-24 top-36 h-72 w-72 rounded-full bg-accent/25 blur-3xl animate-drift" />
      <div className="pointer-events-none absolute -right-24 top-[40%] h-80 w-80 rounded-full bg-secondary/20 blur-3xl animate-float-slow" />
      <SiteHeader />
      <div className="mx-auto flex w-full max-w-6xl flex-1 flex-col px-6 py-10 md:px-12 md:py-16">
        <section
          id="hero"
          className="grid items-center gap-12 md:grid-cols-[1.15fr_0.85fr] scroll-mt-24"
        >
          <div className="animate-fade-up space-y-8">
            <p className="inline-flex rounded-full border border-primary/20 bg-primary/10 px-4 py-1 text-xs font-semibold tracking-[0.18em] text-primary">
              FULL-STACK DEVELOPER
            </p>
            <h2 className="text-5xl font-extrabold leading-tight text-neutral md:text-7xl">
              Crafting{" "}
              <span className="hero-text-gradient">intuitive products</span>{" "}
              that feel alive.
            </h2>
            <p className="max-w-2xl text-lg text-muted md:text-xl">
              I design and ship polished web experiences with modern stacks,
              strong architecture, and attention to every interaction detail.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link href="#contact">
                <Button variant="secondary" size="lg">
                  Get in Touch
                </Button>
              </Link>
              <Link href="/resume.pdf">
                <Button size="lg" className="group">
                  View Resume
                  <ArrowUpRight className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Button>
              </Link>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md animate-float-slow">
            <div className="glass-panel section-grid relative isolate h-[320px] w-full overflow-hidden p-2 md:h-[420px]">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/10 via-transparent to-secondary/10" />
              <Image
                src="/portfolio_pic.png"
                alt="Hero section image"
                fill
                className="relative rounded-[1.4rem] object-cover"
              />
            </div>
          </div>
        </section>
        <section id="about" className="mt-24 space-y-5 scroll-mt-24">
          <h2 className="text-4xl font-bold text-neutral md:text-5xl">
            About Me
          </h2>
          <p className="max-w-3xl text-muted">
            I&apos;m a full-stack developer focused on building reliable,
            high-performance products. My work blends thoughtful UX, clean code,
            and scalable systems.
          </p>
          <div className="grid gap-5 pt-3 md:grid-cols-3">
            <Card>
              <CardHeader className="gap-4">
                <Laptop className="text-primary" />
                <CardTitle>Front End Development</CardTitle>
                <CardDescription>
                  Responsive interfaces with React and Tailwind, built for
                  clarity, speed, and smooth interaction.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader className="gap-4">
                <Server className="text-primary" />
                <CardTitle>Back End Development</CardTitle>
                <CardDescription>
                  Robust APIs and services using Node.js and modern server
                  patterns with maintainable architecture.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader className="gap-4">
                <Cloud className="text-primary" />
                <CardTitle>Cloud Development</CardTitle>
                <CardDescription>
                  Deployment-ready systems with AWS and CI/CD pipelines focused
                  on resilience and performance.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </section>
        <section
          id="featured-projects"
          className="mt-24 space-y-5 scroll-mt-24"
        >
          <h2 className="text-4xl font-bold text-neutral md:text-5xl">
            Featured Projects
          </h2>
          <p className="max-w-3xl text-muted">
            Recent builds that combine design precision and engineering depth.
          </p>
          <div className="grid gap-5 md:grid-cols-2">
            <Card>
              <CardHeader className="gap-4">
                <CardTitle>Portfolio Website (This Project)</CardTitle>
                <CardDescription>
                  A personal portfolio built in Next.js with a strong visual
                  language, motion, and responsive layouts.
                </CardDescription>
                <div className="flex flex-wrap gap-2">
                  <Badge>Next.js</Badge>
                  <Badge variant="secondary">Tailwind CSS</Badge>
                </div>
                <div>
                  <Button variant="ghost" size="sm">
                    <GitBranch size={16} />
                    Code
                  </Button>
                </div>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader className="gap-4">
                <CardTitle>Medical Clinic Management System</CardTitle>
                <CardDescription>
                  A platform for records, appointments, and billing, built with
                  Next.js and Spring Boot.
                </CardDescription>
                <div className="flex flex-wrap gap-2">
                  <Badge>Next.js</Badge>
                  <Badge variant="secondary">Tailwind CSS</Badge>
                  <Badge className="bg-emerald-600 text-white">
                    Spring Boot
                  </Badge>
                  <Badge className="bg-sky-700 text-white">Postgres</Badge>
                  <Badge className="bg-amber-600 text-white">Gitlab CI</Badge>
                  <Badge className="bg-cyan-600 text-white">Docker</Badge>
                </div>
                <div>
                  <Link
                    href="https://github.com/orgs/ClinicPal-Medical/repositories"
                    target="_blank"
                  >
                    <Button variant="ghost" size="sm">
                      <GitBranch size={16} />
                      Code
                    </Button>
                  </Link>
                </div>
              </CardHeader>
            </Card>
          </div>
        </section>
        <section id="contact" className="mt-24 pb-8 scroll-mt-24">
          <div className="glass-panel section-grid relative overflow-hidden p-8 md:p-12">
            <div className="absolute -right-16 -top-16 h-52 w-52 rounded-full bg-primary/15 blur-3xl" />
            <h2 className="relative text-4xl font-bold text-neutral md:text-5xl">
              Contact Me
            </h2>
            <p className="relative mt-3 max-w-3xl text-muted">
              I&apos;d love to hear about your product ideas, collaborations, or
              roles. Let&apos;s build something meaningful.
            </p>
            <div className="relative mt-8 flex flex-wrap gap-4">
              <a href="mailto:naveensatanarachchi@outlook.com">
                <Button>
                  <Mail />
                  Email
                </Button>
              </a>
              <Link
                href="https://www.linkedin.com/in/naveensatanarachchi/"
                target="_blank"
              >
                <Button variant="outline">
                  <Network />
                  LinkedIn
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
      <SiteFooter />
    </main>
  );
}
