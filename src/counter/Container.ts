import Counter, { StateProps, DispatchProps } from './Counter';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import * as Module from './module';

function incrementAsync(num: number) {
  return (dispatch: Dispatch<Module.CounterDispatchType>) => {
    dispatch(Module.fetchRequestStart());
    setTimeout(
      () => {
        dispatch(Module.increment(num));
        dispatch(Module.fetchRequestFinish());
      }, 
      2000);
  };
}

function decrementAsync(num: number) {
  return (dispatch: Dispatch<Module.CounterDispatchType>) => {
    dispatch(Module.fetchRequestStart());
    setTimeout(
      () => {
        dispatch(Module.decrement(num));
        dispatch(Module.fetchRequestFinish());
      }, 
      2000);
  };
}

function mapStateToProps(state: Module.CounterState): StateProps {
  return {
    num: state.num,
    loadingCount: state.loadingCount,
  };
}

function mapDispatchToProps(dispatch: Dispatch<Module.CounterDispatchType>): DispatchProps {
  return {
    onIncrement: (num: number) => dispatch(Module.increment(num)),
    onDecrement: (num: number) => dispatch(Module.decrement(num)),
    onIncrementAsync: (num: number) => dispatch(incrementAsync(num)),
    onDecrementAsync: (num: number) => dispatch(decrementAsync(num)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Counter);