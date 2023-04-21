import { useState } from 'react';
import { Feedback } from './Feedback/Feedback';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <Feedback
      state={{ good, neutral, bad }}
      useStateFunc={{ setGood, setNeutral, setBad }}
    />
  );
};
