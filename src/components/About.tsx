import { BoxedDiv } from "./Misc"
import sdlc from '/lkin.jpg'
import gmail from '/gmail.webp'

export function About() {
  return (
      <BoxedDiv id='About'>

        <div className="mx-5 my-3">

          <h2 className="ResponsiveTextLg ResponsiveFontLight mb-5 border-b border-black">About me:</h2>

          <div className="flex flex-row gap-8 flex-wrap-reverse sm:flex-nowrap">

          <div>

            <p className="ResponsiveTextSm ResponsiveFontLight indent-4" >
              I come from a background in Computer Science in the University of Rio Grande Valley down in Southern Texas in which I graduated in May of 2024. I am currently pursing a career as a Fullstack Web Developer.
            </p>

            <p className="ResponsiveTextSm ResponsiveFontLight indent-4 mt-5">
              My passion for web dev started back in high school where I was in a intro to web dev class. I like to make tools that help either me or others. Nowadays, I like to make a variety of projects in the name of fun.
            </p>

          </div>

            <img src={sdlc} className="h-32 mx-auto sm:h-36 md:h-52 rounded-full shadow-2xl" alt="Sean's profile picture"/>

          </div>


          <a href="https://drive.google.com/file/d/18xiIZTeSfWyvADTN0su0fGVvF3Vwvi_x/view?usp=sharing" target="_blank">

            <h3 className="ResponsiveTextLg mt-4 underline inline-block ">Resume</h3>

          </a>

          <h1 className="ResponsiveTextLg my-4">Socials:</h1>

          <div className="flex flex-row gap-4 ">

            <a href="https://www.linkedin.com/in/sean-louis-dela-cruz-807735284/" target="_blank">

              <img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" className="w-8 h-8 sm:w-10 sm:h-10" alt="LinkedIn Logo"/> 

            </a>

            <a href="https://github.com/Moonlite-S" target="_blank">

              <img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" className="w-8 h-8 sm:w-10 sm:h-10" alt="GitHub Logo"/>

            </a>

            <a href="mailto:seandelac112345@gmail.com" target="_blank">

              <img src={gmail} className="w-8 h-8 sm:w-10 sm:h-10" alt="Gmail Logo"/>

            </a>

          </div>

          <h3 className="ResponsiveTextLg ResponsiveFontLight pt-5">Email: seandelac112345@gmail.com</h3>

        </div>

      </BoxedDiv>
  )
}