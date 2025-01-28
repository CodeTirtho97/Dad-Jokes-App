import React, { useState } from "react";
import "./Joke.css";

function Joke({ text, favorite, pin, unpin, remove }) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset message after 2 seconds
    });
  };

  return (
    <div className="Joke">
      <div className="Joke-text">{text}</div>

      <div className="Joke-buttons">
        {favorite && <button className="favorite" onClick={favorite}>⭐ Favorite</button>}
        <button className="copy" onClick={copyToClipboard}>
          📋 {copied ? "Copied!" : "Copy"}
        </button>
        {pin && <button className="pin" onClick={pin}>📌 Pin</button>}
        {unpin && <button className="unpin" onClick={unpin}>🚫 Unpin</button>}
        {remove && <button className="remove" onClick={remove}>🗑 Remove</button>}
      </div>
    </div>
  );
}

export default Joke;
