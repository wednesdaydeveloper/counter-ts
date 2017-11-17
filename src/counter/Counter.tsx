import * as React from 'react';

export interface StateProps {
  num: number;
  loadingCount: number;
}

export interface DispatchProps {
    onIncrement: (num: number) => void;
    onDecrement: (num: number) => void;
    onIncrementAsync: (num: number) => void;
    onDecrementAsync: (num: number) => void;
}

const Counter = (props: StateProps & DispatchProps) => {
  return (
        <div>
          <p>{props.loadingCount === 0 ? '' : 'Loading...'}</p>
          <p>{`score: ${props.num}`}</p>
          <button onClick={() => props.onIncrement(3)}>Increment 3</button>
          <button onClick={() => props.onDecrement(2)}>Decrement 2</button>
          <button onClick={() => props.onIncrementAsync(3)}>Increment 3 Async</button>
          <button onClick={() => props.onDecrementAsync(2)}>Decrement 2 Async</button>
        </div>
      );
};
export default Counter;