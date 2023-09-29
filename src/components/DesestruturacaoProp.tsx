import * as React from "react";

export enum Category {
  JS = "javascript",
  CSS = "css",
  HTML = "html",
}

//Props mas de forma desestruturada
export interface IAppProps {
  title: string;
  content: string;
  commentsQty: number;
  tags: string[];
  category: Category;
}

export function DesestruturacaoComponent({
  title,
  content,
  commentsQty,
  tags,
  category,
}: IAppProps) {
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
      <h4>{category}</h4>
    </div>
  );
}
