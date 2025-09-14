import Image from "next/image";
import SiteHeader from "./components/SiteHeader";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./components/Card";
import {
  Cloud,
  GitBranch,
  Laptop,
  Link as LinkIcon,
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
    <main className="flex min-h-screen flex-col">
      <SiteHeader />
      <div className="flex flex-1 flex-col py-4">
        <div className="flex flex-col gap-8 my-6 mx-20 md:flex-row px-4">
          <div className="flex flex-1 flex-col gap-10 my-auto">
            <h2 className="text-7xl font-bold text-center md:text-left">
              <span className="text-neutral">Hi, I build </span>
              cool stuff
              <span className="text-neutral"> with code</span>
            </h2>
            <p className="text-neutral text-2xl text-center md:text-left">
              Full-stack developer crafting digital experiences with modern
              technologies. I turn ideas into reality through clean, efficient
              code.
            </p>
            <div className="flex gap-4 justify-center md:justify-start">
              <Link href="#contact">
                <Button variant="secondary">Get in Touch</Button>
              </Link>
              <Link href="/resume.pdf">
                <Button>View My Resume</Button>
              </Link>
            </div>
          </div>
          <div className="relative animate-float w-72 h-72 md:w-[400px] md:h-[400px] rounded-[50%] overflow-hidden m-auto drop-shadow-md drop-shadow-accent">
            <Image
              src="/portfolio_pic.png"
              alt="Hero section image"
              fill
              className="object-cover m-auto"
            />
          </div>
        </div>
        <div className="flex flex-col items-center gap-4 relative custom-gradient-bg p-30 md:p-40 px-4">
          <h2 id="about" className="text-4xl text-neutral font-bold">
            About Me
          </h2>
          <p className="text-neutral max-w-5xl text-center">
            I&apos;m a passionate full-stack developer with expertise in both
            front-end and back-end technologies. I love creating dynamic,
            user-friendly web applications that provide real value to users.
          </p>
          <div className="flex flex-col md:flex-row gap-4 w-full">
            <Card className="flex-1">
              <CardHeader className="flex flex-col gap-4">
                <Laptop className="text-accent" />
                <CardTitle>Front End Development</CardTitle>
                <CardDescription>
                  Experienced in building responsive and interactive user
                  interfaces using React, Tailwind CSS, and other modern
                  technologies.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="flex-1">
              <CardHeader className="flex flex-col gap-4">
                <Server className="text-accent" />
                <CardTitle>Back End Development</CardTitle>
                <CardDescription>
                  Experienced in building robust and scalable server-side
                  applications using Node.js, Express, and other modern
                  technologies.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="flex-1">
              <CardHeader className="flex flex-col gap-4">
                <Cloud className="text-accent" />
                <CardTitle>Cloud Development</CardTitle>
                <CardDescription>
                  Experienced in building cloud-native applications using AWS
                  and CI/CD pipelines.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
        <div
          id="featured-projects"
          className="flex flex-col items-center gap-4 px-4"
        >
          <h2 className="text-4xl text-neutral font-bold">Featured Projects</h2>
          <p className="text-neutral max-w-5xl text-center">
            Some of my recent work that I&apos;m proud of.
          </p>
          <div className="flex flex-col md:flex-row w-full md:w-[80%] gap-4">
            <Card className="flex-1">
              <CardHeader className="flex flex-col gap-4">
                <CardTitle>Portfolio Website (This Project)</CardTitle>
                <CardDescription>
                  A fully responsive personal portfolio website built with
                  Next.js and Tailwind CSS.
                </CardDescription>
                <div className="flex flex-wrap gap-3">
                  <Badge className="bg-gray-950">Next.js</Badge>
                  <Badge className="bg-sky-400">Tailwind CSS</Badge>
                </div>
                <div>
                  <Button variant="ghost" size="sm">
                    <GitBranch size={16} />
                    Code
                  </Button>
                </div>
              </CardHeader>
            </Card>
            <Card className="flex-1">
              <CardHeader className="flex flex-col gap-4">
                <CardTitle>Medical Clinic Management System</CardTitle>
                <CardDescription>
                  A web application for managing patient records, appointments,
                  and billing, built with Next.js and Spring Boot.
                </CardDescription>
                <div className="flex flex-wrap gap-3">
                  <Badge className="bg-gray-950">Next.js</Badge>
                  <Badge className="bg-sky-400">Tailwind CSS</Badge>
                  <Badge className="bg-green-600">Spring Boot</Badge>
                  <Badge className="bg-blue-900">Postgres</Badge>
                  <Badge className="bg-amber-600">Gitlab CI</Badge>
                  <Badge className="bg-blue-400">Docker</Badge>
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
        </div>
        <div
          id="contact"
          className="flex flex-col items-center gap-4 relative custom-gradient-bg2 p-30 md:p-40 px-4"
        >
          <h2 className="text-4xl text-neutral font-bold">Contact Me</h2>
          <p className="text-neutral max-w-5xl text-center">
            I&apos;d love to hear from you! Feel free to reach out.
          </p>
          <div className="flex gap-5">
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
      </div>
      <SiteFooter />
    </main>
  );
}
