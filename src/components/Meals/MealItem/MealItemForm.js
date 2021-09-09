import React, { useRef, useState } from 'react';
import classes from './MealItemForm.module.css';
import Input from '../../UI/Input';

const MealItemForm = (props) => {
  const inputRef = useRef();
  const [inputAmountError, setInputAmountError] = useState(false);

  const onSubmitHandler = (event) => {
    event.preventDefault();
    const inputRefAmount = inputRef.current.value;
    const inputRefAmountNumber = +inputRefAmount;
    if (inputRefAmount.trim().length === 0) {
      setInputAmountError(true);
      return;
    }
    setInputAmountError(false);
    props.addItem(inputRefAmountNumber);
  };

  return (
    <form className={classes.form} onSubmit={onSubmitHandler}>
      <Input
        ref={inputRef}
        label='Amount'
        input={{
          id: 'amount_' + props.id,
          type: 'number',
          defaultValue: '1',
          min: '1',
          max: '10',
          step: '1',
        }}
      />
      <button>+ Add</button>

      {inputAmountError && (
        <p className={classes.error}>Please correct the Amount of your meal.</p>
      )}
    </form>
  );
};

export default MealItemForm;
