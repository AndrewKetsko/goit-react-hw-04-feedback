import { useState } from 'react';
import { Feedback } from './Feedback/Feedback';

export const App = () => {
  const [good, setgood] = useState(0);
  const [neutral, setneutral] = useState(0);
  const [bad, setbad] = useState(0);

  return (
    <Feedback
      state={{ good, neutral, bad }}
      useStateFunc={{ setgood, setneutral, setbad }}
    />
  );
};
