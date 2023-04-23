import React, { useState } from 'react';
import FeedbackOptions from './feedbackoptions/FeedbackOptions';
import Statistics from './statistics/Statistics';
import Section from './section/Section';
import Notification from './notification/Notification';
import PropTypes from 'prop-types';

export const Feedback = ({ state, useStateFunc }) => {
  const [total, setTotal] = useState(0);

  const buttonClick = e => {
    useStateFunc['set' + e.currentTarget.innerHTML](prev => prev + 1);
    setTotal(prev => prev + 1);
  };

  const countPositiveFeedbackPercentage = () =>
    total === 0 ? 0 : Math.floor((state.good * 100) / total);

  return (
    <>
      <Section
        title={'Please leave feedback'}
        children={
          <FeedbackOptions
            buttonClick={buttonClick}
            options={Object.keys(state)}
          />
        }
      />

      <Section
        title={'Statistics'}
        children={
          total > 0 ? (
            <Statistics
              state={state}
              total={total}
              countPositiveFeedbackPercentage={countPositiveFeedbackPercentage}
            />
          ) : (
            <Notification message={'There is no feedback'} />
          )
        }
      />
    </>
  );
};

Feedback.propTypes = {
  state: PropTypes.object.isRequired,
  useStateFunc: PropTypes.object.isRequired,
};
