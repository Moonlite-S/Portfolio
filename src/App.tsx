import './App.css'
import { useState } from 'react'
import { About } from './components/About'
import { BoxedDiv, BoxedDivWithDelayContainer, BGSVG } from './components/Misc'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'

function App() {
  return (
    <>
    <div className='overflow-auto'>

      <BGSVG/>  

      <div className="h-screen content-center">

        <MainHeader/>

      </div>
      
    </div>
    </>
  )
}

export default App

function MainHeader() {
  const [tab, setTab] = useState<string>('')
  const inactive = 'px-4 py-2 mx-2 rounded-md transition duration-300 hover:bg-red-400/50'
  const active = 'px-4 py-2 mx-2 rounded-md transition duration-300 bg-red-400/80'

  return (
    <BoxedDivWithDelayContainer>

      <BoxedDiv>

          <h1 className='HeaderText text-center'>Sean Dela Cruz</h1>

      </BoxedDiv>

      <BoxedDiv>

        <h1 className='ResponsiveTextBase ResponsiveFontThin text-center'>seandelac112345@gmail.com</h1>
        
      </BoxedDiv>

      <BoxedDiv>

        <div className='flex flex-row justify-center'>

          <div className={tab === 'Skills' ? active : inactive} onClick={() => setTab('Skills')}>
              <h3 className='ButtonText'>Skills</h3>
          </div>

          <div className={tab === 'Projects' ? active : inactive} onClick={() => setTab('Projects')}>
              <h3 className='ButtonText'>Projects</h3>
          </div>

          <div className={tab === 'About' ? active : inactive} onClick={() => setTab('About')}>
              <h3 className='ButtonText'>About</h3>
          </div>
          
        </div>

      </BoxedDiv>

      {tab === 'Skills' && <Skills/>}

      {tab === 'Projects' && <Projects/>}

      {tab === 'About' && <About/>}

    </BoxedDivWithDelayContainer>
)
}