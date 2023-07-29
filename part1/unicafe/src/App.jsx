import { useState } from "react";

const Statistics = ({ all }) => {
  const average = (all.good - all.bad) / all.total;
  const positive = (all.good / all.total) * 100;

  if (all.total === 0) {
    return (
      <div>
        <h2>statistics</h2>
        <p>No feedback given</p>
      </div>
    );
  }

  return (
    <table>
      <thead>
        <tr>
          <th>
            <h2>statistics</h2>
          </th>
        </tr>
      </thead>

      <tbody>
        <StatisticLine text="good" stat={all.good} />
        <StatisticLine text="neutral" stat={all.neutral} />
        <StatisticLine text="bad" stat={all.bad} />
        <StatisticLine text="all" stat={all.total} />
        <StatisticLine text="average" stat={average} />
        <StatisticLine text="positive" stat={positive} />
      </tbody>

    </table>
  );
};
const Button = ({ text, func }) => {
  return <button onClick={func}>{text}</button>;
};
const StatisticLine = ({ text, stat }) => {
  const percent = text === "positive" ? "%" : null;

  return (
    <tr>
      <td>{text}</td>
      <td>{stat} {percent}</td>
    </tr>
  );
};

const App = () => {
  const [all, setAll] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
  });

  const handleGood = () => {
    const updatedGood = {
      ...all,
      good: all.good + 1,
    };
    const updatedAll = {
      ...updatedGood,
      total: updatedGood.good + updatedGood.neutral + updatedGood.bad,
    };
    setAll(updatedAll);
  };
  const handleNeutral = () => {
    const updatedNeutral = {
      ...all,
      neutral: all.neutral + 1,
    };
    const updatedAll = {
      ...updatedNeutral,
      total: updatedNeutral.good + updatedNeutral.neutral + updatedNeutral.bad,
    };
    setAll(updatedAll);
  };
  const handleBad = () => {
    const updatedBad = {
      ...all,
      bad: all.bad + 1,
    };
    const updatedAll = {
      ...updatedBad,
      total: updatedBad.good + updatedBad.neutral + updatedBad.bad,
    };
    setAll(updatedAll);
  };

  return (
    <div>
      <h1>give feedback</h1>
      <Button text="good" func={handleGood} />
      <Button text="neutral" func={handleNeutral} />
      <Button text="bad" func={handleBad} />
      <Statistics all={all} />
    </div>
  );
};

export default App;
