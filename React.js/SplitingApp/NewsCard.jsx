import React from "react";

export default function NewsCard({ badge, title, excerpt, time }) {
  return (
    <div className="news-card">
      <div className="card-top">
        <span className="badge">{badge}</span>
      </div>

      <h3 className="card-title">{title}</h3>
      <p className="card-excerpt">{excerpt}</p>

      <div className="card-footer">
        <span className="time">{time}</span>
      </div>

      <div className="card-sep" />
    </div>
  );
}
