import { motion } from "framer-motion"
import { BoxedDiv } from "./Misc"

export function Skills() {
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
  return (
    <>
        <BoxedDiv>

          <motion.div className="p-2"
            variants={container}
            initial="hidden"
            animate="show">

              <motion.div variants={item} className="flex flex-row mx-auto justify-center">

                <SkillGroup name="HTML" url="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1024px-HTML5_logo_and_wordmark.svg.png"/>

                <SkillGroup name="CSS" url="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/340px-CSS3_logo_and_wordmark.svg.png"/>

              </motion.div>

              <motion.div variants={item} className="flex flex-row mx-auto justify-center">
                
                <SkillGroup name="JavaScript" url="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/2048px-Unofficial_JavaScript_logo_2.svg.png"/>
                <SkillGroup name="TypeScript" url="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png"/>

              </motion.div>

              <motion.div variants={item} className="flex flex-row mx-auto justify-center">

                <SkillGroup name="React" url="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"/>

                <SkillGroup name="TailwindCSS" url="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1200px-Tailwind_CSS_Logo.svg.png"/>

              </motion.div>

              <motion.div variants={item} className="flex flex-row mx-auto justify-center">

                <SkillGroup name="C++" url="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1200px-ISO_C%2B%2B_Logo.svg.png"/>

                <SkillGroup name="Python" url="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png"/>

                <SkillGroup name="Java" url="https://classes.engineering.wustl.edu/cse425s/images/2/26/Java.png"/>

              </motion.div>

              <motion.div variants={item} className="flex flex-row mx-auto justify-center">

                <SkillGroup name="Flask" url="https://static-00.iconduck.com/assets.00/flask-icon-1594x2048-84mjydzf.png"/>


                <SkillGroup name="Git" url="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Git-logo.svg/1200px-Git-logo.svg.png"/>

                <SkillGroup name="Figma" url="https://upload.wikimedia.org/wikipedia/commons/a/ad/Figma-1-logo.png"/>

              </motion.div>

          </motion.div>

        </BoxedDiv>
    </>
  )
}

type SkillGroupProps = {
  name: string,
  url: string
}

function SkillGroup({name, url="#"}: SkillGroupProps) {
  return (
  <div className="p-2 rounded-md">

      <h5 className="ResponsiveTextSm text-center"> {name} </h5>
      <img src={url} className="h-8 mx-auto sm:h-10 md:h-12 " alt={name}/>
      
    </div>
  )
}