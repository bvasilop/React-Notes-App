import React from 'react';
import { shallow } from 'enzyme';
import Notes from '../../components/Notes';

const title = '';
const body = '';

test('should render NoteApp correctly', () => {
  const wrapper = shallow(<Notes notes={(title, body)} />);
  expect(wrapper).toMatchSnapshot();
});

test('should render h1 correctly', () => {
  const wrapper = shallow(<Notes notes={(title, body)} />);
  expect(wrapper.find('h1').length).toBe(1);
  expect(wrapper.find('h1').text()).toBe('Notes');
  expect(wrapper).toMatchSnapshot();
});

test('should render p correctly', () => {
  const wrapper = shallow(<Notes notes={(title, body)} />);
  expect(wrapper.find('p').length).toBe(1);
  // expect(wrapper.find('p').text()).toBe('');
  expect(wrapper).toMatchSnapshot();
});

test('should render button correctly', () => {
  const wrapper = shallow(<Notes notes={(title, body)} />);
  expect(wrapper.find('button').length).toBe(1);
  // expect(wrapper.find('button').text()).toBe('remove');
  expect(wrapper).toMatchSnapshot();
});

test('should render error for invalid submission', () => {
  const wrapper = shallow(<Notes />);
  expect(wrapper).toMatchSnapshot();
  wrapper.find('button').simulate('submit', {
    preventDefault: () => {},
  });
});
