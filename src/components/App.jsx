import { Component } from 'react';
import { FeedbackOptions } from './Feedback/FeedbackOptions';
import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';
import css from './App.module.css';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = state => {
    this.setState(prevState => ({
      [state]: prevState[state] + 1,
    }));
  };

  totalCount = state => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  positivePercentage = state => {
    const { good } = this.state;
    if (this.totalCount(this.state) > 0) {
      return ((+good * 100) / +this.totalCount(this.state)).toFixed(0);
    } else {
      return 0;
    }
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <>
        <div className={css.container}>
          <Section title="Please leave feedback">
            <FeedbackOptions
              options={Object.keys(this.state)}
              onLeaveFeedback={this.onLeaveFeedback}
            />
          </Section>
          <Section title="Statistics">
            {this.totalCount(this.state) > 0 ? (
              <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                total={this.totalCount(this.state)}
                positivePercentage={this.positivePercentage(this.state)}
              />
            ) : (
              <Notification message="There is no feedback" />
            )}
          </Section>
        </div>
      </>
    );
  }
}
