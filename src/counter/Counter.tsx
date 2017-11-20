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
          <RaisedButton label="Increment 3"       onClick={() => props.onIncrement(3)}      />
          <RaisedButton label="Increment 2"       onClick={() => props.onDecrement(2)}      />
          <RaisedButton label="Increment 3 Async" onClick={() => props.onIncrementAsync(3)} />
          <RaisedButton label="Increment 3 Async" onClick={() => props.onDecrementAsync(2)} />
        </div>
      );
};
export default Counter;