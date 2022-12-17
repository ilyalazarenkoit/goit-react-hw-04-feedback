import PropTypes from 'prop-types';
import feedback from '../Feedback/FeedbackOptions.module.css';

const FeedbackOptions = ({ onLeaveFeedback, options }) => {
  return (
    <div className={feedback.button_wrapper}>
      {options.map(option => {
        return (
          <button
            onClick={() => onLeaveFeedback(option)}
            key={option}
            name={option}
            className={feedback.button}
          >
            {option[0].toUpperCase() + option.slice(1, option.length)}
          </button>
        );
      })}
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedBack: PropTypes.func,
};

export { FeedbackOptions };
