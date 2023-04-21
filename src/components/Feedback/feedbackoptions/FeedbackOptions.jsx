import React from 'react';
import PropTypes from 'prop-types';
import { Button, List, ListEl } from './FeedbackOptions.styled';

export default function FeedbackOptions({ buttonClick }) {
  return (
    <List>
      <ListEl>
        <Button type="button" onClick={buttonClick}>
          Good
        </Button>
      </ListEl>
      <ListEl>
        <Button type="button" onClick={buttonClick}>
          Neutral
        </Button>
      </ListEl>
      <ListEl>
        <Button type="button" onClick={buttonClick}>
          Bad
        </Button>
      </ListEl>
    </List>
  );
}

FeedbackOptions.propTypes = {
  buttonClick: PropTypes.func.isRequired,
};
