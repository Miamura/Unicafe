import { useState } from "react";

const Statistics = ({ good, neutral, bad, total, average, positive }) => (
  <>
    <div>good: {good}</div>
    <div>neutral: {neutral}</div>
    <div>bad: {bad}</div>
    <div>all: {total}</div>
    <div>average: {average}</div>
    <div>positive: {positive} %</div>
  </>
);

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const total = good + neutral + bad;
  const average = total ? (good - bad) / total : 0;
  const positive = total ? (good / total) * 100 : 0;

  const handleFeedback = (type) => {
    if (type === "good") setGood(good + 1);
    if (type === "neutral") setNeutral(neutral + 1);
    if (type === "bad") setBad(bad + 1);
  };

  let content;
  if (total === 0) {
    content = <p>No feedback given</p>;
  } else {
    content = (
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        total={total}
        average={average}
        positive={positive}
      />
    );
  }

  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={() => handleFeedback("good")}>good</button>
      <button onClick={() => handleFeedback("neutral")}>neutral</button>
      <button onClick={() => handleFeedback("bad")}>bad</button>
      <h1>statistics</h1>
      {content}
    </div>
  );
};

export default App;

/*if (good === 0 && neutral === 0 && bad === 0) {
    return <p>No feedback given</p>;
  } else {
    return (
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        total={total}
        average={average}
        positive={positive}
      />
    );
  }
  */
/**import { useState } from "react";

const Statistics = ({ good, neutral, bad, total, average, positive }) => (
  <>
    <div>good: {good}</div>
    <div>neutral: {neutral}</div>
    <div>bad: {bad}</div>
    <div>all: {total}</div>
    <div>average: {average}</div>
    <div>positive: {positive} %</div>
  </>
);

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const total = good + neutral + bad;
  const average = total ? (good - bad) / total : 0;
  const positive = total ? (good / total) * 100 : 0;

  const handleFeedback = (type) => {
    if (type === "good") setGood(good + 1);
    if (type === "neutral") setNeutral(neutral + 1);
    if (type === "bad") setBad(bad + 1);
  };

  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={() => handleFeedback("good")}>good</button>
      <button onClick={() => handleFeedback("neutral")}>neutral</button>
      <button onClick={() => handleFeedback("bad")}>bad</button>
      <h1>statistics</h1>

   {good === 0 && neutral === 0 && bad === 0 ? (
        <p>No feedback given</p>
      ) : (
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          average={average}
          positive={positive}
        />
      )}
    </div>
  );
}; */

/*
import { useState } from "react";

const Statistics = (props) => {
  return (
    <>
      <div>good: {props.good}</div>
      <div>neutral: {props.neutral}</div>
      <div>bad: {props.bad}</div>
      <div>all: {props.total}</div>
      <div>average: {props.average}</div>
      <div>positive: {props.positive} %</div>
    </>
  );
};

const App = (props) => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [average, setAverage] = useState(0);
  const [positive, setPositive] = useState(0);
  const [total, setTotal] = useState(0);

  const handleClicksetGood = () => {
    console.log("clicked the button");
    const uptadedgood = good + 1;
    setGood(good + 1);
    setTotal(uptadedgood + neutral + bad);
    setAverage(
      (uptadedgood * 1 + neutral * 0 + bad * -1) / (uptadedgood + neutral + bad)
    );
    setPositive((uptadedgood / (uptadedgood + neutral + bad)) * 100);
  };

  const handleClicksetNeutral = () => {
    console.log("clicked the button");
    const uptadedneutral = neutral + 1;
    setNeutral(neutral + 1);
    setTotal(good + uptadedneutral + bad);
    setAverage(
      (uptadedneutral * 0 + good * 1 + bad * -1) / (uptadedneutral + good + bad)
    );
    setPositive((good / (good + uptadedneutral + bad)) * 100);
  };

  const handleClicksetBad = () => {
    console.log("clicked the button");
    const uptadedbad = bad + 1;
    setBad(bad + 1);
    setTotal(good + neutral + uptadedbad);
    setAverage(
      (good * 1 + neutral * 0 + uptadedbad * -1) / (good + neutral + uptadedbad)
    );
    setPositive((good / (good + neutral + uptadedbad)) * 100);
  };

  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={handleClicksetGood}>good</button>
      <button onClick={handleClicksetNeutral}>neutral</button>
      <button onClick={handleClicksetBad}>bad</button>
      <h1>statistics</h1>
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        average={average}
        positive={positive}
        total={total}
      />
    </div>
  );
};

export default App;
*/
