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
            url:"",
            body:"I'm a senior at University of Rio Grande Valley with a never-ending passion for coding and learning. I hope to learn many more frameworks and languages to expand my knowledge and skills.",
            skills:""}}
          picture={'Some URL'}
          align='Left'
        />
        <div className='showcase'>
          <h2>Now some projects I've done.</h2>
        </div>
        <Panel
          text={{
            title:"Vert Bot - A Discord Bot",
            url:"https://github.com/Moonlite-S/VertBot",
            body:"A never-ending personal project of mine that involves the popular social app Discord. Vert does various things from something as simple as playing rock paper scissors with her to more fun mini-games like hangman and an anime quiz. My most recent addition was adding a 'summon' simulator from the popular mobile video game, Honkai: Star Rail. It simulates obtaining a character from a huge list of characters like you would in the video game.",
            skills:"Python / Discord's API"}}
          picture={'Another URL'}
          align='Right'
        />
        <Panel
          text={{
            title:"YAAR - An Arknights Randomizer App",
            url:"https://github.com/Moonlite-S/YAAR--Yet-Another-Arknights-Randomizer-",
            body:"A small web app used for the popular mobile video game Arknights. The goal of the randomizer is to randomize a full squad of characters and a randomized map to use in their game. The user can tweak the settings to alter what kinds of characters and maps  that get randomized and what randomizer mode the user can choose from.",
            skills:"React"}}
          picture={'Another URL'}
          align='Left'
        />
        <Panel
          text={{
            title:"2D Bullet Hell Game",
            url:"https://github.com/UTRGV-CS-3370/midterm-game-nss",
            body:"A project for one of my classes involving a team of 4. The game plays like a bullet hell where you shoot around enemies while also dodging their bullets. The game features upgrades and powerups that the player can obtain through beating enemies. There's only a couple levels and it also features a boss at the end.",
            skills:"C# / Unity"}}
          picture={'Another URL'}
          align='Right'
        />
        <div className='ContactMe'>
            <h3>Contact Me!</h3>
        </div>
    </>
  )
}

export default App
