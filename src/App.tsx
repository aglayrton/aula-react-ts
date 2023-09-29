import React from "react";
import FirstComponent from "./components/FirstComponent";
import { SecondComponent } from "./components/SecondComponent";
import { DesestruturacaoComponent } from "./components/DesestruturacaoProp";

function App() {
  //1 - variáveis
  const name: string = "Julião";
  const isWorking: boolean = true;
  //2 - funções
  const userGreeting = (name: string): string => {
    return `Olá, ${name}`;
  };
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
      />
    </div>
  );
}

export default App;
