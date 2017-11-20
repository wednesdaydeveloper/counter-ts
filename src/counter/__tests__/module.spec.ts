import reducer, {CounterState, increment, decrement} from "../module";

describe('counter/module', () => {
  it('counter/increment', () => {
    const state: CounterState = {num: 4, loadingCount: 0};
    const result = reducer(state,  increment(3));
    expect(result.num).toBe(state.num + 3);
    expect(result.loadingCount).toBe(state.loadingCount);
  });

  it('counter/decrement', () => {
    const state: CounterState = {num: 4, loadingCount: 0};
    const result = reducer(state, decrement(3));
    expect(result.num).toBe(state.num - 3);
    expect(result.loadingCount).toBe(state.loadingCount);
  });
})