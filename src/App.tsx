import './App.css'
import { useState } from 'react'
import { About } from './components/About'
import { BoxedDiv, BoxedDivWithDelayContainer, BGSVG } from './components/Misc'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'

function App() {
  return (
    <>
    <BGSVG/>

    <div className='h-screen py-20 content-center'>

      <MainHeader/>

    </div>
    </>
  )
}

export default App

function MainHeader() {
  const [tab, setTab] = useState<string>('')
  const inactive = 'px-4 py-2 mx-2 rounded-md transition duration-300 hover:bg-red-400/50'
  const active = 'px-4 py-2 mx-2 rounded-md transition duration-300 bg-red-400/80 '

  return (
    <BoxedDivWithDelayContainer>

      <BoxedDiv>

          <h1 className='text-center text-2xl'>Sean Dela Cruz</h1>

      </BoxedDiv>

      <BoxedDiv>

        <h1 className='text-center '>An aspiring developer learning new tech one project at a time.</h1>

      </BoxedDiv>

      <BoxedDiv>

        <div className='flex flex-row justify-center'>

          <div className={tab === 'Skills' ? active : inactive} onClick={() => setTab('Skills')}>
              Skills
          </div>

          <div className={tab === 'Projects' ? active : inactive} onClick={() => setTab('Projects')}>
              Projects
          </div>

          <div className={tab === 'About' ? active : inactive} onClick={() => setTab('About')}>
              About
          </div>
          
        </div>

      </BoxedDiv>

      {tab === 'Skills' && <Skills/>}

      {tab === 'Projects' && <Projects/>}

      {tab === 'About' && <About/>}

    </BoxedDivWithDelayContainer>
)
}