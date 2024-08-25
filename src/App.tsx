import './App.css'
import { useEffect, useState } from 'react'
import { About } from './components/About'
import { BoxedDiv, BGSVG } from './components/Misc'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'
import { motion } from 'framer-motion'

function App() {
  return (
    <div className='overflow-auto'>

      <BGSVG/>  

      <div className="content-center h-screen p-4">

          <Headers/>  

          <NavBar/>

          <MainBody/>

      </div>
      
    </div>
  )
}

export default App

function NavBar() {
  const inactive = 'px-4 py-2 mx-2 rounded-md transition duration-300 hover:bg-rose-300'
  const active = 'px-4 py-2 mx-2 rounded-md transition duration-300 bg-rose-300/70'

  const isVisibleAbout = HookIntersectionObserver('About', 0.8)
  const isVisibleSkills = HookIntersectionObserver('Skills', 0.8)
  const isVisibleProjects = HookIntersectionObserver('Projects', 0.1, "900px")

  return (
    <BoxedDiv>

      <div className='flex flex-row justify-center'>

        <motion.a href='#About' className={isVisibleAbout ? active : inactive}>
            <h3 className='ButtonText'>About</h3>
        </motion.a>
        
        <motion.a href='#Skills' className={isVisibleSkills ? active : inactive}>
            <h3 className='ButtonText'>Skills</h3>
        </motion.a>

        <motion.a href='#Projects' className={isVisibleProjects ? active : inactive}>
            <h3 className='ButtonText'>Projects</h3>
        </motion.a>

      </div>

    </BoxedDiv>
  )
}

function MainBody() {
  return(
    <div className='h-3/4 overflow-y-auto'>
      <About/>

      <Skills/>

      <Projects/>
    </div>
  )
}

function HookIntersectionObserver(targetId: string, threshold: number = 0, margin: string = "0px"): boolean {
  const [IsIntersecting, setIsIntersecting] = useState(false)

  useEffect(() => {
    const target_element = document.getElementById(targetId)

    if (!target_element) {
      console.log("Target element not found")
      return
    }

    const observer = new IntersectionObserver(([entries]) => {
      setIsIntersecting(entries.isIntersecting)
    },
    {
      threshold: threshold,
      rootMargin: margin,
    })

    observer.observe(target_element)

    return () => {
      observer.disconnect()
    }
  }, [targetId])

  return IsIntersecting
}

function Headers() {
  return (
    <>
    <BoxedDiv>
        <h1 className='HeaderText text-center'>Sean Dela Cruz</h1>
    </BoxedDiv>
    </>
  )
}