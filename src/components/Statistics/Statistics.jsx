import PropTypes from 'prop-types';
import statistic from '../Statistics/Statistics.module.css';
import { Component } from 'react';

class Statistics extends Component {
  changeColor = () => {
    const { positivePercentage } = this.props;
    if (positivePercentage > 70) {
      return statistic.good_percentage;
    } else if (positivePercentage < 40) {
      return statistic.bad_percentage;
    } else {
      return statistic.normal_percentage;
    }
  };

  render() {
    const { good, neutral, bad, total, positivePercentage } = this.props;

    return (
      <>
        <div className={statistic.statistic}>
          <p className={statistic.feedback}>Good: {good}</p>
          <p className={statistic.feedback}>Neutral: {neutral}</p>
          <p className={statistic.feedback}>Bad: {bad}</p>
        </div>
        <p className={statistic.total}>Total: {total}</p>
        <p>
          Positive feedback:{' '}
          <span className={this.changeColor()}>{positivePercentage}%</span>
        </p>
      </>
    );
  }
}

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.string,
};

export { Statistics };
