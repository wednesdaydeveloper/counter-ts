import { createAction, handleActions, Action } from 'redux-actions';

const INCREMENT_NAME: string = 'counter/increment';
const DECREMENT_NAME: string = 'counter/decrement';
const FETCH_REQUEST_START_NAME: string = 'counter/fetch_request_start';
const FETCH_REQUEST_FINISH_NAME: string = 'counter/fetch_request_finish';

export const increment = createAction<number, number>(INCREMENT_NAME, (num: number) => num);
export const decrement = createAction<number, number>(DECREMENT_NAME, (num: number) => num);
export const fetchRequestStart = createAction<number>(FETCH_REQUEST_START_NAME, () => 1);
export const fetchRequestFinish = createAction<number>(FETCH_REQUEST_FINISH_NAME, () => 1);

export type CounterDispatchType = (num: number) => void;

export interface CounterState {
  num: number;
  loadingCount: number;
}

export default handleActions<CounterState, number>(
  {
    [INCREMENT_NAME]: (state: CounterState, action: Action<number>) => {
      return action.payload 
        ? {...state, num: state.num + action.payload}
        : state;
    },
    [DECREMENT_NAME]: (state: CounterState, action: Action<number>) => {
      return action.payload 
      ? {...state, num: state.num - action.payload}
      : state;
    },
    [FETCH_REQUEST_START_NAME]: (state: CounterState) => {
      return {...state, loadingCount: state.loadingCount + 1} ;
    },
    [FETCH_REQUEST_FINISH_NAME]: (state: CounterState) => {
      return {...state, loadingCount: state.loadingCount - 1} ;
    },
  },
  {num: 0, loadingCount: 0});
