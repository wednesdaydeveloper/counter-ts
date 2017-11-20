import { createAction, handleActions, Action } from 'redux-actions';
import * as effects from 'redux-saga/effects';
import { delay } from 'redux-saga';

//
//  action
//
const INCREMENT_NAME: string = 'counter/increment';
const DECREMENT_NAME: string = 'counter/decrement';
const INCREMENT_ASYNC_NAME: string = 'counter/increment_async';
const DECREMENT_ASYNC_NAME: string = 'counter/decrement_async';

export const increment      = createAction<number, number>(INCREMENT_NAME, (num: number) => num);
export const decrement      = createAction<number, number>(DECREMENT_NAME, (num: number) => num);
export const incrementAsync = createAction<number, number>(INCREMENT_ASYNC_NAME, (num: number) => num);
export const decrementAsync = createAction<number, number>(DECREMENT_ASYNC_NAME, (num: number) => num);

export type CounterDispatchType = (num: number) => void;

export interface CounterState {
  num: number;
  loadingCount: number;
}

//
//  reducer
//
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
  },
  {num: 0, loadingCount: 0});

//
//  Saga
//

function* incrementAsyncGenerator(action: Action<number>) {
  yield delay(1000);
  yield effects.put(increment(action.payload ? action.payload : 0));
}

function* decrementAsyncGenerator(action: Action<number>) {
  yield delay(1000);
  yield effects.put(decrement(action.payload ? action.payload : 0));
}

export const saga = function*() {
  yield effects.takeEvery(INCREMENT_ASYNC_NAME, incrementAsyncGenerator);
  yield effects.takeEvery(DECREMENT_ASYNC_NAME, decrementAsyncGenerator);
};