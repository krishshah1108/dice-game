import React, { useState } from "react";
import "../css/Mainpage.css";
import Box from "../components/Box";
const Mainpage = () => {
  const [toShowRules, setToShowRules] = useState(false);
  const numArr = [1, 2, 3, 4, 5, 6];
  const [score, setScore] = useState(4);
  const [selectedNumber, setSelectedNumber] = useState();
  const selectHandler = (value) => {
    setSelectedNumber(value);
  };
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
            ) : (
              <p className='err-msg'>Please select number</p>
            )}
          </div>
        </div>
      </header>
      <div className='main-body'>
        <img src='/dice_1.png' alt='' srcset='' />
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
          will get same points! If your guess is wrong 2 points will be
          dedcuted!
        </p>
      </div>
    </div>
  );
};

export default Mainpage;
