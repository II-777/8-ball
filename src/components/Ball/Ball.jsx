import { useState } from 'react';
import css from './Ball.module.css';
import EmptyBall from '../../img/EmptyBall.webp';
import Triangle from '../../img/Triangle.webp';

const answers = {
  affirmative: [
    "It is certain",
    "It is decidedly so",
    "Without a doubt",
    "Yes definitely",
    "You may rely\non it",
    "As I see it,\nyes",
    "Most likely",
    "Outlook\ngood",
    "Yes",
    "Signs point to yes"
  ],
  nonCommittal: [
    "Reply hazy",
    "Ask again\nlater",
    "Better not tell you now",
    "Cannot predict now",
    "Concentrate\nand ask again"
  ],
  negative: [
    "Try again",
    "My reply is no",
    "My sources say no",
    "Outlook not so good",
    "Very doubtful"
  ]
};

const getRandomAnswer = () => {
  const totalAnswers = Object.values(answers).flat();
  const randomIndex = Math.floor(Math.random() * totalAnswers.length);
  const answer = totalAnswers[randomIndex];

  return answer.split('\n').map((line, index) => (
    <span key={index}>
      {line}
      <br />
    </span>
  ));
};

function Ball() {
  const [answer, setAnswer] = useState("");
  const [isShaking, setIsShaking] = useState(false);

  const shakeBall = () => {
    setIsShaking(true);
    setAnswer("");

    setTimeout(() => {
      setAnswer(getRandomAnswer());
      setIsShaking(false);
    }, 500);
  };

  return (
    <div className={`${css.background} ${isShaking ? css.shake : ''}`} style={{ backgroundImage: `url(${EmptyBall})` }}>
      <div
        className={`${css.window} ${isShaking ? css.shake : ''}`}
        onClick={shakeBall}
      >
        <div className={`${css.triangle} ${isShaking ? `${css.blur} ${css.shake}` : ''}`} style={{ backgroundImage: `url(${Triangle})` }}>
          <div className={`${css.answer} ${isShaking ? css.blur : ''}`}>
            {answer || "Ask a question..."}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ball;
