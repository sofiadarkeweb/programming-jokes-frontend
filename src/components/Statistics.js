import React, { useEffect, useState } from "react";

function Statistics(props) {
  const [summary, setSummary] = useState(0);
  const [mostCommonLetter, setMostCommonLetter] = useState("");

  useEffect(() => {
    const allJokes = props.jokes.reduce((acc, joke) => {
      if (joke.joke) {
        return acc + joke.joke;
      } else {
        return acc + joke.setup + joke.delivery;
      }
    }, "");

    const letterCount = {};
    for (let i = 0; i < allJokes.length; i++) {
      const letter = allJokes[i].toLowerCase();
      if (letter.match(/[a-z]/)) {
        letterCount[letter] = (letterCount[letter] || 0) + 1;
      }
    }

    let mostCommonLetter = "";
    let highestCount = 0;
    Object.entries(letterCount).forEach(([letter, count]) => {
      if (count > highestCount) {
        mostCommonLetter = letter;
        highestCount = count;
      }
    });

    const summary = allJokes.length;
    setSummary(summary);
    setMostCommonLetter(mostCommonLetter);
  }, [props.jokes, mostCommonLetter]);

  console.log("jokes", props.jokes);
  return (
    <div>
      <h2>Statistics</h2>
      <p>Total number of characters in the jokes: {summary}</p>
      <p>Most common letter is: {mostCommonLetter}</p>
    </div>
  );
}

export default Statistics;
