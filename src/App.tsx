import React from "react";

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
    </div>
  );
}

export default App;
