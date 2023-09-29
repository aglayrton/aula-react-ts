import * as React from "react";

//Props mas de forma desestruturada
export interface IAppProps {
  title: string;
  content: string;
  commentsQty: number;
  tags: string[];
}

export function DesestruturacaoComponent({ title, content, commentsQty, tags }: IAppProps) {
  return (
    <div>
      <h1>{title}</h1>
      <p>{content}</p>
      <p>Comments: {commentsQty}</p>
      <ul>
        {tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    </div>
  );
}
