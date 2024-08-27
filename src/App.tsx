import { motion } from 'framer-motion'
import './App.css'
import { About } from './components/About'
import { BGSVG } from './components/Misc'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'

function App() {
  return (
    <div className='overflow-auto'>

      <BGSVG/>  

      <div className="h-screen">

          <Headers/>  


          <MainBody/>

      </div>
      
    </div>
  )
}

export default App

function MainBody() {
  return(
    <div className=''>
      <About/>

      <Skills/>

      <Projects/>
    </div>
  )
}

function Headers() {
  return (
    <>
        <motion.h1 className='HeaderText p-10 text-center'
          initial={{ opacity: 0, y: -80}}
          animate={{ opacity: 1, y: 0}}
          transition={{ duration: 1 , ease: "easeInOut"}}
        >Sean Dela Cruz</motion.h1>
    </>
  )
}