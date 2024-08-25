import { BoxedDiv, Projects_Data } from "./Misc"

export function Projects() {
  return (
    <div id='Projects'>
      <BoxedDiv>
        <h2 className="ResponsiveTextLg ResponsiveFontLight m-5 border-b border-black">Projects:</h2>
      </BoxedDiv>

      <ProjectDiv {...Projects_Data.BlogSite}>
        <h3 className="ResponsiveTextBase ResponsiveFontLight indent-4 whitespace-pre-wrap p-5">
          My first ever project using NextJS. It definitely was a challenge, but it was a fun learning experience. It's hosted using Vercel with my own bought domain if you wanna check it out. :D It's called moonlite-s.com
        </h3>
      </ProjectDiv>

      <ProjectDiv {...Projects_Data.VertBot} swap_sides>
      <h3 className="ResponsiveTextBase ResponsiveFontLight indent-4 whitespace-pre-wrap p-5">
        A Discord bot I started way back in 2021. It's still considered in development since I tend to come back and add new things to it. Does a lot of fun minigames like Blackjack, guess the anime, and simulates the popular mobile game Honkai Star Rail's summoning system.
      </h3>
      </ProjectDiv>

      <ProjectDiv {...Projects_Data.YTC}>
      <h3 className="ResponsiveTextBase ResponsiveFontLight indent-4 whitespace-pre-wrap p-5">
        Sometimes I like livestreaming on Youtube, so one day I made a program where users can type in specific keywords that will play audio files on my computer. It led to some really funny well timed clips with my chat. I have made it so that other people can easily clone the repo and use it for their own livestreams.
      </h3>
      </ProjectDiv>

      <ProjectDiv {...Projects_Data.W} swap_sides>
      <h3 className="ResponsiveTextBase ResponsiveFontLight indent-4 whitespace-pre-wrap px-5 mb-4">
        W is a humourous voice assistant whose entire purpose is to scold you for existing. She listens to your voice and comes up with really bad jokes and horrible insults, but other than that, she's pretty cool.
      </h3>
      </ProjectDiv>

      <ProjectDiv {...Projects_Data.WawaAI}>
      <h3 className="ResponsiveTextBase ResponsiveFontLight indent-4 whitespace-pre-wrap p-5">
        This is a chatbot web app that people can go and interact with ChatGPT like you can do on their website. The reason I made this was because I had another web app that I used for a while that does something similar, but it stopped working one day, so I guess I wanted to make something of my own. It's still very in development, but I have almost the basic functionality working.",
      </h3>
      </ProjectDiv>
        
    </div>
  )
}

type ProjectProps = {
  name: string,
  created: string,
  img_url: string,
  url: string,
  swap_sides?: boolean,
  children: React.ReactNode
}

function ProjectDiv(
  {name, created, img_url, url="", swap_sides, children}: ProjectProps,
) {
  return(
    <BoxedDiv>

        <h2 className="ResponsiveTextLg ResponsiveFontLight p-5">{name}</h2>

        <div className={swap_sides ? "flex sm:flex-row-reverse flex-col" : "flex sm:flex-row flex-col"}>

          <div className="sm:basis-1/2">
            <img src={img_url} className="mx-auto p-5" alt={name + "  Preview"}/>
          </div>

          <div className="sm:basis-1/2">
            {children}
          </div>
            
        </div>

        <h4 className="ResponsiveTextBase ResponsiveFontLight px-5">{"Created using: " + created}</h4>

          <a href={url} target="blank" >

            <h5 className="ResponsiveTextBase ResponsiveFontLight rounded-md transition bg-rose-300/50 px-4 py-2 hover:bg-rose-300 flex justify-center mt-5">

              View Project

            </h5>

          </a>

    </BoxedDiv>
  )
}