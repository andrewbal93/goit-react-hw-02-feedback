import React, { useState } from 'react';
import FeedbackOptions from 'components/Feedback/FeedbackOptions';
import Statistics from 'components/Statistic/Statistics';
import Section from 'components/Section/Section';
import Notification from 'components/Notification/Notification';

import './App.css';

export default function App() {
  const [ratings, setRatings] = useState({ good: 0, neutral: 0, bad: 0 });

  const handleRatingClick = rating => {
    setRatings(prevRatings => ({
      ...prevRatings,
      [rating]: prevRatings[rating] + 1,
    }));
  };

  const countTotalFeedback = () => ratings.good + ratings.neutral + ratings.bad;

  const countPositiveFeedbackPercentage = () => {
    const totalFeedback = countTotalFeedback();
    return totalFeedback === 0
      ? 0
      : Math.round((ratings.good / totalFeedback) * 100);
  };

  const hasFeedback = countTotalFeedback() > 0;

  return (
    <div className="app-container">
      <Section title="Please leave feedback" className="temp">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={handleRatingClick}
        />
      </Section>

      <Section title="Statistics" className="statistics">
        {hasFeedback ? (
          <Statistics
            good={ratings.good}
            neutral={ratings.neutral}
            bad={ratings.bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </div>
  );
}
