import { motion } from "framer-motion"
import { BoxedDiv, BoxedDivWithDelayContainer } from "./Misc"
import { useState } from 'react'

export function Projects() {
  const [currentProject, setCurrentProject] = useState<string>('List')

  const Projects = {
    BlogSite: 
    {
      name: "Blog Site",
      description: "My first ever project using NextJS. It definitely was a challenge, but it was a fun learning experience. It's hosted using Vercel with my own bought domain if you wanna check it out. :D",
      created: "Vercel",
      img_url: "/moon.webp",
      url: "https://moonlite-s.com",
      setCurrentProject: setCurrentProject
    },
    VertBot: {
      name: "Vert Bot",
      description: "A Discord bot I started way back in 2021. It's still considered in development since I tend to come back and add new things to it. Does a lot of fun minigames like Blackjack, guess the anime, and simulates the popular mobile game Honkai Star Rail's summoning system.",
      created:"Python",
      img_url: "/vert.webp",
      url: "https://github.com/Moonlite-S/VertBot",
      setCurrentProject: setCurrentProject
    },
    YTC: {
      name: "Youtube Chat Soundboard",
      description: "Sometimes I like livestreaming on Youtube, so one day I made a program where users can type in specific keywords that will play audio files on my computer. It led to some really funny well timed clips with my chat. I have made it so that other people can easily clone the repo and use it for their own livestreams.",
      created:"Python",
      img_url: "/ytc.webp",
      url: "https://github.com/Moonlite-S/YTLivestreamChatSoundboard",
      setCurrentProject: setCurrentProject
    },
    W: {
      name: "W, a Rude Voice Assistant",
      description: "W was inspired by a content creator that I watch called Neuro-sama, a funny AI that speaks and listens to her chat. I made a small project that does something similar to what she does on a smaller scale: listens to my voice and responds accordingly through audio; just with a bit of attitude 'cause I thought that would make it funny.",
      created:"Python, Ollama, React, Flask",
      img_url: "/W.webp",
      url: "https://github.com/Moonlite-S/W",
      setCurrentProject: setCurrentProject
    },
    WawaAI: {
      name: "WawaAI",
      description: "This is a chatbot web app that people can go and interact with ChatGPT like you can do on their website. The reason I made this was because I had another web app that I used for a while that does something similar, but it stopped working one day, so I guess I wanted to make something of my own. It's still very in development, but I have almost the basic functionality working.",
      created:"Python, OpenAI, React, Flask",
      img_url: "/wawaai.webp",
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

          <img src={img_url} className="mx-auto h-24 mb-5 sm:h-40 md:h-56" alt={name + "  Preview"}/>
            
          <h3 className="ResponsiveTextBase indent-4">{description}</h3>

          <h4 className="ResponsiveTextBase ResponsiveFontLight mt-2">{"Created using: " + created}</h4>

          <h5>
            <a href={url} target="blank" className="ResponsiveTextBase ResponsiveFontLight underline">View Project</a>
            </h5>

      </BoxedDiv>
      
    </BoxedDivWithDelayContainer>
  )
}