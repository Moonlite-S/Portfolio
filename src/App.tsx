import './App.css'
import BoxedDiv from './components/Misc'
import Skills from './components/Skills'

function App() {
  return (
    <div className='h-screen bg-slate-900 py-20'>

      <BoxedDiv>
          <h1 className='text-center text-slate-900'>Sean Dela Cruz</h1>
      </BoxedDiv>

      <BoxedDiv>
        <h1 className='text-center text-slate-900'>An aspiring full stack developer from good ol' Texas</h1>
      </BoxedDiv>

      <BoxedDiv>
        <div className=' flex flex-row justify-center'>

          <div className='px-5 border-r-2 border-slate-700'>
              Skills
          </div>
          <div className='px-5 border-r-2 border-slate-700'>
              Projects
          </div>
          <div className='px-5'>
              About
          </div>
          
        </div>
      </BoxedDiv>

    <Skills/>

    </div>
  )
}

export default App