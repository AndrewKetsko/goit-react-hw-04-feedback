import { useState } from 'react';
import { Feedback } from './Feedback/Feedback';

const state = {
  good: 0,
  neutral: 0,
  bad: 0,
};

export const App = () => {
  // const [good, setGood] = useState(0);
  // const [neutral, setNeutral] = useState(0);
  // const [bad, setBad] = useState(0);

  return (
    <div
      style={
        {
          // height: '100vh',
          // display: 'flex',
          // justifyContent: 'center',
          // alignItems: 'center',
          // fontSize: 40,
          // color: '#010101'
        }
      }
    >
      <Feedback state={state} />
    </div>
  );
};
