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

    <div className='h-screen content-center overflow-y-hidden'>

      <MainHeader/>

    </div>
    </>
  )
}

export default App

function MainHeader() {
  const [tab, setTab] = useState<string>('')
  const inactive = 'px-4 py-2 mx-2 rounded-md transition duration-300 hover:bg-red-400/50 text-base  md:text-lg'
  const active = 'px-4 py-2 mx-2 rounded-md transition duration-300 bg-red-400/80 text-base md:text-lg'

  return (
    <BoxedDivWithDelayContainer>

      <BoxedDiv>

          <h1 className='roboto-regular text-xl text-center sm:text-2xl md:text-3xl'>Sean Dela Cruz</h1>

      </BoxedDiv>

      <BoxedDiv>

        <h1 className='roboto-light text-base text-center sm:text-lg'>An aspiring developer learning new tech one project at a time.</h1>

      </BoxedDiv>

      <BoxedDiv>

        <div className='flex flex-row justify-center'>

          <div className={tab === 'Skills' ? active : inactive} onClick={() => setTab('Skills')}>
              <h3>Skills</h3>
          </div>

          <div className={tab === 'Projects' ? active : inactive} onClick={() => setTab('Projects')}>
              <h3>Projects</h3>
          </div>

          <div className={tab === 'About' ? active : inactive} onClick={() => setTab('About')}>
              <h3>About</h3>
          </div>
          
        </div>

      </BoxedDiv>

      {tab === 'Skills' && <Skills/>}

      {tab === 'Projects' && <Projects/>}

      {tab === 'About' && <About/>}

    </BoxedDivWithDelayContainer>
)
}