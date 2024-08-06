import { BoxedDiv } from "./Misc"

export function About() {
  return (
      <BoxedDiv>

        <p className="ResponsiveTextSm ResponsiveFontLight indent-4" >
          I come from a background in Computer Science in the University of Rio Grande Valley down in Southern Texas in which I graduated in May of 2024. 
        </p>

        <p className="ResponsiveTextSm ResponsiveFontLight indent-4 mt-4">
          My passion for web dev started back in middle school where I was in a intro to web dev class. The idea of combining my creative imagination and programming was incredibly exciting. Nowadays, I like to make a variety of projects in the name of fun while also having a passion for learning new things.
        </p>

        <a href="https://drive.google.com/file/d/18xiIZTeSfWyvADTN0su0fGVvF3Vwvi_x/view?usp=sharing" target="_blank">

          <h3 className="ResponsiveTextLg mt-4 underline inline-block">Resume</h3>

        </a>

        <h1 className="ResponsiveTextLg mt-4">Socials:</h1>

        <div className="flex flex-row gap-4">

          <a href="https://www.linkedin.com/in/sean-louis-dela-cruz-807735284/" target="_blank">

            <img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" className="w-10 h-10" alt="LinkedIn Logo"/> 

          </a>

          <a href="https://github.com/Moonlite-S" target="_blank">

            <img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" className="w-10 h-10" alt="GitHub Logo"/>

          </a>

        </div>

      </BoxedDiv>
  )
}