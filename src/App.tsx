import './App.css'
import { Panel } from './components/Panel'
import { TopBar } from './components/TopBar'

function App() {
  return (
    <>
        <TopBar/>
        <Panel 
          text={{
            title:"About Me",
            body:"Ho"}}
          picture={'Some URL'}
          align='Left'
        />
        <h2>Now some projects I've done.</h2>
        <Panel
          text={{
            title:"Vert Bot - A Discord Bot",
            body:"A fun little never-ending bot."}}
          picture={'Another URL'}
          align='Right'
        />
    </>
  )
}

export default App
