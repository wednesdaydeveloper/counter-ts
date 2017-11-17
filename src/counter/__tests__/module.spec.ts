import reducer, {CounterState, increment, decrement, fetchRequestStart, fetchRequestFinish} from "../module";

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

  it('counter/fetch_request_start', () => {
    const state: CounterState = {num: 4, loadingCount: 123};
    const result = reducer(state, fetchRequestStart());
    expect(result.num).toBe(state.num);
    expect(result.loadingCount).toBe(state.loadingCount + 1);
  });

  it('counter/fetch_request_finish', () => {
    const state: CounterState = {num: 4, loadingCount: 0};
    const result = reducer(state, fetchRequestFinish());
    expect(result.num).toBe(state.num);
    expect(result.loadingCount).toBe(state.loadingCount - 1);
  });


})