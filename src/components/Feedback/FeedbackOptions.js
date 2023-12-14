import './Feedback.css';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <div className="btn-div">
      {options.map(option => (
        <button
          key={option}
          className="feedback-btn"
          onClick={() => onLeaveFeedback(option)}
        >
          {option.charAt(0).toUpperCase() + option.slice(1)}
        </button>
      ))}
    </div>
  );
}
