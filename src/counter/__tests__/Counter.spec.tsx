import * as React from "react";
import Counter, { StateProps, DispatchProps } from "../Counter";
import { configure, shallow } from "enzyme";
import * as Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

/* === 新規追加ここまで === */
describe('Counter', () => {

  it('rendering', () => {
    const props: StateProps & DispatchProps = {
        num: 123,
        loadingCount: 0,
        onIncrement: (num: number) => {},
        onDecrement: (num: number) => {},
        onIncrementAsync: (num: number) => {},
        onDecrementAsync: (num: number) => {},
    };
    const wrapper = shallow(<Counter {...props} />)
    expect(wrapper.find('p').at(0).prop('children')).toBe('');
    expect(wrapper.find('p').at(1).prop('children')).toBe('score: 123');
  });


  it('rendering in loadding...', () => {
    const props: StateProps & DispatchProps = {
        num: 234,
        loadingCount: 1,
        onIncrement: (num: number) => {},
        onDecrement: (num: number) => {},
        onIncrementAsync: (num: number) => {},
        onDecrementAsync: (num: number) => {},
    };
    const wrapper = shallow(<Counter {...props} />)
    expect(wrapper.find('p').at(0).prop('children')).toBe('Loading...');
    expect(wrapper.find('p').at(1).prop('children')).toBe('score: 234');
  });

  it('click', () => {
    const props: StateProps & DispatchProps = {
        num: 123,
        loadingCount: 0,
        onIncrement: (num: number) => {},
        onDecrement: (num: number) => {},
        onIncrementAsync: (num: number) => {},
        onDecrementAsync: (num: number) => {},
    };
    spyOn(props, 'onIncrement');
    spyOn(props, 'onDecrement');
    spyOn(props, 'onIncrementAsync');
    spyOn(props, 'onDecrementAsync');

    const wrapper = shallow(<Counter {...props} />);
    wrapper.find('button').at(0).simulate('click');
    wrapper.find('button').at(1).simulate('click');
    wrapper.find('button').at(2).simulate('click');
    wrapper.find('button').at(3).simulate('click');
    expect(props.onIncrement).toHaveBeenCalledWith(3);
    expect(props.onDecrement).toHaveBeenCalledWith(2);
    expect(props.onIncrementAsync).toHaveBeenCalledWith(3);
    expect(props.onDecrementAsync).toHaveBeenCalledWith(2);
  });

});