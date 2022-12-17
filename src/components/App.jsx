import { useState } from 'react';
import { FeedbackOptions } from './Feedback/FeedbackOptions';
import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';
import css from './App.module.css';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = state => {
    if (state === 'good') {
      setGood(prevState => prevState + 1);
    }
    if (state === 'neutral') {
      setNeutral(prevState => prevState + 1);
    }
    if (state === 'bad') {
      setBad(prevState => prevState + 1);
    }
  };

  const totalCount = () => {
    return good + neutral + bad;
  };

  const positivePercentage = () => {
    if (totalCount() > 0) {
      return ((good * 100) / totalCount()).toFixed(0);
    } else {
      return 0;
    }
  };

  let options = {
    good: good,
    neutral: neutral,
    bad: bad,
  };

  return (
    <>
      <div className={css.container}>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(options)}
            onLeaveFeedback={onLeaveFeedback}
          />
        </Section>
        <Section title="Statistics">
          {totalCount() > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={totalCount}
              positivePercentage={positivePercentage}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </div>
    </>
  );
};
