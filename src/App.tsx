import React from "react";
import FirstComponent from "./components/FirstComponent";
import { SecondComponent } from "./components/SecondComponent";
import { Category, DesestruturacaoComponent } from "./components/DesestruturacaoProp";
import { State } from "./components/State";

function App() {
  //1 - variáveis
  const name: string = "Julião";
  const isWorking: boolean = true;
  //2 - funções
  const userGreeting = (name: string): string => {
    return `Olá, ${name}`;
  };
  //6 - useState
  return (
    <div className='App'>
      <h1>{name}</h1>
      {isWorking && <p>Está trabalhando</p>}
      <h3>{userGreeting("Jotinha")}</h3>
      <FirstComponent />
      <SecondComponent name='Jubilao' />
      <DesestruturacaoComponent
        title='Primeiro Post'
        content='lorem Ipsum'
        commentsQty={10}
        tags={["ts", "react", "props", "props desestruturado"]}
        category={Category.JS}
      />
      <State />
    </div>
  );
}

export default App;
