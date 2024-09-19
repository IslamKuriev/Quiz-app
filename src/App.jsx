import { useState } from "react";
import "./index.scss";
import { questions } from "./data";
import Game from "./Game";

function Result({ correct }) {
  return (
    <div className="result">
      <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" alt="Result icon" />
      <h2>
        Вы отгадали {correct} ответа из {questions.length}
      </h2>
      <button onClick={() => window.location.reload()}>Попробовать снова</button>
    </div>
  );
}

function App() {
  const [step, setStep] = useState(0);
  const [correct, setCorrect] = useState(0);
  const question = questions[step];

  const handleIncStep = (index) => {
    const isAnswerCorrect = question.correct === index;
    if (isAnswerCorrect) {
      setCorrect((prevCorrect) => prevCorrect + 1);
    }
    setStep((prevStep) => prevStep + 1);
  };

  return (
    <div className="App">
      {question && (
        <Game
          question={question}
          handleIncStep={handleIncStep}
          step={step}
        />
      )}
      {!question && <Result correct={correct} />}
    </div>
  );
}

export default App;