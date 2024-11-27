import React, { useState } from "react";
import "../css/Mainpage.css";
import Box from "../components/Box";
const Mainpage = () => {
  const [toShowRules, setToShowRules] = useState(false);
  const [score, setScore] = useState(0);
  const [selectedNumber, setSelectedNumber] = useState();
  const [imageNum, setImageNum] = useState(1);
  const [isSpinning, setIsSpinning] = useState(false);

  const selectHandler = (value) => setSelectedNumber(value);
  const randomNum = () => Math.floor(Math.random() * 6) + 1;
  const rollDice = () => {
    if (selectedNumber === undefined) {
      alert("Select any number");
      return;
    }
    setIsSpinning(true);
    setTimeout(() => {
      setImageNum(randomNum());
      if (selectedNumber == imageNum) {
        setScore((prev) => prev + selectedNumber);
        setSelectedNumber(undefined);
        // console.log(score);
      } else {
        setScore((prev) => prev - Math.floor(selectedNumber / 2));
        setSelectedNumber(undefined);
      }
      setIsSpinning(false);
    }, 500);
  };

  const numArr = [1, 2, 3, 4, 5, 6];

  return (
    <div className='conatiner'>
      <header>
        <div className='total-score'>
          <h2>{score}</h2>
          <h3>Total Score</h3>
        </div>

        <div className='box-numbers'>
          <div className='boxes'>
            {numArr.map((value, index) => {
              return (
                <Box
                  key={index}
                  value={value}
                  onClick={() => selectHandler(value)}
                  isSelected={selectedNumber === value}
                />
              );
            })}
          </div>
          <div>
            {selectedNumber ? (
              <p className='selected'>
                Your guess is: <span>{selectedNumber}</span>
              </p>
            ) : null}
          </div>
        </div>
      </header>
      <div className='main-body'>
        <img
          className={`dice ${isSpinning ? "spinning" : ""}`}
          src={`/dice_${imageNum || 1}.png`}
          alt=''
          srcset=''
          onClick={() => rollDice()}
        />
        <p>Click on dice to roll</p>
        <button onClick={() => setScore(0)}>Reset Score</button>
        <button onClick={() => setToShowRules(!toShowRules)}>Show rules</button>
      </div>
      <div className={toShowRules ? "rules show" : "rules"}>
        <h2>How to play dice game?</h2>
        <p>
          Select any number <br />
          Create on dice image <br />
          After click on dice , if selected number is equal to dice number you
          will get same points! If your guess is wrong half points of it will be
          dedcuted!
        </p>
      </div>
    </div>
  );
};

export default Mainpage;
