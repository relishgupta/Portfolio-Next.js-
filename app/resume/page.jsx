"use client"

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaGit,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiNextdotjs
} from "react-icons/si";

const about={
  title:"About me",
  description:
  "A passionate developer who loves turning complex problems into clean, functional code.",
  info:[
    {
      fieldName:"Name",
      fieldValue:"Relish Gupta",
    },
    {
      fieldName:"Phone",
      fieldValue:"(+91) 6005486933",
    },
    {
      fieldName:"Experience",
      fieldValue:"1 Year",
    },
    {
      fieldName:"Github",
      fieldValue:"relishgupta",
    },
    {
      fieldName:"Nationality",
      fieldValue:"Indian",
    },
    {
      fieldName:"Email",
      fieldValue:"guptarelish333@gmail.com",
    },
    {
      fieldName:"Freelance",
      fieldValue:"Available",
    },
    {
      fieldName:"Languages",
      fieldValue:"English, Hindi",
    },
  ]
}

const experience={
  icon:"/assets/resume/badge.svg",
  title:"My experience",
  description:
  "From code to deployment, I've tackled projects that bring ideas to life and solve real-world challenges.",
  items:[
    {
      company:"Vyapar Guru Infotech",
      position:"Software Developer",
      duration:"Aug 2024 - Present"
    },
    {
      company:"Excellence Technologies",
      position:"Frontend Developer",
      duration:"Jan 2024 - June 2024"
    },
    {
      company:"GDSC SMVDU",
      position:"Web Developer",
      duration:"Aug 2023 - Dec 2023"
    },
    {
      company:"Freelance",
      position:"Freelance Web Developer",
      duration:"2023 - Present"
    },
  ]
}

const education={
  icon:"/assets/resume/cap.svg",
  title:"My education",
  description:
  "The technical backbone that sharpened my problem-solving skills and coding expertise.",
  items:[
    {
      institution:"SMVDU",
      degree:"B.Tech, CS",
      duration:"2020 - 2024",
    },
    {
      institution:"Adarsh Shiksha Niketan",
      degree:"12th",
      duration:"2019 - 2020",
    },
    {
      institution:"Kendriya Vidyalaya",
      degree:"10th",
      duration:"2017 - 2018",
    },
  ]
}

const skills={
  title:"My skills",
  description:
  "A toolkit of programming languages, frameworks, and technologies to build efficient and scalable solutions.",
  skillList:[
    {
      icon:<FaHtml5/>,
      name:"html5",
    },
    {
      icon:<FaCss3/>,
      name:"CSS3",
    },
    {
      icon:<FaJs/>,
      name:"javascript",
    },
    {
      icon:<FaReact/>,
      name:"react.js",
    },
    {
      icon:<SiNextdotjs/>,
      name:"next.js",
    },
    {
      icon:<SiTailwindcss/>,
      name:"tailwind.css",
    },
    {
      icon:<FaNodeJs/>,
      name:"node.js",
    },
    {
      icon:<FaGitAlt/>,
      name:"git",
    },
  ]
}

import {Tabs,TabsContent,TabsList,TabsTrigger} from "@/components/ui/tabs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";

import { motion } from "framer-motion";

const Resume = () => {
    return (
      <motion.div
        initial={{opacity:0}}
        animate={{
          opacity:1,
          transition:{delay:2.4,duration:0.4,ease:"easeIn"},
        }}
        className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
        >
        <div className="container mx-auto">
          <Tabs
            defaultValue="experience"
            className="flex flex-col xl:flex-row gap-[60px]"
          >
            <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
              <TabsTrigger value="experience">Experience</TabsTrigger>
              <TabsTrigger value="education">Education</TabsTrigger>
              <TabsTrigger value="skills">Skills</TabsTrigger>
              <TabsTrigger value="about">About</TabsTrigger>
            </TabsList>

            <div className="min-h-[70vh] w-full">
              <TabsContent value="experience" className="w-full">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{experience.title}</h3>
                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                        {experience.description}
                    </p>
                    <ScrollArea className="h-[400px]">
                      <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                        {experience.items.map((item,index)=>{
                          return( 
                          <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                            <span className="text-accent">{item.duration}</span>
                            <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
                            <div className="flex items-center gap-3">
                              <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                              <p className="text-white/60">{item.company}</p>
                            </div>
                          </li>
                          )
                        })}
                      </ul>
                    </ScrollArea>
                </div>
              </TabsContent>

              <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{education.title}</h3>
                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                        {education.description}
                    </p>
                    <ScrollArea className="h-[400px]">
                      <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                        {education.items.map((item,index)=>{
                          return( 
                          <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                            <span className="text-accent">{item.duration}</span>
                            <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.degree}</h3>
                            <div className="flex items-center gap-3">
                              <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                              <p className="text-white/60">{item.institution}</p>
                            </div>
                          </li>
                          )
                        })}
                      </ul>
                    </ScrollArea>
                </div>
              </TabsContent>

              <TabsContent value="skills" className="w-full h-full">
                <div className="flex flex-col gap-[30px]">
                  <div className="flex flex-col gap-[30px] text-center xl:text-left">
                    <h3 className="text-4xl font-bold">{skills.title}</h3>
                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                        {skills.description}
                    </p>
                  </div>
                  <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                    {skills.skillList.map((skill,index)=>{
                      return <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                        </li>
                    })}
                  </ul>
                </div>
              </TabsContent>

              <TabsContent value="about" className="w-full text-center xl:text-left">
                <div className="flex flex-col gap-[30px]">
                  <h3 className="text-4xl font-bold">
                    {about.title}
                  </h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {about.description}
                  </p>
                  <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                    {about.info.map((item,index)=>{
                      return(
                        <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                          <span className="text-white/60">{item.fieldName}</span>
                          <span className="text-xl">{item.fieldValue}</span>
                        </li>
                      )
                    })}
                  </ul>
                </div>
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </motion.div>
    )
  }
  
export default Resume;