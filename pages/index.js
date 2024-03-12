"use client";
import React, { useTransition, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Layout from "../components/layout";
import { motion, useInView } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import TabButton from "../components/tab";
import ProjectCard from "../components/card";
import ProjectTag from "../components/tag";
import GithubIcon from "../public/github-icon.svg";
import LinkedinIcon from "../public/linkedin-icon.svg";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>JavaScript</li>
        <li>MongoDB</li>
        <li>Express</li>
        <li>React</li>
        <li>Node.js</li>
        <li>React Native</li>
        <li>Python</li>
        <li>Django</li>
        <li>PostgreSQL</li>
        <li>MySQL</li>
        <li>Sequelize</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Fullstack JavaScript - XARALA ACADEMY</li>
        <li>MA/BA - Cheikh Anta Diop University </li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>JavaScript (Basic) - HackerRank</li>
        <li>JavaScript (Intermediate) - HackerRank</li>
        <li>Programming Foundations: Fundamentals - LinkedIn</li>
        <li>Foundational C# with Microsoft - FreeCodeCamp</li>
      </ul>
    ),
  },
];

const projectsData = [
  {
    id: 1,
    title: "React Portfolio Website",
    description: "Project 1 description",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Potography Portfolio Website",
    description: "Project 2 description",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "E-commerce Application",
    description: "Project 3 description",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Food Ordering Application",
    description: "Project 4 description",
    image: "/images/projects/4.png",
    tag: ["All", "Mobile"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "React Firebase Template",
    description: "Authentication and CRUD operations",
    image: "/images/projects/5.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Full-stack Roadmap",
    description: "Project 5 description",
    image: "/images/projects/6.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
];

export default function Home() {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) => project.tag.includes(tag));

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };
    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";

    // Form the request for sending data to the server.
    const options = {
      // The method is POST because we are sending data.
      method: "POST",
      // Tell the server we're sending JSON.
      headers: {
        "Content-Type": "application/json",
      },
      // Body of the request is the JSON data we created above.
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);
    const resData = await response.json();

    if (response.status === 200) {
      console.log("Message sent.");
      setEmailSubmitted(true);
    }
  };
  return (
    <Layout title="Home Page">
      <section className="lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
          >
            <h1 className="text-black mb-2 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
              <span className="bg-clip-text bg-gradient-to-r from-primary-400 to-slate-600">Hello, I&apos;m </span>
              <br></br>
              <TypeAnimation
                sequence={[
                  "Babacar Thiam",
                  1000,
                  "Web Developer",
                  1000,
                  "Mobile Developer",
                  1000,
                  "English Teacher",
                  1000,
                  "UI/UX Designer",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </h1>
            <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
              Full Stack Developer Web/Mobile as well as an English as a Second Language Teacher
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="col-span-4 place-self-center mt-4 lg:mt-0"
          >
            <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
              <Image
                src="/images/profile-2.png"
                alt="hero image"
                className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                width={250}
                height={250}
              />
            </div>
          </motion.div>
        </div>
      </section>

      <section className="text-black" id="about">
        <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
          <Image src="/images/about-image.png" width={500} height={500} />
          <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
            <h2 className="text-4xl font-bold text-black mb-4">About Me</h2>
            <p className="text-black lg:text-lg">
              I am a full stack web/mobile developer with a passion for creating interactive and responsive web
              applications. I have experience working with JavaScript, React, React Native, Redux, Node.js, Express,
              PostgreSQL, Sequelize, HTML, CSS, Python, Django and Git. I am a quick learner and I am always looking to
              expand my knowledge and skill set. I am a team player and I am excited to work with others to create
              amazing applications.
            </p>
            <div className="flex flex-row justify-start mt-8">
              <TabButton selectTab={() => handleTabChange("skills")} active={tab === "skills"}>
                {" "}
                Skills{" "}
              </TabButton>
              <TabButton selectTab={() => handleTabChange("education")} active={tab === "education"}>
                {" "}
                Education{" "}
              </TabButton>
              <TabButton selectTab={() => handleTabChange("certifications")} active={tab === "certifications"}>
                {" "}
                Certifications{" "}
              </TabButton>
            </div>
            <div className="mt-8">{TAB_DATA.find((t) => t.id === tab).content}</div>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">My Projects</h2>
        <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
          <ProjectTag onClick={handleTagChange} name="All" isSelected={tag === "All"} />
          <ProjectTag onClick={handleTagChange} name="Web" isSelected={tag === "Web"} />
          <ProjectTag onClick={handleTagChange} name="Mobile" isSelected={tag === "Mobile"} />
        </div>
        <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
          {filteredProjects.map((project, index) => (
            <motion.li
              key={index}
              variants={cardVariants}
              initial="initial"
              animate={isInView ? "animate" : "initial"}
              transition={{ duration: 0.3, delay: index * 0.4 }}
            >
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                imgUrl={project.image}
                gitUrl={project.gitUrl}
                previewUrl={project.previewUrl}
              />
            </motion.li>
          ))}
        </ul>
      </section>

      <section className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative">
        <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
        <div className="z-10">
          <h5 className="text-xl font-bold text-black my-2">Let&apos;s Connect</h5>
          <p className="text-black mb-4 max-w-md">
            {" "}
            I&apos;m currently looking for new opportunities, my inbox is always open. Whether you have a question or
            just want to say hi, I&apos;ll try my best to get back to you!
          </p>
          <div className="socials flex flex-row gap-2">
            <Link href="github.com" className="bg-black rounded">
              <Image src={GithubIcon} alt="Github Icon" />
            </Link>
            <Link href="linkedin.com" className="bg-black rounded">
              <Image src={LinkedinIcon} alt="Linkedin Icon" />
            </Link>
          </div>
        </div>
        <div>
          {emailSubmitted ? (
            <p className="text-green-500 text-sm mt-2">Email sent successfully!</p>
          ) : (
            <form className="flex flex-col" onSubmit={handleSubmit}>
              <div className="mb-6">
                <label htmlFor="email" className="text-black block mb-2 text-sm font-medium">
                  Your email
                </label>
                <input
                  name="email"
                  type="email"
                  id="email"
                  required
                  className=" border placeholder-[#9CA2A9] text-black text-sm rounded-lg block w-full p-2.5"
                  placeholder="babacarthiamxxviii@icloud.com"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="subject" className="text-black block text-sm mb-2 font-medium">
                  Subject
                </label>
                <input
                  name="subject"
                  type="text"
                  id="subject"
                  required
                  className=" border placeholder-[#9CA2A9] text-black text-sm rounded-lg block w-full p-2.5"
                  placeholder="Just saying hi"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="text-black block text-sm mb-2 font-medium">
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  className=" border  placeholder-[#9CA2A9] text-black text-sm rounded-lg block w-full p-2.5"
                  placeholder="Let's talk about..."
                />
              </div>
              <button
                type="submit"
                className=" bg-gray-500 hover:bg-gray-800 text-white font-medium py-2.5 px-5 rounded-lg w-full"
              >
                Send Message
              </button>
            </form>
          )}
        </div>
      </section>
    </Layout>
  );
}
