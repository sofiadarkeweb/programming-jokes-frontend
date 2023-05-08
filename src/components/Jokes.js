import React, { useState, useEffect } from "react";

function Jokes(props) {
  const [typeWording, setTypeWording] = useState("single");
  function BoldWordsWithA(text) {
    const words = text.split(/\b/);
    const boldWords = words.map((word, index) => {
      if (word.includes("a" || "A")) {
        return <b key={index}>{word.trim()}</b>;
      }
      return <span key={index}>{word}</span>;
    });
    return <div>{boldWords}</div>;
  }

  useEffect(() => {
    if (props.type === "single") {
      setTypeWording("single line");
    } else if (props.type === "twopart") {
      setTypeWording("two-part");
    } else {
      setTypeWording("singel and two-part");
    }
  }, [props.type]);

  return (
    <div>
      <h2>{`${props.jokes.length} ${typeWording} jokes`}</h2>
      <div className="jokes">
        {props.jokes.map((joke, index) => {
          if (joke.type === "twopart") {
            return (
              <div className="joke" key={index}>
                <div>{BoldWordsWithA(joke.setup)}</div>
                <div>{BoldWordsWithA(joke.delivery)}</div>
                <p className="category">Category: {joke.category}</p>
              </div>
            );
          } else {
            return (
              <div className="joke" key={index}>
                <div>{BoldWordsWithA(joke.joke)}</div>
                <p className="category">Category: {joke.category}</p>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}

export default Jokes;
