import React from "react";

interface Props {
  name: string;
}
//props basicamente é um objeto
export function SecondComponent(props: Props) {
  return (
    <div>
      <p>Seja bem vindo {props.name}</p>
    </div>
  );
}
