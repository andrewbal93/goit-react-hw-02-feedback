import React, { Component } from 'react';
import FeedbackOptions from 'components/Feedback/FeedbackOptions';
import Statistics from 'components/Statistic/Statistics';
import Section from 'components/Section/Section';
import Notification from 'components/Notification/Notification';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      ratings: { good: 0, neutral: 0, bad: 0 },
    };
  }

  handleRatingClick = rating => {
    this.setState(prevState => ({
      ratings: {
        ...prevState.ratings,
        [rating]: prevState.ratings[rating] + 1,
      },
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state.ratings;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const totalFeedback = this.countTotalFeedback();
    return totalFeedback === 0
      ? 0
      : Math.round((this.state.ratings.good / totalFeedback) * 100);
  };

  render() {
    const { ratings } = this.state;
    const hasFeedback = this.countTotalFeedback() > 0;

    return (
      <div className="app-container">
        <Section title="Please leave feedback" className="temp">
          <FeedbackOptions
            options={Object.keys(ratings)}
            onLeaveFeedback={this.handleRatingClick}
          />
        </Section>

        <Section title="Statistics" className="statistics">
          {hasFeedback ? (
            <Statistics
              good={ratings.good}
              neutral={ratings.neutral}
              bad={ratings.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </div>
    );
  }
}

export default App;
