import React from "react";
import NewsCard from "./NewsCard";

export default function LeftNewsList({ items }) {
  return (
    <div className="left-list">
      {items.map((it) => (
        <NewsCard key={it.id} {...it} />
      ))}
    </div>
  );
}
