import React, { useState } from 'react';
import FeedbackOptions from './feedbackoptions/FeedbackOptions';
import Statistics from './statistics/Statistics';
import Section from './section/Section';
import Notification from './notification/Notification';

export const Feedback = ({state}) => {
  const [total, setTotal] = useState(
    Object.values(state).reduce((acc, value) => (acc += value), 0)
  );
  // state = {
  //     total: Object.values(this.props.state).reduce((acc, value) => acc += value, 0)
  // };

  const buttonClick = e => {
    state[e.currentTarget.innerHTML] += 1;
    setTotal(prev => prev + 1);
  };

  // countTotalFeedback = () => {
  //     // console.log(Object.values(this.props.state));
  //     Object.values(this.props.state).reduce((acc, value) => acc += value, 0);
  // }

  const countPositiveFeedbackPercentage = () =>
    total === 0
      ? 0
      : Math.floor((state.good * 100) / total);

  return (
    <>
      <Section
        title={'Please leave feedback'}
        children={<FeedbackOptions buttonClick={buttonClick} />}
      />

      <Section
        title={'Statistics'}
        children={
          total > 0 ? (
            <Statistics
              state={state}
              total={total}
              // countTotalFeedback={this.countTotalFeedback}
              countPositiveFeedbackPercentage={
                countPositiveFeedbackPercentage
              }
            />
          ) : (
            <Notification message={'There is no feedback'} />
          )
        }
      />
    </>
  );
};

// export default Feedback;
