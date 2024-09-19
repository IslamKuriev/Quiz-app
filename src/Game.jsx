import { useState } from "react";
import { questions } from "./data";

function Game({ question, handleIncStep, step }) {
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [isAnswerSelected, setIsAnswerSelected] = useState(false);
  
    const handleAnswerClick = (index) => {
      if (isAnswerSelected) return; // Блокировка повторных кликов
  
      setSelectedAnswer(index);
      setIsAnswerSelected(true); // Блокируем после выбора ответа
  
      setTimeout(() => {
        handleIncStep(index);
        setSelectedAnswer(null); 
        setIsAnswerSelected(false); 
      }, 400); // Задержка для отображения правильного/неправильного класса
    };
  
    const progress__bar = (step / questions.length) * 100;
  
    return (
      <>
        <div className="progress">
          <div
            style={{ width: `${progress__bar}%` }}
            className="progress__inner"
          ></div>
        </div>
        <h1>{question.title}</h1>
        <ul>
          {question.variants.map((v, i) => {
            let className;
            if (selectedAnswer === i) {
              className = question.correct === i ? "effect__true" : "effect__false";
            }
            return (
              <li
                className={className}
                key={i}
                onClick={() => handleAnswerClick(i)}
              >
                {v}
              </li>
            );
          })}
        </ul>
      </>
    );
  }
export default Game