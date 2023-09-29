import React from "react";

function App() {
  //1 - variáveis
  const name: string = "Julião";
  const isWorking: boolean = true;
  return (
    <div className='App'>
      <h1>{name}</h1>
      {isWorking && <p>Está trabalhando</p>}
    </div>
  );
}

export default App;
