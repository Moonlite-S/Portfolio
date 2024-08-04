import { motion } from "framer-motion"
import { BoxedDiv, BoxedDivWithDelayContainer } from "./Misc"
import { useState } from 'react'

export function Projects() {
  const [currentProject, setCurrentProject] = useState<string>('List')

  const Projects = {
    BlogSite: 
    {
      name: "Blog Site",
      description: "My first ever project using NextJS. It definitely was a challenge, but it was a fun learning experience.",
      created: "Vercel",
      img_url: "/blogsite.png",
      url: "https://moonlite-s.com",
      setCurrentProject: setCurrentProject
    },
    VertBot: {
      name: "VertBot",
      description: "Discord Bot",
      created:"",
      img_url: "/vertbot.png",
      url: "https://github.com/Moonlite-S/VertBot",
      setCurrentProject: setCurrentProject
    },
    YTC: {
      name: "YTC",
      description: "Youtube Clone",
      created:"",
      img_url: "/ytc.png",
      url: "https://github.com/Moonlite-S/YTC",
      setCurrentProject: setCurrentProject
    },
    W: {
      name: "W",
      description: "W",
      created:"",
      img_url: "/w.png",
      url: "https://github.com/Moonlite-S/W",
      setCurrentProject: setCurrentProject
    },
    WawaAI: {
      name: "WawaAI",
      description: "WawaAI",
      created:"",
      img_url: "/wawaai.png",
      url: "https://github.com/Moonlite-S/WawaAI",
      setCurrentProject: setCurrentProject
    }
  }
  return (
    <>
      {currentProject === 'List' && <ProjectList setCurrentProject={setCurrentProject}/>}

      {currentProject === 'BlogSite' && <ProjectDiv {...Projects.BlogSite}/>}
      {currentProject === 'VertBot' && <ProjectDiv {...Projects.VertBot}/>}
      {currentProject === 'YTC' && <ProjectDiv {...Projects.YTC}/>}
      {currentProject === 'W' && <ProjectDiv {...Projects.W}/>}
      {currentProject === 'WawaAI' && <ProjectDiv {...Projects.WawaAI}/>}
    </>
  )
}

function ProjectList(
  {setCurrentProject}: {setCurrentProject: (arg0: string) => void}
) {
  const container = {
    hidden: {opacity: 0},
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.1,
        staggerChildren: 0.1
      }
    }
  }

  const item = {
    hidden: {opacity: 0, y: 50},
    show: {opacity: 1, y: 0},
  }
  return(
    <BoxedDiv>

      <motion.ul className="px-2"
        variants={container}
        initial="hidden"
        animate="show">

        <motion.li variants={item} onClick={() => setCurrentProject('BlogSite')}><ProjectListButton name="Blog Site"/></motion.li>
        <motion.li variants={item} onClick={() => setCurrentProject('VertBot')}><ProjectListButton name="VertBot"/></motion.li>
        <motion.li variants={item} onClick={() => setCurrentProject('YTC')}><ProjectListButton name="Youtube Chat Soundboard"/></motion.li>
        <motion.li variants={item} onClick={() => setCurrentProject('W')}><ProjectListButton name="W, a Voice AI Chatbot"/></motion.li>
        <motion.li variants={item} onClick={() => setCurrentProject('WawaAI')}><ProjectListButton name="WawaAI"/></motion.li>

      </motion.ul>

    </BoxedDiv>
  )
}

function ProjectListButton(
  {name}: {name: string}
) {
  return(
    <div className="ResponsiveTextSm p-2 my-2 rounded-md transition bg-red-400/30 hover:bg-red-400/80">

      <p className="roboto-regular sm:ResponsiveFontLight">{name}</p>

    </div>
  )
}

type ProjectProps = {
  name: string,
  description: string,
  created: string,
  img_url: string,
  url: string,
  setCurrentProject: (arg0: string) => void
}

function ProjectDiv(
  {name, description, created, img_url, url="", setCurrentProject}: ProjectProps,
) {
  return(
    <BoxedDivWithDelayContainer>

      <BoxedDiv>

        <div onClick={() => setCurrentProject('List')} className="inline-block rounded-md bg-red-700/20 px-4 py-2 hover:bg-red-700/60 transition">

            <h2 className="ResponsiveTextBase">Back</h2>

        </div>

      </BoxedDiv>

      <BoxedDiv>

          <h2 className="ResponsiveTextLg mb-5 text-center">{name}</h2>

          <h4 className="ResponsiveTextBase">{"Created using: " + created}</h4>

          <a href={url}>

            <img src={img_url} className="h-8 mx-auto sm:h-10 md:h-12" alt={name + " Logo"}/>
            
          </a>


          <h3 className="ResponsiveTextBase indent-4">{description}</h3>

      </BoxedDiv>
      
    </BoxedDivWithDelayContainer>
  )
}