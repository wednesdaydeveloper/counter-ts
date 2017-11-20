import Counter, { StateProps, DispatchProps } from './Counter';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import * as Module from './module';

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
    onIncrementAsync: (num: number) => dispatch(Module.incrementAsync(num)),
    onDecrementAsync: (num: number) => dispatch(Module.decrementAsync(num)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Counter);