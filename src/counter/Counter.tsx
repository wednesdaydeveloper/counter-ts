import * as React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

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
          <RaisedButton onClick={() => props.onIncrement(3)} label="Increment 3"/>
          <RaisedButton onClick={() => props.onDecrement(2)} label="Increment 2"/>
          <RaisedButton onClick={() => props.onIncrementAsync(3)}label="Increment 3 Async"/>
          <RaisedButton onClick={() => props.onDecrementAsync(2)}label="Increment 3 Async"/>
        </div>
      );
};
export default Counter;