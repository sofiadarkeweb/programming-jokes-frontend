import "./App.css";
import Jokes from "./components/Jokes";
import JokesForm from "./components/JokesForm";
import Statistics from "./components/Statistics";
import { getJokes } from "./components/api";
import { useState, useEffect } from "react";

function App() {
  const [type, setType] = useState("single");
  const [amount, setAmount] = useState(10);
  const [jokes, setJokes] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();
  }

  useEffect(() => {
    async function fetchJokes() {
      const data = await getJokes(type, amount);
      setJokes(data);
    }
    fetchJokes();
  }, [type, amount]);

  return (
    <div className="page">
      <div className="content">
        <h1>Jokes</h1>
        <JokesForm
          type={type}
          setType={setType}
          amount={amount}
          setAmount={setAmount}
          handleSubmit={handleSubmit}
        />
        <Jokes type={type} amount={amount} jokes={jokes} />
        <Statistics jokes={jokes} />
      </div>
    </div>
  );
}

export default App;
