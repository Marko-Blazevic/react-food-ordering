import React from 'react';
import classes from './MealItemForm.module.css';
import Input from '../../UI/Input';

const MealItemForm = (props) => {
  return (
    <div className={classes.form}>
      <Input
        label='Amount'
        input={{
          id: 'amount_' + props.id,
          type: 'number',
          min: '0',
          step: '1',
        }}
      />
      <button>+ Add</button>
    </div>
  );
};

export default MealItemForm;
