import React from 'react';
import { shallow } from 'enzyme';
import '../setupTests';
import NoteApp from '../../components/NoteApp';

test('should render NoteApp correctly', () => {
  const wrapper = shallow(<NoteApp />);
  expect(wrapper).toMatchSnapshot();
});

test('should render h1 correctly', () => {
  const wrapper = shallow(<NoteApp />);
  expect(wrapper.find('h1').length).toBe(1);
  expect(wrapper.find('h1').text()).toBe('Notes');
  expect(wrapper).toMatchSnapshot();
});

test('should render h2 correctly', () => {
  const wrapper = shallow(<NoteApp />);
  expect(wrapper.find('h2').length).toBe(1);
  expect(wrapper.find('h2').text()).toBe('Add Note');
  expect(wrapper).toMatchSnapshot();
});

test('should render error for invalid submission', () => {
  const wrapper = shallow(<NoteApp />);
  expect(wrapper).toMatchSnapshot();
  wrapper.find('form').simulate('submit', {
    preventDefault: () => {},
  });
});
