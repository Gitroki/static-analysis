import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

type HeaderProps = {
  title: string;
  numberInTitle: string;
}
type FooterProps = {
  endText: string;
}
type ApiResponse = {
  id: number;
  name: string;
  status: string,
  species: string,
  image: string;
}

const Header = ({title, numberInTitle}: HeaderProps): JSX.Element => {
  return (<div>{title} {numberInTitle}</div>)
}

const Footer = ({endText}:FooterProps): JSX.Element => {
  return (
  <div>{endText}</div>
  )
}



function App() {
  const [count, setCount] = useState(0);

  
  const [charakters, setCharakters] = useState<ApiResponse[]>([])

  useEffect(()=>{
    fetch("https://rickandmortyapi.com/api/character?page=1")
    .then (response => response.json())
    .then (data => setCharakters(data.results))
  }, [])

 

  return (
    <>
      <div>
        <Header title="Nagłówek" numberInTitle="jakis dss" />
        {charakters.map((character)=>{
          return(<div>
            {character.name}
          </div>)
        })}
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <div>
      <Footer endText="Koniec" />
      
      </div>
    </>
  );
}

export default App;
